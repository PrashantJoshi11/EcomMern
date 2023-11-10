import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Addproductsapi } from '../Redux/apicall';
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import Fireapp from './firebase';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import FormikControl from '../FomikContainer/FormikControl';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function Copyright(props) {
    
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Addproducts() {

    const Navigate=useNavigate();
    const dispatch=useDispatch();
    // const {isFetching,error,currentUser}=useSelector((state)=>state.user);

    const sellerProduct=useSelector((state)=>state.sellerProduct);

    console.log("🚀 ~ file: AddProducts.jsx:46 ~ Addproducts ~ sellerProduct:", sellerProduct)
   
    const initialValues={
      title:"",
      type:"",
      vrprice:"",
      mrprice:"",
      off:"",
      tag:"",
      color:"",
      img:""
  }
  const validationSchema=Yup.object({
      // email:Yup.string().email().required(" Please Enter Email "),
      title:Yup.string().required(" Please Fill the Product Title"),
      type:Yup.string().required(" Please Fill the Type"),
      vsprice:Yup.string().required(" Please Fill the vsprice"),
      mrprice:Yup.string().required(" Please Fill the mrprice"),
      tag:Yup.string().required(" Please Fill the tag"),
      off:Yup.string().required(" Please Fill the off"),
      color:Yup.string().required(" Please Fill the color"),
      img:Yup.string().required(" Please Fill the img"),

  });


  const handleSubmit = (value) => {

    const Data={
      title:value.title,
      type:value.type,
      img:value.img,
      vsprice:value.vsprice,
      mrprice:value.mrprice,
      color:value.color,
      off:value.off,
      tag:value.tag,
    }
    console.log("🚀 ~ file: AddProducts.jsx:98 ~ handleSubmit ~ Data:", Data)
// console.log(Data);
    Addproductsapi(dispatch,Data);
    Navigate("/products")
  // console.log(img);
  //   const Filename= img.name+new Date().getTime();
  //   console.log(Filename);
  //   const storage = getStorage(Fireapp);
  //   const storageRef = ref(storage, Filename);
  //   const uploadTask = uploadBytesResumable(storageRef, img);

  //   uploadTask.on('state_changed', 
  // (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
//     const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//     console.log('Upload is ' + progress + '% done');
//     switch (snapshot.state) {
//       case 'paused':
//         console.log('Upload is paused');
//         break;
//       case 'running':
//         console.log('Upload is running');
//         break;
//         default:
//     }
//   }, 
//   (error) => {
//     // Handle unsuccessful uploads
//   }, 
//   () => {
//     // Handle successful uploads on complete
//     // For instance, get the download URL: https://firebasestorage.googleapis.com/...
//     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//       console.log('File available at', downloadURL);
//     });
//   }
// );

    // console.log("data in data=",Data);
 
  };



    

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs"  >
        <CssBaseline />
        <Box 
          sx={{
            marginTop: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h4">
            Addproducts
          </Typography>
          <Formik 
     initialValues={initialValues}
     validationSchema={validationSchema}
     onSubmit={handleSubmit} >
    {
        formik => 
      
        <Form style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            <Box >
           <FormikControl
           control="input"
           type="text" 
           name="title" 
           label="Product Title"
          //  autocomplete="off"
           placeholder="Enter ProductName" />
           </Box>
           <Box >
           <FormikControl
           control="input"
           type="text" 
           name="type" 
           label="Type"
          //  autocomplete="off"
           placeholder="Enter Type" />
           </Box>
           <Box >
           <FormikControl
           control="input"
           type="number" 
           name="vsprice" 
           label="vsprice"
          //  autocomplete="off"
           placeholder="Enter vsprice" />
           </Box>
           <Box >
           <FormikControl
           control="input"
           type="number" 
           name="mrprice" 
           label="mrprice"
          //  autocomplete="off"
           placeholder="Enter mrprice" />
           </Box>
           <Box >
           <FormikControl
           control="input"
           type="text" 
           name="off" 
           label="off"
          //  autocomplete="off"
           placeholder="Enter off" />
           </Box>
           <Box >
           <FormikControl
           control="input"
           type="text" 
           name="tag" 
           label="tag"
          //  autocomplete="off"
           placeholder="Enter tag" />
           </Box>
           <Box >
           <FormikControl
           control="input"
           type="text" 
           name="color" 
           label="Color"
          //  autocomplete="off"
           placeholder="Enter color" />
           </Box>
           <Box >
           <FormikControl
           control="input"
           type="text" 
           name="img" 
           label="Image Url"
          //  autocomplete="off"
           placeholder="Enter Image url " />
           </Box>
           <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2}}
              // disabled={isFetching}
             >
              Addproducts
            </Button>
           </Form>
}
</Formik>
          {/* <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="title"
              label="title"
              name="title"
              autoComplete="title"
              autoFocus
            />
             <TextField
              margin="normal"
              required
              fullWidth
              id="type"
              label="type"
              name="type"
              autoComplete="type"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="vsprice"
              label="vsprice"
              id="vsprice"
              autoComplete="current-vsprice"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="mrprice"
              label="mrprice"
              id="mrprice"
              autoComplete="current-mrprice"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="off"
              label="off"
              id="off"
              autoComplete="current-off"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="tag"
              label="tag"
              id="tag"
              autoComplete="current-tag"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="color"
              label="color"
              id="color"
              autoComplete="current-color"
            />
            <TextField
              margin="normal"
              required
              fullWidth
           
              name="img"
              
              id="img"
              autoComplete="current-img"
            />
          
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2}}
              // disabled={isFetching}
             >
              Addproducts
            </Button>
           
          </Box> */}
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
