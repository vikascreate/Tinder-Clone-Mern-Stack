import React from 'react';
import PassionList from './PassionList';
import { Button,IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './Passions.css'
import { grey, purple,green, pink} from '@mui/material/colors';
function Passions(props) {
    const colors=["primary","warning","error","success","secondary"]
    const [countSelected,setCountSelected]=React.useState(0);
    const[selectedPassions,setselectedPassions]=React.useState([])
    
    
    const theme = createTheme({
      palette: {
        primary: {
          // Purple and green play nicely together.
          main: purple[500],
        },
        secondary: {
          // This is green.A700 as hex.
          main: pink[600],
        },
        success:{
            main:green[300],
        },
        inherit:{
            main:grey[700]
        },
        abcd:{
            main:grey[700]
        },
      },
    });
    function handleClickOnList(val){
        setTimeout(()=>{
            const ind=selectedPassions.findIndex((item)=>item.id===val)
            if(ind===-1){
                if(countSelected<5){
                const color=colors[Math.floor(Math.random()*colors.length)]
                setCountSelected(countSelected+1)
                setselectedPassions((old)=> [...old,{id:val,color:color}])
                }
            }else{
                setCountSelected(countSelected-1)
                var artemp=selectedPassions.filter((item) => item.id!==val);
                setselectedPassions(artemp)
                
            }
           // console.log(val+" "+countSelected+" "+ind)
           // console.log(selectedPassions)
        },200)

    }
    return (
        <div>
             <div className='navoreint'>
             <IconButton variant='text'  sx={{color:grey[400],borderRadius:'50%',marginTop:'1vh'}} onClick={props.goBackToShowMeGender} >
            <ArrowBackIosNewIcon sx={{color:grey[700]}}/>
            </IconButton>
            <h4 className='Skip'>SKIP</h4>
            </div>
            <h1 className='TitleSelectGender'>Passions</h1>
            <h5 className='selectupto passionA'>Let everone know what you're passionate about by adding it to your profile</h5>
            <div className='PassionListPrint'>
            <ThemeProvider theme={theme}>
            {PassionList.map((item)=>{
              //  const color=colors[Math.floor(Math.random()*colors.length)]
                const selected=selectedPassions.findIndex((val)=>val.id===item.id)>=0
              const getColor=selected?selectedPassions[selectedPassions.findIndex((val)=>val.id===item.id)].color:false
                return(
                    selected?
                <Button variant='outlined' key={item.id} onClick={()=>handleClickOnList(item.id)}  sx={
                    {margin:'1%',borderRadius:'25px',typography:{textTransform:'none'}} } color={getColor}
                >{item.Passion}</Button>
                :countSelected===5?
                <Button variant='outlined' key={item.id} disabled  sx={
                    {margin:'1%',borderRadius:'25px',color:grey[700],borderColor:
                    grey[700],typography:{textTransform:'none'}}} 
                >{item.Passion}</Button>
                :
                <Button variant='outlined' key={item.id} onClick={()=>handleClickOnList(item.id)}  sx={
                    {margin:'1%',borderRadius:'25px',typography:{textTransform:'none'}}} color='abcd'
                >{item.Passion}</Button>
                )
            })}
            </ThemeProvider>
            </div>
            <Button variant='contained' sx={{marginTop:'5%',marginLeft:'10%',padding:'8px 25% 8px 25%',typography:{textTransform:'none'},fontSize:'20px',borderRadius:'30px'
     ,background:'linear-gradient(169deg, rgba(253,41,123,1) 0%, rgba(255,88,100,1) 48%, rgba(255,101,91,1) 100%)'}} onClick={props.handlePassionSelectComplete}>Continue {`${countSelected}/5`}</Button>
        </div>
    );
}

export default Passions;