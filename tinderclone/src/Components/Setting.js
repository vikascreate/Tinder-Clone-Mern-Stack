import React from 'react';
import { BottomNavigationAction, Button,BottomNavigation ,Paper} from '@mui/material';
import AdminPanelSettingsSharpIcon from '@mui/icons-material/AdminPanelSettingsSharp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EditIcon from '@mui/icons-material/Edit';
import { Navigate } from 'react-router';
function Setting(props) {
    const [token,setToken]=React.useState(localStorage.getItem('tinderuser'))
    const user=false
    const [value, setValue] = React.useState(0);
    const [openProfile,setProfile]=React.useState(false)
    const [openEdit,setEdit]=React.useState(false)
    const [travelMobile,setTravelMobile]=React.useState(false)
   React.useEffect(()=>{
    const height=window.innerHeight
    const width=window.innerWidth
    console.log(height+" "+width)
    if(width<1024){
        setTravelMobile(true)
    }
   },[])
    function handleClick(){
        localStorage.removeItem('tinderuser')
        setToken(false)
    }
    function traveltoProfile(){
        setTimeout(()=>{
        setProfile((old)=> !old)
       },  300)
    }
    function traveltoEdit(){
        setTimeout(()=>{
        setEdit((old)=> !old)
    },  300)
    }
    return (
        <div>
            {!token && <Navigate to='/'/>}
            {openEdit && <Navigate to='/editinfo'/>}
            {openProfile &&  <Navigate to='/profilepage'/>}
            {user &&<h1>user</h1>}
            <h1>Setting here</h1>
            <Button variant='contained' onClick={handleClick}>Log Out</Button>
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
                <BottomNavigationAction icon={<AdminPanelSettingsSharpIcon/>} label="Setting" sx={{maxWidth:'100%'}} ></BottomNavigationAction>
                <BottomNavigationAction icon={<AccountCircleIcon/>} label='Profile' sx={{maxWidth:'100%'}} onClick={traveltoProfile}></BottomNavigationAction>
                <BottomNavigationAction icon={<EditIcon/>} label="Edit Info" sx={{maxWidth:'100%'}} onClick={traveltoEdit}></BottomNavigationAction>
            </BottomNavigation>
            </Paper>
        </div>
        );
    }
    
    export default Setting;