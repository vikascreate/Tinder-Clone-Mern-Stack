import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import './Header.css'
import { IconButton, Paper } from '@mui/material';
import Tinder from './tinder.png'
import ForumIcon from '@mui/icons-material/Forum';
import {Link,Navigate} from 'react-router-dom'
function Header(props) {
    const token=localStorage.getItem('tinderuser')
    
   const [travelMobile,setTravelMobile]=React.useState(false)
    React.useEffect(()=>{
        const height=window.innerHeight
        const width=window.innerWidth
        console.log(height+" "+width)
        if(width<1024){
            setTravelMobile(true)
        }
       },[])
    return (
        <nav>
            <Paper 
        elevation={3}>
        {!token && <Navigate to='/'/>}
        <div className='header'>
            <Link to={'/profilepage'}>
           <IconButton>
           <PersonIcon fontSize='large' className='header_icon'/>
           </IconButton>
           </Link>
           <Link to='/home'>
           <img src={Tinder} className='header_logo' alt='img here'/>
           </Link>
           <Link to='/chats'>
           <IconButton>
           <ForumIcon fontSize='large' className='header_icon'/>
           </IconButton>
           </Link>
        </div>
        <span className='hide'></span>
        </Paper>
        </nav>
    );
}

export default Header;