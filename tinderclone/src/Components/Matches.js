import React from 'react';
import './Chats.css'

import {  Tab,Tabs,Paper } from '@mui/material';
import { Navigate } from 'react-router-dom';
import { orange, red } from '@mui/material/colors';
function Matches(props) {
  const token=localStorage.getItem('tinderuser')
  const [openMessages,setopenMessages]=React.useState(false)
  function travel(){
    setTimeout(()=>{
    setopenMessages((old)=> !old)
  },  300)
  }
    return (
        <>
         {!token && <Navigate to='/'/>}
         {openMessages && <Navigate to='/chats'/>}
         <Paper 
        elevation={2}>
        <Tabs  variant="fullWidth"  centered><Tab sx={{color:red[500]}} label="Messages" onClick={travel} />
        <Tab sx={{color:orange[500]}} label="Matches" />
</Tabs>
</Paper>
        <h2>Matches Here</h2>
   </>
    );
}

export default Matches;