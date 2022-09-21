import React from 'react';
import {
     BottomNavigationAction,BottomNavigation ,Paper,
     Dialog,DialogTitle,Button,TextField} from '@mui/material';
import AdminPanelSettingsSharpIcon from '@mui/icons-material/AdminPanelSettingsSharp';
import SelectSexualOreintation from './CreateProfile/SelectSexualOreintation'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EditIcon from '@mui/icons-material/Edit';
import { Navigate } from 'react-router';
import {LinearProgress} from '@mui/material';
import { styled } from "@mui/material/styles";
import CloseIcon from '@mui/icons-material/Close';
import DateEnter from './CreateProfile/DateEnter';
import GenderEnter from './CreateProfile/GenderEnter';
import ShowMeGender from './CreateProfile/ShowMeGender';
import Passions from './CreateProfile/Passions'
import AddPhotos from './CreateProfile/AddPhotos';
import AxiosInstance from './CreateProfile/AxiosInstance'
import  {
    linearProgressClasses
  } from "@mui/material/LinearProgress";
import { grey } from '@mui/material/colors';
import './Profile.css'
function Profile() {

    //All React useState here ....
//================================================================
     const [completedFilledGender,setFilledGender]=React.useState(true);
     const [completedShowMeGender,setcompletedShowMeGender]=React.useState(true)
     const [completedFilledSexualOreintation,setcompletedFilledSexualOreintation]=React.useState(true)
     const [allowed,setAllowed]=React.useState(false)
     const [completedAddingPhotos,setcompletedAddingPhotos]=React.useState(true)
     const [completedPassions,setCompletedPassions]=React.useState(true)
    const [token,setToken]=React.useState(localStorage.getItem('tinderuser'))
    const [openEdit,setEdit]=React.useState(false)
    const [openSettings,setSettings]=React.useState(false)
    const [value, setValue] = React.useState(1);
    const [progress,setProgress]=React.useState(0)
    const [openCrossDialog,setOpenCrossDialog]=React.useState(false)
    const [saveFirstName,setSaveFirstName]=React.useState('')
    const [date,setDate]=React.useState();
    const [completedFirstName,setcompletedFirstName]=React.useState(false)
    const [completedFilledDate,setcompletedFilledDate]=React.useState(true)
    const [error,setError]=React.useState(false)
    const [autoFocus,setautoFocus]=React.useState(false)
    const [signUpComplete,setSignUpComplete]=React.useState(false)
    const [travelMobile,setTravelMobile]=React.useState(true)
//================================================================
//All use Effects Here
//================================================================
React.useEffect(()=>{
    function handleResize(){
        const height=window.innerHeight
    const width=window.innerWidth
    console.log(height+" "+width)
    if(width>=1008){
        setTravelMobile(false)
    }
    }
    window.addEventListener('resize', handleResize)
   },[])
React.useEffect(()=>{
    if(progress<10 ){
    setTimeout(()=>{
        setProgress(progress+1)
    },10)
}},[progress])
//================================================================
//All custom Components Here
//================================================================
const ContentFirstName=()=>{
    return (
        <div>
            {!travelMobile && <Navigate to="/profileC"/>}
            <h1 className='EnterName'>My First Name is</h1>
            <div className='nameField'>
            {autoFocus?<TextField  fullWidth label={error?"Error":"First Name"} type='text'
            color={error?'error':'info'}
            helperText={error?"The Entry must be between 1 to 22 characters":'This is how your name will appear on tinder'}
            //  helperText="The Entry must be between 1 to 22 characters" 
             variant="standard"
             onFocus={()=>setautoFocus(true)}
             autoFocus
             onChange={(event)=> handleFirstName(event.target.value)}  value={saveFirstName}
              />
              :<TextField  fullWidth label={error?"Error":"First Name"} type='text'
            color={error?'error':'info'}
            helperText={error?"The Entry must be between 1 to 22 characters":'This is how your name will appear on tinder'}
            //  helperText="The Entry must be between 1 to 22 characters" 
             variant="standard"
             onFocus={()=>setautoFocus(true)}
             onChange={(event)=> handleFirstName(event.target.value)}  value={saveFirstName}
              />}
            </div>
            {error?<Button variant='contained' disabled sx={{marginTop:'15%',marginLeft:'10%',padding:'8px 30% 8px 30%',typography:{textTransform:'none'},fontSize:'20px',borderRadius:'30px'
 ,color:grey[300]}} >Continue</Button>
 :<Button variant='contained' sx={{marginTop:'15%',marginLeft:'10%',padding:'8px 30% 8px 30%',typography:{textTransform:'none'},fontSize:'20px',borderRadius:'30px'
 ,background:'linear-gradient(169deg, rgba(253,41,123,1) 0%, rgba(255,88,100,1) 48%, rgba(255,101,91,1) 100%)'}} onClick={handleContineFirstName}>Continue</Button>}
        </div>
    )
}
    const BorderLinearProgress = styled(LinearProgress)((theme) => ({
        height: 10,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            background:grey[300]
          },
          [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            background:'linear-gradient(to top, #ff0066 32%, #ff00ff 100%)'
          }
        
      }));
      //================================================================
      //All Functions Here
      //================================================================
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
    function handleCancelOpen(){
        setOpenCrossDialog(true)
    }
    function handleCancelClose(a){
        if(a){
        setTimeout(()=>{
        setOpenCrossDialog(false)
    },  300)
   }else{
    setOpenCrossDialog(false)
   }
    }
    function handleSignUpClose(){
        localStorage.removeItem('tinderuser')
        setToken(false)
    }
    function handleFirstName(value){
        if(value<1){
            setError(true)
        }else{
            setError(false)
        }
        if(value.length<=22)
        setSaveFirstName(value)
    }
    function handleContineFirstName(){
        if(saveFirstName===''){
            setTimeout(()=>{
            setError(true)
        },200)
        }else{
            
            setTimeout(()=>{
                setcompletedFirstName(true)
        setcompletedFilledDate(false)
            },200)
                setTimeout(()=>{
                    setProgress(progress+10)
                },10)
        }
       // console.log(completedFirstName)
    }
    function handleDateCompleted(){
        
        setTimeout(()=>{
        setcompletedFilledDate(true)
        setFilledGender(false)
        setTimeout(()=>{
            setProgress(progress+10)
        },10)
    },200)
    }
    function HandleDateChange(val){
        setDate(val)
    }
      //  console.log(val.$y)
    function returnToFirstName(){
        setcompletedFirstName(false)
        setcompletedFilledDate(true)
        setTimeout(()=>{
            setProgress(progress-10)
        },10)
    }
    function goBackToDate(){
        setFilledGender(true)
        setcompletedFilledDate(false)
        setTimeout(()=>{
            setProgress(progress-10)
        },10)
    }
    function handleGenderSelectComplete(){
        setFilledGender(true)
        setcompletedFilledSexualOreintation(false)
        setTimeout(()=>{
            setProgress(progress+10)
        },10)
    }
    function goBackToGender(){
        setcompletedFilledSexualOreintation(true)
        setFilledGender(false)
        setTimeout(()=>{
            setProgress(progress-10)
        },10)

    }
    function handleSexualOreintationSelectComplete(){
    setcompletedFilledSexualOreintation(true)
    setcompletedShowMeGender(false)
    setTimeout(()=>{
        setProgress(progress+10)
    },10)
    }
    function goBackToShowOreintation(){
        setcompletedShowMeGender(true)
        setcompletedFilledSexualOreintation(false)
        setTimeout(()=>{
            setProgress(progress-10)
        },10)
    }
    function handleShowMeGenderCompleted(){
        setcompletedShowMeGender(true)
        setCompletedPassions(false)
        setTimeout(()=>{
            setProgress(progress+10)
        },10)
    }
    function goBackToShowMeGender(){
        setCompletedPassions(true)
        setcompletedShowMeGender(false)
        setTimeout(()=>{
            setProgress(progress-10)
        },10)
    }
    function handlePassionSelectComplete(){
        setCompletedPassions(true)
        setcompletedAddingPhotos(false)
        setTimeout(()=>{
            setProgress(progress+10)
        },10)
    }
    function goBackToPassions(){
        setcompletedAddingPhotos(true)
        setCompletedPassions(false)
        setTimeout(()=>{
            setProgress(progress-10)
        },10)
    }
    function handleAddingPhotosComplete(){
        setSignUpComplete(true)
    }
     //================================================================
    return (
        <div>
            {!token && <Navigate to='/'/>}
            {openEdit && allowed && <Navigate to='/editinfo'/>}
            {openSettings && allowed && <Navigate to='/settings'/>}
            {signUpComplete &&  <Navigate to='/profilepage'/>}
            <BorderLinearProgress  variant="determinate" value={progress} />
        {!completedFirstName && 
        <>
        <div>
            <Button variant='text'  onClick={()=>handleCancelOpen(false)} sx={{color:grey[400],borderRadius:'50%',marginTop:'1vh'}} >
            <CloseIcon sx={{color:grey[700]}}/>
            </Button>
            <Dialog onClose={handleCancelClose} open={openCrossDialog}  >
      <DialogTitle sx={{textAlign:'center',fontWeight:'700'}} >
        Are you sure?
      </DialogTitle>
      <h4 className='DialogQuestion'>You will exit out of this signup and all your information will be deleted.</h4>
        <Button variant='contained' sx={{height:'45px',margin:'10px 30px 10px 30px',paddingTop:'8px',paddingBottom:'8px',typography:{textTransform:'none'},fontSize:'20px',borderRadius:'30px'
     ,background:'linear-gradient(169deg, rgba(253,41,123,1) 0%, rgba(255,88,100,1) 48%, rgba(255,101,91,1) 100%)'}} onClick={handleSignUpClose}>Continue</Button>
        <Button variant='outlined' color='error' sx={{height:'45px',margin:'30px',marginTop:'2px',paddingTop:'10px',paddingBottom:'10px',
     typography:{textTransform:'none'},fontSize:'20px',borderRadius:'30px'}} onClick={()=>handleCancelClose(true)}>Cancel</Button>
       </Dialog>
       </div><ContentFirstName/>
       </>}
        {!completedFilledDate&&<DateEnter onHandleCompleted={handleDateCompleted} value={date} setDate={setDate} onHandleDateChange={HandleDateChange} returnToFirstName={returnToFirstName} />}
        {!completedFilledGender &&<GenderEnter goBackToDate={goBackToDate} handleGenderSelectComplete={handleGenderSelectComplete}/>}
        {!completedFilledSexualOreintation &&<SelectSexualOreintation goBackToGender={goBackToGender} handleSexualOreintationSelectComplete={handleSexualOreintationSelectComplete}/>}
        {!completedShowMeGender && <ShowMeGender goBackToShowOreintation={goBackToShowOreintation} handleShowMeGenderCompleted={handleShowMeGenderCompleted}/>}
        {!completedPassions && <Passions goBackToShowMeGender={goBackToShowMeGender} handlePassionSelectComplete={handlePassionSelectComplete}/>}
        {!completedAddingPhotos && <AddPhotos goBackToPassions={goBackToPassions} handleAddingPhotosComplete={handleAddingPhotosComplete}/>}
            <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0,}}
        elevation={6}
      >
            </Paper>
        </div>
    );
}

export default Profile;