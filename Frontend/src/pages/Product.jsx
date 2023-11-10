import Footer from "../Component/Footer";
import * as React from 'react';
import { styled } from "styled-components";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShareIcon from "@mui/icons-material/Share";
import { Mobile } from "../Component/Responsive";
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import "../Component/web.css";
import { addCart } from "../Redux/Cart";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from 'react-stripe-checkout';


import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
        children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});


function SingleProduct() {
  const [openbox, setOpenbox] = useState(false);
  
  const navigate=useNavigate();

  const handleClosebox = () => {
    setOpenbox(false);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const key = "pk_test_51NxR0fSJpUEIePjqKjYE6Vaj5ipHtV7pkoQTgOJgPTeHeg6Or9bf2WYuLuH6E3o9XXQMeSrNlwI3zF34wnl0v5Sj00Uo2VqyLB";

  const Dispatch = useDispatch();
  const location = useLocation();
  const [quantity, setQuantity] = useState(1);
  const [productcolor, setProductcolor] = useState();

  const pathname = location.pathname.split("/");
  console.log("your category", pathname);

  const id=pathname[pathname.length-1];
  console.log("length===>", id);



  const pathid = location.pathname.split("/")[4];

const stateData=useSelector((state)=>state.allData.AllData);


  console.log("your pathid", pathid);
  const [product, setProduct] = useState([]);
  console.log("data in product", product);
  const pr = JSON.parse(localStorage.getItem("productData"));
  console.log("color", pr?.color);



  const getProduct = async () => {
    const res = await axios.get(
      `http://localhost:5000/api/product/find/${id}`

    );
    setProduct(res.data);
    localStorage.setItem("productData", JSON.stringify(res.data));
  };

  useEffect(() => {
    console.log("inside useEffect ");
    getProduct();
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  function handleQuantity(type) {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  }

  function addToCart() {
   
    if (!productcolor) {
      alert("Please Select an available color for your product");
    } else {
      Dispatch(addCart({ ...product, quantity, productcolor }));
    setOpenbox(true);

    }
  }
  function getColor(val) {
    setProductcolor(val);
  }

  console.log("productcolor=", productcolor);

  return (
    <Container>
      <Wrapper>
        <ImageContainer>
          <Image src={product.img} />
          <Emi>{product.tag}</Emi>
        </ImageContainer>
        <InfoContainer>
          <Info>
            <Title>{product.title}</Title>
            <Pricetype>
              <Vsp>{product.vsp}</Vsp> <Mrp>{product.mrp}</Mrp>
            </Pricetype>
            <Price>
              <Vsp style={{ fontSize: "25px" }}>₹ {product.vsprice}</Vsp>{" "}
              <Mrp style={{ fontSize: "18px", textDecoration: "line-through" }}>
                ₹ {product.mrprice}
              </Mrp>
              <Off>8% off</Off>
            </Price>

            <Title>Select Color</Title>

            <ColorType>
              {pr && pr?.color.map((item) => (
                <Color
                  value={item}
                  onClick={(e) => getColor(e.target.value)}
                  bg={item}
                ></Color>
              ))}
            </ColorType>
            <Title>Add More</Title>
            <Count>
              <FirstDiv>
                <RemoveIcon onClick={() => handleQuantity("dec")} />{" "}
                <Num>{quantity} </Num>{" "}
                <AddIcon onClick={() => handleQuantity("inc")} />
              </FirstDiv>
              <SecDiv>
                <Share
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}

                >


                  <ShareIcon sx={{ fontSize: "40px", color: "#0088cc" }} />
                </Share>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  PaperProps={{
                    sx: { display: "flex", width: "80px", marginTop: "-200px" }
                  }}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem sx={{ display: "flex", justifyContent: "center", width: "80px" }} onClick={handleClose} > <InstagramIcon sx={{ color: "#c13584", fontSize: "33px" }} /></MenuItem>
                  <MenuItem sx={{ display: "flex", justifyContent: "center", width: "80px" }} onClick={handleClose}> <TelegramIcon sx={{ color: "#0088cc", fontSize: "33px" }} /> </MenuItem>
                  <MenuItem sx={{ display: "flex", justifyContent: "center", width: "80px" }} onClick={handleClose}><WhatsAppIcon sx={{ color: "green", fontSize: "33px" }} /> </MenuItem>
                </Menu>
              </SecDiv>
            </Count>
          </Info>
          <ButtonContainer>
            <StripeCheckout
              name="ElectroHub"
              billingAddress
              shippingAddress
              description='Your total is 20'
              amount={20}

              stripeKey={key} >
              <Button className="buybtn">
                {" "}
                <ThumbUpAltIcon style={{ marginRight: "5px" }} /> Buy Now{" "}
              </Button>
            </StripeCheckout>
            <Button className="addcart" onClick={addToCart}>
              {" "}
              <ShoppingCartIcon style={{ marginRight: "5px" }} />
              Add to Cart{" "}
            </Button>
            <Dialog
        open={openbox}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClosebox}
        aria-describedby="alert-dialog-slide-description"
      >
        {/* <DialogTitle>{""}</DialogTitle> */}
        <DialogContent style={{width:"250px"}}>
          <DialogContentText style={{color:"green",display:"flex",justifyContent:"center"}} id="alert-dialog-slide-description">
          <b> Product Addded to Cart ! </b>
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{display:"flex",justifyContent:"space-between"}}>

          <Button style={{color:"red", height:"40px"}} onClick={()=>navigate("/Cart")}> <ShoppingCartIcon style={{ marginRight: "5px" }} /></Button>
          
          <Button  style={{ height:"40px"}} onClick={handleClosebox}>Ok</Button>
        </DialogActions>
      </Dialog>
          </ButtonContainer>
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
}
const Container = styled.div`
  background-color: white;
  user-select: none;
`;
const Emi = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-around;
  margin: 30px;
  font-weight: bold;
  font-size: 30px;
  box-sizing: border-box;
  ${Mobile({ fontSize: "18px", margin: "15px", backgroundColor: "lightgrey" })};

  /* background-color: #80808039; */
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  height: 100vh;
  ${Mobile({ flexDirection: "column" })};
`;
const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${Mobile({ flex: "0", height: "200px", width: "90%" })};
`;
const InfoContainer = styled.div`
  flex: 1;
  height: 100%;
  box-sizing: border-box;
  ${Mobile({ height: "10%" })};
`;
const Info = styled.div`
  text-align: justify;
  box-sizing: border-box;
  padding: 50px 100px 20px;
  ${Mobile({ padding: "25px", overflow: "hidden" })};
`;

const Image = styled.img`
  margin-top: 30px;
  height: 65%;
  width: 90%;
  ${Mobile({ height: "82%", width: "90%" })};
`;
const Title = styled.p`
  font-size: 20px;
  font-weight: 550;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  margin-bottom: 10px;
  letter-spacing: 0.7px;
  ${Mobile({ fontSize: "15px" })};
`;
const ButtonContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-around;
  margin: 60px;
  box-sizing: border-box;
  padding: 20px;
  background-color: #80808039;

  ${Mobile({ width: "90%", margin: "10px", padding: "5px" })};
`;
const Button = styled.button`
  padding: 12px 25px;
  cursor: pointer;

  box-sizing: border-box;
  /* height: 40px;
width: 150px; */
  font-size: 18px;
  font-weight: bold;
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 7px;
`;
const Pricetype = styled.div`
  display: flex;
  width: 28%;
  justify-content: space-between;
  margin-top: 50px;
  font-weight: 500;
  font-size: 20px;
  ${Mobile({ width: "55%" })};
`;
const Price = styled.div`
  display: flex;
  width: 45%;
  margin-bottom: 30px;
  justify-content: space-between;
  ${Mobile({ width: "90%", marginTop: "10px" })};
`;
const Off = styled.div`
  font-size: 20px;
  color: green;
  font-weight: bold;
`;
const Vsp = styled.div``;
const Mrp = styled.div`
  color: grey;
  margin-left: 15px;
`;

const ColorType = styled.div`
  display: flex;
  margin-top: 5px;
`;
const Color = styled.button`
  height: 35px;
  cursor: pointer;

  margin: 5px;
  width: 35px;
  border-radius: 50%;
  background-color: ${(props) => props.bg};
  border: 1px solid black;
`;
const Count = styled.div`
  display: flex;
  font-size: 25px;
  margin: 20px 0;
  /* background-color: red; */
  justify-content: space-between;
  text-align: center;
`;
const Num = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  border-radius: 10px;
  height: 35px;
  width: 35px;
  background-color: #706e6e58;
`;
const FirstDiv = styled.div`
  display: flex;
  font-size: 25px;
  margin: 20px 0;
  justify-content: space-between;
  width: 100px;
  align-items: center;
`;
const SecDiv = styled.div`
  display: flex;
  font-size: 25px;
  margin: 20px 0;
  justify-content: center;
  align-items: center;
 
  border-radius: 50px;
  cursor: pointer;
`;
const Share = styled.div``;
export default SingleProduct;
