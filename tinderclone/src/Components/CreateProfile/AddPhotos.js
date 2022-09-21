import React from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { grey } from '@mui/material/colors';
import { IconButton,Button } from '@mui/material';
import './AddPhotos.css'
function AddPhotos(props) {
  const [img,setImg]=React.useState()
  const [img1,setImg1]=React.useState();
  const [img2,setImg2]=React.useState();
  const [img3,setImg3]=React.useState();
  const [img4,setImg4]=React.useState();
  const [img5,setImg5]=React.useState();
  const [count,setCount]=React.useState(0);
  function handleSubmitImage(files,val){
    if(files!==undefined && files.length!==0){
      var imgs=URL.createObjectURL(files[0])
      if(val===1){
        setCount(count+1)
    setImg(imgs)
    console.log(img)
  }else if(val===2){
    setCount(count+1)
    setImg1(imgs)
    console.log(img1)
  }
  else if(val===3){
    setCount(count+1)
    setImg2(imgs)
    console.log(img2)
  }
  else if(val===4){
    setCount(count+1)
    setImg3(imgs)
    console.log(img3)
  }
  else if(val===5){
    setCount(count+1)
    setImg4(imgs)
    console.log(img4)
  }else if(val===6){
    setCount(count+1)
    setImg5(imgs)
    console.log(img5)
  }
  }
  }
    return (
        <div>
             <IconButton variant='text'  sx={{color:grey[400],borderRadius:'50%',marginTop:'1vh'}}  onClick={props.goBackToPassions}>
            <ArrowBackIosNewIcon sx={{color:grey[700]}}/>
            </IconButton>
            <h1 className='TitleSelectGender'>Add Photos</h1>
            <h5 className='selectupto'>Add at least 2 photos</h5>
            <div className='TopPhotosContainer'>
            <div className='PhotosContainer'>
            <div style={{backgroundImage:`url(${img})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}
                    className="cardA">
                    <div className='InputImageA'>
                    <IconButton  size="large" color="error" aria-label="upload picture" component="label" onClick={(event)=> handleSubmitImage(event.target.files,1)}>
                    <input hidden accept="image/*" type="file" />
                  <CameraAltIcon />
                   </IconButton>
                   </div>
                </div>
                <div style={{backgroundImage:`url(${img1})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}
                    className="cardA">
                    <div className='InputImageA'>
                    <IconButton  size="large" color="error" aria-label="upload picture" component="label" onClick={(event)=> handleSubmitImage(event.target.files,2)}>
                    <input hidden accept="image/*" type="file" />
                  <CameraAltIcon />
                   </IconButton>
                   </div>
                </div>
                <div style={{backgroundImage:`url(${img2})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}
                    className="cardA">
                    <div className='InputImageA'>
                    <IconButton  size="large" color="error" aria-label="upload picture" component="label" onClick={(event)=> handleSubmitImage(event.target.files,3)}>
                    <input hidden accept="image/*" type="file" />
                  <CameraAltIcon />
                   </IconButton>
                   </div>
                </div>
            </div>
            <div className='PhotosContainer'>
            <div style={{backgroundImage:`url(${img3})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}
                    className="cardA">
                    <div className='InputImageA'>
                    <IconButton  size="large" color="error" aria-label="upload picture" component="label" onClick={(event)=> handleSubmitImage(event.target.files,4)}>
                    <input hidden accept="image/*" type="file" />
                  <CameraAltIcon />
                   </IconButton>
                   </div>
                </div>
                <div style={{backgroundImage:`url(${img4})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}
                    className="cardA">
                    <div className='InputImageA'>
                    <IconButton  size="large" color="error" aria-label="upload picture" component="label" onClick={(event)=> handleSubmitImage(event.target.files,5)}>
                    <input hidden accept="image/*" type="file" />
                  <CameraAltIcon />
                   </IconButton>
                   </div>
                </div>
                <div style={{backgroundImage:`url(${img5})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}
                    className="cardA">
                    <div className='InputImageA'>
                    <IconButton  size="large" color="error" aria-label="upload picture" component="label" onClick={(event)=> handleSubmitImage(event.target.files,6)}>
                    <input hidden accept="image/*" type="file" />
                  <CameraAltIcon />
                   </IconButton>
                   </div>
                </div>
            </div>
            </div>
           {count>=2? <Button variant='contained'  sx={{marginTop:'5%',marginLeft:'10%',padding:'8px 30% 8px 30%',typography:{textTransform:'none'},fontSize:'20px',borderRadius:'30px'
     //,background:'linear-gradient(169deg, rgba(253,41,123,1) 0%, rgba(255,88,100,1) 48%, rgba(255,101,91,1) 100%)'
     }} onClick={props.handleAddingPhotosComplete}>SIGN UP</Button>:
     <Button variant='contained' disabled sx={{marginTop:'5%',marginLeft:'10%',padding:'8px 30% 8px 30%',typography:{textTransform:'none'},fontSize:'20px',borderRadius:'30px'
     //,background:'linear-gradient(169deg, rgba(253,41,123,1) 0%, rgba(255,88,100,1) 48%, rgba(255,101,91,1) 100%)'
     }} >SIGN UP</Button>}
        </div>
    );
}

export default AddPhotos;