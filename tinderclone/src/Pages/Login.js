import React from 'react';
import Paper from '@mui/material/Paper';
import axios from '../Components/axios.js';
import './Login.css'
import {Link,Navigate} from 'react-router-dom'
import { Button,TextField,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle } from '@mui/material';
import logo from './logo.png'
function Login(props) {
    
    const [auth,setAuth]=React.useState(false)
    const [email,setEmail]=React.useState('');
    const [password,setPassword]=React.useState('')
    const [correctMail,setCorrectMail]=React.useState(true)
    const [correctPassword,setCorrectPassword]=React.useState(true)
    const [travelMobile,setTravelMobile]=React.useState(false)
    const [open, setOpen] = React.useState(false);
   React.useEffect(()=>{
    const height=window.innerHeight
    const width=window.innerWidth
    console.log(height+" "+width)
    if(width<1024){
        setTravelMobile(true)
    }
    setTimeout(()=>{
        setOpen(true)
    },2000)
   },[])
    const handleSubmit=(event)=>{
        event.preventDefault();
        if(email.length>0&&password.length>0)
        // {fetchData()}
        // async function fetchData(){
        //     const req=await axios.post('/user/logged',{
        //         email:email,
        //         password:password
        //     })
        //     if(await req.data.user){
        //         localStorage.setItem('tinderuser',req.data.user)
        //         setAuth(true)
        //     }else{
        //        if(req.data.message==='Incorrect Email'){
        //         setCorrectMail(false)
        //        }else if(req.data.message==='Incorrect Password'){
        //         setCorrectMail(true)
        //         setCorrectPassword(false)
        //        }
        //     }
        // }
        localStorage.setItem('tinderuser','tokena')
        setAuth(true)
            
    }
    function handleClose(){
        setOpen(false)
    }
    return (
        <div className="Paper">
            {auth && travelMobile && <Navigate to="/app/onboarding"/>}
            {auth && !travelMobile && <Navigate to="/profileC"/>}
            <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Switch to Mobile View?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Use Mobile View for better design and form filling
             in case you are new here
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}  color='error'>Ignore</Button>
        </DialogActions>
      </Dialog>
            <Paper elevation={24} className="Enter" children={
            <>
            <form className='FormLogin' onSubmit={handleSubmit}>
            <img src={logo} className='logo'></img>
            <h1 className='title'>Login</h1>
            {correctMail?<TextField required type="email" label="Email" value={email}  onChange={(e)=>{setEmail(e.target.value)}} variant="outlined"></TextField>:<TextField required type="email" error label="Email" value={email} helperText='Incorrect Email' onChange={(e)=>{setEmail(e.target.value)}} variant="outlined"></TextField>}
            {correctPassword?<TextField required type="password"  label='Passsword' value={password} 
                onChange={(e)=>{setPassword(e.target.value)}} variant="outlined"></TextField>:
                <TextField required type="password" error label='Passsword' value={password} helperText='Incorrect Password' 
                onChange={(e)=>{setPassword(e.target.value)}} variant="outlined"></TextField>}
                <Button variant='contained' className='Submit' onClick={handleSubmit} type='submit'>Submit</Button>
                <Link to='/signup' className='sign'><Button variant='contained' >Sign Up</Button></Link>
            </form>
               </>
            }/>
        </div>
    );
}

export default Login;