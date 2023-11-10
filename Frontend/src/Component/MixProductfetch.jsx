import { NavLink, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
// import {Mobile} from './Responsive';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { removeSellerProduct } from "../Redux/Seller";
import { useDispatch } from "react-redux";

function Product({value,index}){
console.log("🚀 ~ file: MixProductfetch.jsx:9 ~ Product ~ index:", index)
const navigate=useNavigate();
const dispatch=useDispatch();
const seller= localStorage.getItem("isSeller");

    return(
        
  <>
       {
        seller ==="true" ?
        <Container >
          <Wrapper >
        {seller=="true" ?  <div >
          <DeleteForeverIcon  onClick={()=>dispatch(removeSellerProduct(index))} sx={{ color:"red",marginLeft:"85%"}} ></DeleteForeverIcon>
          </div>: null }  

             <Image src={value.img} style={{height:"170px"}} />
            <Info>
                 {value.title}

             <Price>
            <PriceItem> VSP </PriceItem> 
            <PriceItem style={{color:"green"}}> { value.vsprice}</PriceItem> 

             
            </Price>
            <Mrp>
            <Item>MRP</Item>
             <Item style={{color:"red"}}>{value.mrprice}</Item>
             <Item style={{color:"green"}}>{value.off}</Item>
            </Mrp> 
            
            </Info>
            <Tag>
             {value.tag} 
            </Tag>
          </Wrapper>
        </Container> 
        :
        <Container >
        <NavLink to={`product/${value._id}`}>
          <Wrapper >

             <Image src={value.img} />
            <Info>
                 {value.title}

             <Price>
            <PriceItem> {value.vsp}</PriceItem> 
            <PriceItem style={{color:"green"}}> { value.vsprice}</PriceItem> 

             
            </Price>
            <Mrp>
            <Item>{value.mrp}</Item>
             <Item style={{color:"red"}}>{value.mrprice}</Item>
             <Item style={{color:"green"}}>{value.off}</Item>
            </Mrp> 
            
            </Info>
            <Tag>
             {value.tag} 
            </Tag>
            {/*  */}
          
           
          </Wrapper>
          </NavLink>
         
        </Container> 
       }
          


           </>
    )

}
const Wrapper=styled.div`
  
 height: 100%;
 width: 100%;
 margin: auto;
background-color: white;
 position: relative;  
 z-index: 0;
 /* display: block;  */
 transition : all 0.7s ease; 
 font-size: 14px;
 text-align: justify;
 /* background-color: #abbfd2; */
 


`;
const Container=styled.div`
  height: 350px;
 width: 310px;
 border-radius: 20px;
 overflow: hidden;
 margin:50px auto;
 background-color: #929592;
 
 transition: all 0.5s ease;
 &:hover{
    z-index:999;
    box-shadow: 0px 0px  25px rgba(243, 246, 243, 0.5);
    /* height: 360px; */
    width: 315px;
 }


`;
const Image=styled.img`
height: 200px;
width: 100%;
object-fit: contain;
margin: 0 auto;

 
`;
const Info=styled.div`
width: 80%;
margin: auto;

font-weight: bold;
/* font-size: 14px; */
`;
const Price=styled.div`
color:#080808;
font-size: 13px;
margin: 8px 0;
display: flex;
`;
const PriceItem=styled.div`
margin-right: 13px ;
/* color:green; */
`;

const Mrp=styled.div`
display: flex;
font-size: 13px;
color:#6c6a6a;
`;
const Item=styled.div`
margin-right:10px;
&:nth-child(even){
    text-decoration: line-through;
}
`;
const Tag=styled.div`
position: absolute;
font-size: 13px;
width: 90%;
margin: auto;
color:#403d3d;
font-weight: bold;
padding: 10px;
text-align: center;
bottom: 0;
/* background-color: red; */

`;
// const Remove=styled.div`
// z-index: 999;
// `



export default Product;