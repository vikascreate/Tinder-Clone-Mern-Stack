import React from 'react';
import './DateEnter.css'
import { Button,IconButton } from '@mui/material';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { grey } from '@mui/material/colors';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
function DateEnter(props) {
    return (
        <div>
            <div>
            <div>
            <IconButton variant='text'  sx={{color:grey[400],borderRadius:'50%',marginTop:'1vh'}} onClick={props.returnToFirstName} >
            <ArrowBackIosNewIcon sx={{color:grey[700]}}/>
            </IconButton>
       </div>
            <h1 className='DateTitle'>My BirthDay is</h1>
            <div className='DateEntryField'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MobileDatePicker
          label="Birth Day"
          value={props.value}
          onChange={props.onHandleDateChange}
          disableFuture
          renderInput={(params) => <TextField color='error' sx={{width:'80%'}} {...params} />}
        />
            </LocalizationProvider>
            </div>
            <h5 className='DateFieldFooter'>Your age will be public</h5>
            <Button variant='contained'   sx={{marginTop:'5%',marginLeft:'10%',padding:'8px 30% 8px 30%',typography:{textTransform:'none'},fontSize:'20px',borderRadius:'30px'
     ,background:'linear-gradient(169deg, rgba(253,41,123,1) 0%, rgba(255,88,100,1) 48%, rgba(255,101,91,1) 100%)'}} onClick={props.onHandleCompleted}>Continue</Button>
        </div>
        </div>
    );
}

export default DateEnter;