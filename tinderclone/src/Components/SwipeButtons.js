import React from 'react';
import { IconButton } from '@mui/material';
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavioriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { Navigate } from 'react-router';
import './SwipeButtons.css'
function SwipeButtons(props) {
    const token=localStorage.getItem('tinderuser')
    return (
        <div className='swipeButtons'>
             {!token && <Navigate to='/'/>}
            <IconButton className='swipeButtons__repeat'>
                <ReplayIcon fontSize='large'/>
            </IconButton>
            <IconButton className='swipeButtons__left'>
                <CloseIcon fontSize='large' />
            </IconButton>
            <IconButton className='swipeButtons__star'>
                <StarRateIcon fontSize='large' />
            </IconButton>
            <IconButton className='swipeButtons__right'>
                <FavioriteIcon fontSize='large'/>
            </IconButton>
            <IconButton className='swipeButtons__lightning'>
                <FlashOnIcon fontSize='large' />
            </IconButton>
        </div>
    );
}

export default SwipeButtons;