import { Container,Box, Grid, Button } from '@mui/material'
import gif from '../Gif/error.gif';
import React from 'react';
import { useNavigate } from "react-router-dom";


function NoPage() {
  const navigate = useNavigate();
  return (
   


    <Grid lg={12}>
    <Container component="div" maxWidth={'lg'} sx={{display:"flex",alignItems:"center"}}>
        
            <img src={gif} style={{height:"70vh",width:"80vw"}} />
       
     </Container>
     <Box style={{marginTop:"50px",display:"flex",alignItems:"center",justifyContent:"center"}}>
      <span style={{color:'white',fontSize:"100px",marginRight:"30px"}}>Page Not found</span>
      <Button variant="contained" color="success" onClick={()=>navigate("/products")} style={{height:"50px",width:"100px"}}> Go Back</Button>

     </Box>
    </Grid>
  )
}

export default NoPage