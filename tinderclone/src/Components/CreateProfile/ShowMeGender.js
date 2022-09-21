import React from 'react';
import { IconButton,Button } from '@mui/material';
import { red,grey } from '@mui/material/colors';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

function ShowMeGender(props) {
    const [selectedGender,setselectedGender]=React.useState(0);
    function handleSetGenderClick(num){
        if(num===1){
            setselectedGender(1)
        }
        else if(num===2){
            setselectedGender(2)
        }
        else if(num===3){
            setselectedGender(3)
        }
    }
    return (
        <div className='GenderContainer'>
        {/* Content for Gender Starts Here */}
        <div className='navoreint'>
        <IconButton variant='text'  sx={{color:grey[400],borderRadius:'50%',marginTop:'1vh'}} onClick={props.goBackToShowOreintation} >
       <ArrowBackIosNewIcon sx={{color:grey[700]}}/>
       </IconButton>
       <h4 className='Skip'>SKIP</h4>
       </div>
        <h1 className='GenderTitle'>Show me</h1>
           <div className='SetGenderButtonG'>
           <Button variant='outlined' onClick={()=>handleSetGenderClick(1)} sx={{borderRadius:'25px',height:'50px',borderColor:selectedGender===1?red[700]:grey[600],borderWidth:'2px',
           color:selectedGender===1?red[700]:grey[600],':hover':{
               borderColor:selectedGender===1?red[700]:grey[600],borderWidth:'2px',
           color:selectedGender===1?red[700]:grey[600]
           }}}>Man</Button>
           <Button variant='outlined' onClick={()=>handleSetGenderClick(2)} sx={
               {borderRadius:'25px',height:'50px',borderColor:selectedGender===2?red[700]:grey[600],borderWidth:'2px',
           color:selectedGender===2?red[700]:grey[600],':hover':{
               borderColor:selectedGender===2?red[700]:grey[600],borderWidth:'2px',
           color:selectedGender===2?red[700]:grey[600]
           }}}>Woman</Button>
           
           <Button variant='outlined'  onClick={()=>handleSetGenderClick(3)}  sx={
               {borderRadius:'25px',height:'50px',borderColor:selectedGender===3?red[700]:grey[600],borderWidth:'2px',
           color:selectedGender===3?red[700]:grey[600],':hover':{
               borderColor:selectedGender===3?red[700]:grey[600],borderWidth:'2px',
           color:selectedGender===3?red[700]:grey[600]
           }}}>EveryOne</Button>
           </div>
          
           <Button variant='contained' sx={{
           // marginLeft:'11%',marginRight:'11%',
            padding:'8px 30% 8px 30%',
            borderRadius:'25px',height:'50px',borderWidth:'2px'
           ,marginTop:'15%',typography:{textTransform:'none'},fontSize:'20px',marginLeft:'auto',marginRight:'auto',display:'block'
        //    ,borderRadius:'30px'
           ,background:'linear-gradient(169deg, rgba(253,41,123,1) 0%, rgba(255,88,100,1) 48%, rgba(255,101,91,1) 100%)'}} onClick={props.handleShowMeGenderCompleted}>Continue</Button>
   </div>
    );
}

export default ShowMeGender;