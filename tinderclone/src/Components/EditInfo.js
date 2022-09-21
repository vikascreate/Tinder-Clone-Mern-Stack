import React from 'react';
import { BottomNavigationAction,BottomNavigation ,Paper} from '@mui/material';
import AdminPanelSettingsSharpIcon from '@mui/icons-material/AdminPanelSettingsSharp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EditIcon from '@mui/icons-material/Edit';
import { Navigate } from 'react-router';
function EditInfo(props) {
    const token=localStorage.getItem('tinderuser')
    const user=false
    const [value, setValue] = React.useState(2);
    const [openProfile,setProfile]=React.useState(false)
    const [openSettings,setSettings]=React.useState(false)
    const [travelMobile,setTravelMobile]=React.useState(false)
   React.useEffect(()=>{
    const height=window.innerHeight
    const width=window.innerWidth
    console.log(height+" "+width)
    if(width<1024){
        setTravelMobile(true)
    }
   },[])
    function traveltoProfile(){
        setTimeout(()=>{
            setProfile((old)=> !old)
        },  300)
    }
    function traveltoSettings(){
        setTimeout(()=>{
        setSettings((old)=> !old)
    },  300)
    }
    return (
        <div>
            {!token && <Navigate to='/'/>}
            {openProfile && <Navigate to='/profilepage'/>}

            {openSettings && <Navigate to='/settings'/>}
            {user &&<h1>user</h1>}
            <h1>Edit Info Here</h1>
            <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0,}}
        elevation={6}
      >
            <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
              }}
            >
                <BottomNavigationAction icon={<AdminPanelSettingsSharpIcon/>} label="Setting" sx={{maxWidth:'100%'}} onClick={traveltoSettings}></BottomNavigationAction>
                <BottomNavigationAction icon={<AccountCircleIcon/>} label='Profile' sx={{maxWidth:'100%'}}  onClick={traveltoProfile}></BottomNavigationAction>
                <BottomNavigationAction icon={<EditIcon/>} label="Edit Info" sx={{maxWidth:'100%'}}></BottomNavigationAction>
            </BottomNavigation>
            </Paper>
        </div>
        );
    }
    
    export default EditInfo;