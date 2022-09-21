import React from 'react';
import Paper from '@mui/material/Paper';
import axios from '../Components/axios';
import './Login.css'
import { Button,TextField } from '@mui/material';
import {Link,Navigate} from 'react-router-dom'
import logo from './logo.png'
function Sign(props) {
    const [email,setEmail]=React.useState('');
    const [auth,setAuth]=React.useState(false)
    const [password,setPassword]=React.useState('')
    const handleSubmit =(event) =>{
        event.preventDefault();
        fetch()
        async function fetch(){await axios.post('/user/register',{
                email:email,
                password:password
            })}
        setAuth(true)
    }
    return (
        <div className="Paper">
             {auth && <Navigate to="/"/>}
            <Paper elevation={24} className="Enter" children={
            <>
            <form className='FormLogin' onSubmit={handleSubmit}>
            <img src={logo} className='logo'></img>
            <h1 className='title'>Sign Up</h1>
                <TextField required variant="outlined" type="email" label="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}></TextField>
                <TextField required variant="outlined" type="password" label='Passsword' value={password} onChange={(e)=>{setPassword(e.target.value)}}></TextField>
                <Button variant='contained' type='submit'>Submit</Button>
                <Link to='/' className='sign'><Button variant='contained'>Login</Button></Link>
            </form>
            </>
            }/>
        </div>
    );
}

export default Sign;