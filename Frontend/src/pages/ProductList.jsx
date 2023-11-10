import React from "react"
// import { ReactDOM } from "react"
// import { AllData } from "../Component/ProductData";
import { styled } from "styled-components";
// import Product from "../Component/MixProductfetch";
import ClearIcon from '@mui/icons-material/Clear';
import {Mobile} from '../Component/Responsive';
import '../Component/web.css'
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Footer from "../Component/Footer";

import MixProduct from '../Component/MixProduct';
// import {Mobile} from '../Component/Responsive';

function ProductList(){
    const navigate=useNavigate();
const location=useLocation();
const catdata=location.pathname.split("/")[2];    
const [filters,setFilters]=useState({});
const handleFilter=async(e)=>{
    setFilters({
        ...filters,
        [e.target.name]:e.target.value
    })
    
}
console.log(filters);
    return(
        <Container>
       <Titlecontainer> 
                <Title>All Categories
                        <FilterProduct>
                            <Select name="color" onChange={handleFilter}>
                                <Option disabled selected>
                                        Color
                                </Option>
                                <Option>
                                        white
                                </Option>
                                <Option>
                                       black
                                </Option>
                                <Option>
                                        grey
                                </Option>
                                <Option>
                                        green
                                </Option>
                                <Option>
                                       red
                                </Option>
                            </Select>
                            <Select name="vsprice" onChange={handleFilter} >
                            <Option disabled >
                                      Price
                                </Option>
                                <Option value="10000">
                                      Below 10,000 
                                </Option>
                                <Option value="15000">
                                Below 15,000 
                                </Option>
                                <Option value="30000">
                                Below 30,000 
                                </Option>
                                <Option value="60000">
                                Below 60,000 
                                </Option>
                                <Option  value="100000">
                                Below 1,00,000 
                                </Option>
                            </Select>
                        </FilterProduct>
                        </Title>
                      
                  
                <ClearIcon className="clearicon" onClick={()=>{navigate("/")}} style={{color:"white",marginRight:"50px"}}></ClearIcon>
            </Titlecontainer>
            
                  <MixProduct cat={catdata} filters={filters} />
       <Footer />

       </Container>
    )
}

const Container=styled.div`


`;

const Title=styled.h1`
color:white;
display: flex;
align-items: center;
margin-left: 50px;
${Mobile({fontSize:"15px"})};


`;
const Titlecontainer=styled.div`
    display: flex;
    width: 100%;
    margin-top: 100px;
    justify-content: space-between;
    align-items: center;
    ${Mobile({fontSize:"15px",backgroundColor:"red"})};

`;
const FilterProduct=styled.div`

`;



const Select=styled.select`
padding: 5px 15px;
text-align: center;
margin-left:15px;
border-radius: 10px;
font-size: 20px;
${Mobile({padding:"0px",fontSize:"13px",width:"auto"})};

`;
const Option=styled.option`
padding: 5px 15px;
text-align: left;
${Mobile({padding:"0px"})};

`;




export default ProductList;