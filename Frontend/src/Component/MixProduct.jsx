
import { AllData } from "./ProductData";
import { styled } from "styled-components";
import Product from "./MixProductfetch";
import ClearIcon from '@mui/icons-material/Clear';
import { Mobile } from './Responsive';
import '../Component/web.css'
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import { Start, Success, Fail } from '../Redux/Allproductreducer'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';



function MixProduct({cat, filters }) {
  
    const dispatch = useDispatch();
    const data=useSelector((state)=>state.allData.AllData);
    const {isFetching}=useSelector((state)=>state.allData);
    const seller = localStorage.getItem("seller");
    const sellerProduct= useSelector((state)=>state.sellerProduct.product);
    console.log("🚀 ~ file: MixProduct.jsx:25 ~ MixProduct ~ sellerProduct:", sellerProduct)
    

    // console.log("data in initital product",data);
    // console.log("fetch=====>",isFetching);



    const [filterproduct, setFilterProduct] = useState([]);
    if(cat){
    var catdata=cat.toLowerCase();
    }
    console.log("data in cat",catdata);
    console.log("data in filters",filters);

    

    const getProduct = async () => {
        dispatch(Start())
        try {

            const res = await axios.get(catdata ? `http://localhost:5000/api/product/Find?type=${catdata}` : "http://localhost:5000/api/product/Find");

                // console.log("this is how we do it ",res.data);
            if(res.data.length>0){

                dispatch(Success(res.data));

            }
        }
        catch (err) {
            
            dispatch(Fail(err));
        }
    }

    useEffect(() => {
        dispatch(Success([]));
      if(seller==="false"){
        getProduct();
      }
       

    }, [cat])

    useEffect(() => {
        filters && setFilterProduct(
            data.filter((item) =>
                Object.entries(filters).every(([key, val]) =>
               key==="color" ? item[key].includes(val) : item[key]<=val
                )
            )
        )
    }, [data, cat, filters])
   
    return (
        <Wrapper>

{
seller==="false" ?
            <Container>
                {
                    isFetching ?
                    <Box sx={{ display:'flex', marginLeft:"42%"
                    }}>
                    <CircularProgress  style={{height:"200px",width:"200px", color:"blue"}}  />
                    </Box>
                    :
                    filterproduct.map((item) => (
                        <Product value={item} />
                    )

                    )
                }
            </Container>
            :
            <Container>
            {

                sellerProduct.map((item,index) => (
                    <Product value={item} index={index} />
                )

                )
                
            }
        </Container>
        }
        </Wrapper>
    )

}

const Container = styled.div`
display: flex;
flex-wrap:wrap;

/* background-color: #2020bb; */
width: 100vw;

`;
const Wrapper = styled.div`
margin:2% 0;
display:flex;
/* background-color: red; */
justify-content: center;
 flex-wrap: wrap;
 border-radius: 20px;

`;


export default MixProduct;