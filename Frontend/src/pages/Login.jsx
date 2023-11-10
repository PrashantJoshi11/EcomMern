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
import { Loginapi } from '../Redux/apicall';
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import FormikControl from '../FomikContainer/FormikControl';

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

export default function Login() {
  const [owner,setOwner]=React.useState("Buyer")
  const initialValues={
    username:"",
    password:""
}
const validationSchema=Yup.object({
    // email:Yup.string().email().required(" Please Enter Email "),
    password:Yup.string().required(" Please Enter Password"),
    username:Yup.string().required(" Please Fill the UserName "),
});
const onSubmit=async(value) => {
  console.log("🚀 ~ file: FormikContainer.jsx:9 ~ FormikContainer ~ value:", value); 
  const username = value.username
  const password = value.password
  if (!username || !password) {
    alert("Please fill the detail");
  }

  else {
    const logindata = await Loginapi(dispatch, { username, password },owner);
    // console.log("logindata===>", logindata.isSeller);
   
    
    if (logindata === "invalidaUser") {
      alert("Username is not valid")

    }
    else if (logindata === "valid") {
      localStorage.setItem("login", true);
      localStorage.setItem("username", username);
      Navigate("/");

    }
    else if(logindata==="auth")
    {
      alert("You are not authorized");
    }
  
    else{
      alert("Password is not valid")

    }

  }


  return 
}

  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const { isFetching, error, currentUser } = useSelector((state) => state.user);
  
  console.log("data in current user ", currentUser);



  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   const username = data.get("username");
  //   const password = data.get("password");

  //   if (!username || !password) {
  //     alert("Please fill the detail");
  //   }

  //   else {
  //     const logindata = await Loginapi(dispatch, { username, password });
  //     console.log("logindata===>", logindata);
  //     if (logindata === "invalidaUser") {
  //       alert("Username is not valid")

  //     }
  //     else if (logindata === "valid") {
  //       localStorage.setItem("login", true);
  //       localStorage.setItem("username", username);
  //       Navigate("/");
  //     }
    
  //     else{
  //       alert("Password is not valid")

  //     }

  //   }




  // };

function handleName(value){
  console.log("🚀 ~ file: Login.jsx:128 ~ handleName ~ value:", value)
  
if(value==="Buyer"){
  setOwner("Seller");
}
else{
  setOwner("Buyer");

}
}



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
            Login {owner}
          </Typography>
          <Container component="div" style={{marginTop:"50px"}} >

          <Formik 
     initialValues={initialValues}
     validationSchema={validationSchema}
     onSubmit={onSubmit} >
    {
        formik => 
      
        <Form style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            <Box >
           <FormikControl
           control="input"
           type="text" 
           name="username" 
           label="Username"
           autocomplete="off"
           placeholder="Enter Username" />
           </Box>
           <Box >
           <FormikControl
           control="input"
           type="password" 
           name="password" 
           label="Password"
           placeholder="Enter password"
           />
          </Box>
        

          <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}

            >
              {`Login ${owner}`}
            </Button>
          <Box sx={{display:"flex"}}>
            
          <Typography component="h5"  body="span" sx={{cursor:"pointer",marginRight:"3px"}}>
            { `Are you a ${owner==="Buyer" ? "Seller" :"Buyer" } ` }
          </Typography>
           <Link onClick={()=>handleName(owner)}>Click here</Link>
          </Box>
          
        </Form>
    }
   </Formik>


            {/* <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="username"
              name="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}

            >
              Login
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link sx={{ cursor: "pointer" }} variant="body2" onClick={() => Navigate("/Register")}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid> */}
          </Container>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
