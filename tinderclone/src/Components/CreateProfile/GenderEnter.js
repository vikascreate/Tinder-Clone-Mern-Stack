import React from 'react';
import gender from '../GetGenders';
import './GenderEnter.css'
import { Button,Dialog,IconButton,DialogTitle,List,Divider,ListItemButton,ListItemText,Checkbox } from '@mui/material';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { red,grey } from '@mui/material/colors';
function GenderEnter(props) {
    const [selectedGender,setselectedGender]=React.useState(0);
    const [selectedIndex, setSelectedIndex] = React.useState(-1);
    const [openMore,setOpenMore]=React.useState(false)
    function handleGenderMoreClick(){
        setOpenMore(true)
        setselectedGender(3)
    }
    function handleGenderMoreClose(){
        setOpenMore(false)
    }
    function handleGenderSelectClick(num){
        setSelectedIndex(num)
    }
    function handleSetGenderClick(num){
        if(num===1){
            setselectedGender(1)
        }
        else if(num===2){
            setselectedGender(2)
        }
        setSelectedIndex(-1)
    }
    return (
        <div className='GenderContainer'>
             {/* Content for Gender Starts Here */}
             <IconButton variant='text'  sx={{color:grey[400],borderRadius:'50%',marginTop:'1vh'}} onClick={props.goBackToDate} >
            <ArrowBackIosNewIcon sx={{color:grey[700]}}/>
            </IconButton>
             <h1 className='GenderTitle'>I am a</h1>
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
                
                <Button variant='outlined'  onClick={handleGenderMoreClick}  sx={
                    {borderRadius:'25px',height:'50px',borderColor:selectedGender===3?red[700]:grey[600],borderWidth:'2px',
                color:selectedGender===3?red[700]:grey[600],':hover':{
                    borderColor:selectedGender===3?red[700]:grey[600],borderWidth:'2px',
                color:selectedGender===3?red[700]:grey[600]
                }}}>{selectedIndex===-1?'More':gender.find(item => item.num===selectedIndex).item}
                <ArrowForwardIosIcon sx={{color:grey[200]}}/></Button>
                </div>
                <Dialog onClose={handleGenderMoreClose} open={openMore}  fullScreen>
                    <div className='GenderSelection'>
                    <IconButton onClick={handleGenderMoreClose} sx={{color:red[500],paddingLeft:'10px',paddingRight:'20px',marginLeft:'20px'}}><ArrowBackIosIcon/></IconButton>
      <DialogTitle >Select Gender</DialogTitle>
      </div>
      <List sx={{ width: '100%', bgcolor: 'background.paper',position:'relative',maxHeight:1000,overflow:'auto'}}>
        {gender.map((item)=>{
            return (
                <div key={item.num}>
                <Divider/>
            <ListItemButton alignItems="flex-start"  selected={selectedIndex===item.num} onClick={()=>handleGenderSelectClick(item.num)}>
        <ListItemText
          primary={item.item}
        />
      </ListItemButton>
      </div>
)})}
     
    </List>
    </Dialog>
    {/*  */}
          <br></br>
                <div className='ShowMyGenderG'>
                <Checkbox color='error'></Checkbox>
                <h6>Show my gender on my profile</h6>
                </div>
                <Button variant='contained' sx={{marginTop:'5%',marginLeft:'10%',padding:'8px 30% 8px 30%',typography:{textTransform:'none'},fontSize:'20px',borderRadius:'30px'
     ,background:'linear-gradient(169deg, rgba(253,41,123,1) 0%, rgba(255,88,100,1) 48%, rgba(255,101,91,1) 100%)'}} onClick={props.handleGenderSelectComplete}>Continue</Button>
        </div>
    );
}

export default GenderEnter;