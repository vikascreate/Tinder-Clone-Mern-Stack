import React from 'react';
import './ProfileC.css'
import gender from './GetGenders';
import { BottomNavigationAction, Button,BottomNavigation 
    ,Paper,Dialog,DialogTitle, TextField, Checkbox, IconButton,List,ListItemText,Divider, ListItemButton} from '@mui/material';
import AdminPanelSettingsSharpIcon from '@mui/icons-material/AdminPanelSettingsSharp';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import EditIcon from '@mui/icons-material/Edit';
import { Navigate } from 'react-router';
import { grey, red } from '@mui/material/colors';
function ProfileC() {
    const token=localStorage.getItem('tinderuser')
    const [selectedGender,setselectedGender]=React.useState(0);
    const [dd,setDD]=React.useState();
    const [mm,setMM]=React.useState();
    const [yyyy,setYYYY]=React.useState();
    const [value, setValue] = React.useState(1);
    const [openEdit,setEdit]=React.useState(false)
    const [openSettings,setSettings]=React.useState(false)
    const [openMore,setOpenMore]=React.useState(false)
   const [selectedIndex, setSelectedIndex] = React.useState(-1);
   const [travelMobile,setTravelMobile]=React.useState(false)
   const [signUpComplete,setSignUpComplete]=React.useState(false)
   React.useEffect(()=>{
    function handleResize(){
        const height=window.innerHeight
    const width=window.innerWidth
    console.log(height+" "+width)
    if(width<1008){
        setTravelMobile(true)
    }
    }
    window.addEventListener('resize', handleResize)
   },[])
    function traveltoEdit(){
        setTimeout(()=>{
        setEdit((old)=> !old)
        },  300)
    }
    function traveltoSettings(){
        setTimeout(()=>{
        setSettings((old)=> !old)
        },  300)
    }
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
    function handleChangeBirthDate(val,num){
        if(num===1){
            setDD(val)
        }
        if(num===2){
            setMM(val)
        }
        if(num===3){
            setYYYY(val)
        }
    }
    function handleSignUpComplete(){
        setSignUpComplete(true)
    }
    return (
        <div>
            {!token && <Navigate to='/'/>}
            {openEdit && <Navigate to='/editinfo'/>}
            {openSettings && <Navigate to='/settings'/>}
            {travelMobile && <Navigate to='/profile'/>}
            {signUpComplete && <Navigate to='/profilepage'/>}
            <h1 className='ProfileTitle'>CREATE PROFILE</h1>
            <form >
                <div className='Form' style={{display:'flex'}}>
                  <div className='FillEntry'>
                <h5>First Name</h5>
                <TextField required type='name' placeholder='First Name'></TextField>
                <h5>BirthDay</h5>
                <div className='BirthDate'>
                <TextField required type='number'  placeholder='DD' sx={{maxWidth:'60px'}} value={dd}  onChange={(event)=>handleChangeBirthDate(event.target.value,1)}></TextField>
                <TextField required type='number' sx={{maxWidth:'60px'}} value={mm} placeholder='MM'  onChange={(event)=>handleChangeBirthDate(event.target.value,2)}></TextField>
                <TextField required type='number' sx={{maxWidth:'100px'}} value={yyyy} placeholder='YYYY'  onChange={(event)=>handleChangeBirthDate(event.target.value,3)}></TextField>
                </div>
                {/* Content for Gender Starts Here */}
                <h5>Gender</h5>
                <div className='SetGenderButton'>
                <Button variant='outlined' onClick={()=>handleSetGenderClick(1)} sx={{borderColor:selectedGender===1?red[700]:grey[600],borderWidth:'2px',
                color:selectedGender===1?red[700]:grey[600],':hover':{
                    borderColor:selectedGender===1?red[700]:grey[600],borderWidth:'2px',
                color:selectedGender===1?red[700]:grey[600]
                }}}>Man</Button>
                <Button variant='outlined' onClick={()=>handleSetGenderClick(2)} sx={
                    {borderColor:selectedGender===2?red[700]:grey[600],borderWidth:'2px',
                color:selectedGender===2?red[700]:grey[600],':hover':{
                    borderColor:selectedGender===2?red[700]:grey[600],borderWidth:'2px',
                color:selectedGender===2?red[700]:grey[600]
                }}}>Woman</Button>
                
                <Button variant='outlined'  onClick={handleGenderMoreClick}  sx={
                    {borderColor:selectedGender===3?red[700]:grey[600],borderWidth:'2px',
                color:selectedGender===3?red[700]:grey[600],':hover':{
                    borderColor:selectedGender===3?red[700]:grey[600],borderWidth:'2px',
                color:selectedGender===3?red[700]:grey[600]
                }}}>{selectedIndex===-1?'More':gender.find(item => item.num===selectedIndex).item}</Button>
                </div>
                <Dialog onClose={handleGenderMoreClose} open={openMore} sx={{marginTop:'10%',maxHeight:'500px'}}>
                    <div className='GenderSelection'>
                    <IconButton onClick={handleGenderMoreClose} sx={{color:red[500],paddingLeft:'10px',paddingRight:'20px',marginLeft:'20px'}}><ArrowBackIosIcon/></IconButton>
      <DialogTitle >Select Gender</DialogTitle>
      </div>
      <List sx={{ width: '100%', bgcolor: 'background.paper'}}>
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
    {/* Content for Gender End Here */}
                <br></br>
                <div className='ShowMyGender'>
                <Checkbox></Checkbox>
                <h6>Show my gender on my profile</h6>
                </div>
                <h5>Show me</h5>
                <div className='GendersShowME'>
                <Button variant='outlined' color='error'>Man</Button>
                <Button variant='outlined' color='error'>Woman</Button>
                <Button variant='outlined' color='error'>EveryOne</Button>
                </div>
                   </div>
                   <div className='Images'>
                    <h5>Profile Photo</h5>
                    <div style={{backgroundImage:`url()`}}
                    className="card">

                    </div>
                    <div className='InputImage'>
                    <IconButton  size="large" color="error" aria-label="upload picture" component="label">
                  <CameraAltIcon />
                   </IconButton>
                   </div>
                    <Button variant="contained" sx={{bottom:'0',marginTop:'30vh'}} onClick={handleSignUpComplete}>continue</Button>
                </div>
                </div>
            </form>
            <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0,}}
        elevation={6}
      >
            </Paper>
        </div>
    );
}

export default ProfileC;