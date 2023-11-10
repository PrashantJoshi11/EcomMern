import { AppBar, Box, Grid, Toolbar, Typography,TextField, Tabs, Tab, Button, useMediaQuery, useTheme } from '@mui/material';
import { useNavigate, useNavigation } from 'react-router-dom';
import {Badge} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import DrawerBox from './Drawer';
import logo from '../Images/logo-no-background.png'
import { useSelector } from 'react-redux';

function Navbar(){
    const quantity=useSelector((state)=>state.cart.quantity);
    const checkLogin=localStorage.getItem("login");
    
    // console.log("your login data",checkLogin);
    const Navdata=["Home","Products"];
    const navigate=useNavigate();
    const drawdata=["Home","Products"]
   const theme=useTheme()
    const [value,setValue]=useState();

    const isMatch=useMediaQuery(theme.breakpoints.down('md'));
  
    function handleTab(value){
        if(value==="Home"){
            navigate("/")
        }
        else if(value==="Products"){
            navigate("/products")
           
        }
    }
    function handleSignout(){
        localStorage.setItem("login",false);
        navigate("/Login");
    }
   
    var tokenId=localStorage.getItem("isSeller");
    console.log("🚀 ~ file: Navbar.jsx:39 ~ Navbar ~ tokenId======>:", tokenId)
   
    return(
        <AppBar xs={{placeitem:"center"}} sx={{backgroundColor:"#141414"}}>
            <Toolbar >
             {isMatch?(<>
               <DrawerBox  data={drawdata} /> 
              
                <Box sx={{marginLeft:"auto",display:"flex"}}>
                    <Button sx={{marginLeft:"auto",backgroundColor:"green"}} variant='contained'>
                        Login
                    </Button>
                    <Button sx={{marginLeft:2,backgroundColor:"blue"}} variant='contained'>
                       Register
                    </Button>
                    <ShoppingCartCheckoutIcon sx={{marginLeft:3,fontSize:"35px"}}/>
                </Box>
                
                </>
             
             ):    (<Grid sx={{placeItems:"center"}} container>

                    <Grid  item >
                    <Toolbar> <img src={logo} style={{height:"50px",width:"50px"}} /> </Toolbar>
               
                    </Grid>
                    
                  
                    <Grid item lg={2}  sm={3} md={4}  >
                    <Typography sx={{fontSize:"30px"}} >𝐄𝐥𝐞𝐜𝐭𝐫𝐨𝐌𝐚𝐫𝐭</Typography>
                        
                    </Grid>
                    
                   

                    { checkLogin==="true"? 
                    <>
                    {
                        tokenId === "true" ?
                        
                          <Grid item lg={4} md={3.5}   >
                          <Button onClick={()=>{navigate("/AddProducts")}} sx={{marginLeft:"auto",backgroundColor:"green"}} variant='contained'>
                                 Add Product
                              </Button>
                          </Grid>
                          :   <Grid item lg={4} md={3.5}   >
                        
                          </Grid>

                    }
                   

                     <Grid item lg={4.95} md={3.5}  >
                      
                     <Box display="flex" justifyContent="flex-end">
                     <Tabs indicatorColor="secondary" 
                            textColor="white"
                            onChange={(e,value)=>handleTab(value)}
                         >
                           {Navdata.map((link,index)=>(
                            <Tab value={link} color="white"  key={index} label={link} />
                            ))}
                        </Tabs>
                        <Button onClick={handleSignout} sx={{marginLeft:2,color:"red"}} variant='Standard'>
                            SignOut
                         </Button>
                         <Badge badgeContent={quantity} color="success">
                         <ShoppingCartCheckoutIcon onClick={()=>{navigate("/Cart")}} sx={{marginLeft:3,fontSize:"35px"}}/>
                         </Badge>
                     </Box>
                     </Grid>
                     </>
                     :
                     <Grid item sm={3} lg={8.95}  md={6} >
                     <Box display="flex">
                         <Button onClick={()=>{navigate("/Login")}} sx={{marginLeft:"auto",backgroundColor:"green"}} variant='contained'>
                             Login
                         </Button>
                         <Button onClick={()=>{navigate("/Register")}} sx={{marginLeft:2,backgroundColor:"blue"}} variant='contained'>
                            Register
                         </Button>
                         {/* <Badge badgeContent={quantity} color="success">
                         <ShoppingCartCheckoutIcon onClick={()=>{navigate("/Cart")}} sx={{marginLeft:3,fontSize:"35px"}}/>
                         </Badge> */}
                     </Box>
                     </Grid>

                    }
                   
                   
                </Grid>
                )}
             
            </Toolbar>
        </AppBar>
    )
}
export default Navbar;


// import {styled} from 'styled-components'
// import SearchIcon from '@mui/icons-material/Search'; 
// // import '../Component/web.css';
// import Badge from '@mui/material/Badge';
// import IconButton from '@mui/material/IconButton';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import {Mobile} from './Responsive';
// import {Tab} from './Responsive';
// import { NavLink, useNavigate } from 'react-router-dom';


// const Container= styled.div`
// height:70px;
// background-color:black;

// `;
// const Wrapper= styled.div`
// display:flex;
// justify-content:space-between;
// height:40px;
// padding:10px 20px;
// background-color: black;
// color: rgb(223, 250, 223);

// ${Mobile({height:"30px",padding:"15px 10px"})};
// /* ${Tab({height:"30px",padding:"15px 10px"})}; */


// `;

// const Left= styled.div`
// display:flex;
// align-items:center;
// flex:1;

// `;
// const Center= styled.div`
// flex:1;
// font-size:30px;
// display:flex;
// align-items:center;
// justify-content:center;
// font-weight:600;
// text-shadow:2px 2px red;
// ${Mobile({display:"none"})};
// ${Tab({fontSize:"20px",textAlign:"center"})};

// `;
// const Right= styled.div`
// flex:1;
// display:flex;
// justify-content:flex-end;
// align-items:center;
// `;
// const Language= styled.div`
// cursor:pointer;
// font-size:25px;
// ${Mobile({display:"none"})};
// ${Tab({display:"none"})};

// `;
// const SrchContainer= styled.div`
// border:1px solid black;
// margin:0px 10px;
// display:flex;


// `;
// const Input=styled.input`
// border:none;
// &:focus{
//     outline:none;
// }
// ${Mobile({width:"50px",borderRadius:"1px"})};
// ${Tab({width:"100px"})};


// `;
// const Item=styled.div`
// cursor:pointer;
// font-size:25px;
// margin:15px;
// ${Mobile({fontSize:"17px",margin:"5px"})};
// ${Mobile({fontSize:"15px",margin:"7px"})};

// `;


// function Navbar(){
//     const navigate=useNavigate();
//     return(
//        <Container>
//         <Wrapper>
//             <Left>
//                 <Language>
//                     En  
//                 </Language>
//                 <SrchContainer>
//                        <Input placeholder='search'></Input>
//                        <SearchIcon></SearchIcon>
//                 </SrchContainer>
//             </Left>
//             <Center>
//                  <h3>ELECTRO HUB</h3>
//             </Center>
//             <Right>
//                  <Item onClick={()=>{navigate("/Register")}}>
//                  Register
//                  {/* <NavLink to="/Register">Register</NavLink>    */}
//                  </Item>
//                  <Item onClick={()=>{navigate("/Login")}}>
//                    Login
//                  </Item>
//                 <Item >
//                 <IconButton aria-label="cart">
//                         <StyledBadge badgeContent={6} >
//                             <ShoppingCartIcon className='cart' onClick={()=>{navigate("/Cart")}} />
//                         </StyledBadge>
//                 </IconButton>
//                 </Item>
                
//             </Right>
//         </Wrapper>
//        </Container>
//     )
// }
// const StyledBadge = styled(Badge)(({ theme }) => ({
    
//     '& .MuiBadge-badge': {
      
//       right: -3,
//       top: 5,
//       border: `2px solid red`,
//       padding: '0 4px',
//       color:"white"
//     },
    
//   }));

// export default Navbar;