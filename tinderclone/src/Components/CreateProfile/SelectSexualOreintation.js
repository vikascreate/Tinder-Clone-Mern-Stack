import { Divider, List, ListItem, ListItemText,Checkbox,Button ,IconButton} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import DoneIcon from '@mui/icons-material/Done';
import React from 'react';
import './SelectSexualOreintation.css'
import { grey, red } from '@mui/material/colors';

function SelectSexualOreintation(props) {
    const [countSelected,setCountSelected]=React.useState(0)
    const[selectedOreintations,setselectedOreintations]=React.useState([])
    const OreintationList=[
        {id:1,gender:'Straight'},{id:2,gender:'Gay'},{id:3,gender:'Lesbian'},{id:4,gender:'Bisexual'}
        ,{id:5,gender:'Asexual'},{id:6,gender:'Demisexual'},{id:7,gender:'Pansexual'},{id:8,gender:'Queer'},{id:9,gender:'Questioning'}
        ,{id:10,gender:'Bicurious'},{id:11,gender:'Aromatic'}
    ]
    function handleClickOnList(val){
        setTimeout(()=>{
            const ind=selectedOreintations.findIndex((item)=>item===val)
            if(ind===-1){
                if(countSelected<3){
                setCountSelected(countSelected+1)
                setselectedOreintations((old)=> [...old,val])
                }
            }else{
                setCountSelected(countSelected-1)
                var artemp=selectedOreintations.filter((item)=>item!==val);
                setselectedOreintations(artemp)
                
            }
           // console.log(val+" "+countSelected+" "+ind)
           // console.log(selectedOreintations)
        },200)

    }
    return (
        <div className='OreintationContainer'>
            <div className='navoreint'>
             <IconButton variant='text'  sx={{color:grey[400],borderRadius:'50%',marginTop:'1vh'}} onClick={props.goBackToGender} >
            <ArrowBackIosNewIcon sx={{color:grey[700]}}/>
            </IconButton>
            <h4 className='Skip'>SKIP</h4>
            </div>
            <h1 className='TitleSelectGender'>My Sexual Oreintation is</h1>
            <h5 className='selectupto'>Select up to 3</h5>
            <div className='ListPlacing'>
                <List sx={{
        width: '100%',
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 300,
      }}>
                    {
                        OreintationList.map((item)=>{
                            return(
                                <div key={item.id}>
                            <ListItem key={item.id} secondaryAction={selectedOreintations.findIndex((val)=>val===item.id)>=0?
                                <DoneIcon color='error'/>:
                                <></>
                            }
                            onClick={()=>handleClickOnList(item.id)}
                            ><ListItemText sx={selectedOreintations.findIndex((val)=>val===item.id)>=0?
                            {color:red[400]}:countSelected===3?{color:grey[300]}:{color:'black'}} >{item.gender}</ListItemText>
                            </ListItem>
                            <Divider/>
                            </div>
                        )})
                    }
                </List>
                <div className='ShowMyGenderG'>
                <Checkbox color='error'></Checkbox>
                <h6 className='OreintationFooter'>Show my Oreintation on my profile</h6>
                </div>
                <Button variant='contained' sx={{marginTop:'5%',marginLeft:'10%',padding:'8px 30% 8px 30%',typography:{textTransform:'none'},fontSize:'20px',borderRadius:'30px'
     ,background:'linear-gradient(169deg, rgba(253,41,123,1) 0%, rgba(255,88,100,1) 48%, rgba(255,101,91,1) 100%)'}} onClick={props.handleSexualOreintationSelectComplete}>Continue</Button>
            </div>
        </div>
    );
}

export default SelectSexualOreintation;