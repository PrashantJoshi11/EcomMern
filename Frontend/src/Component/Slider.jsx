import { styled } from "styled-components";
// import 'animate.css';
import { slideData } from "./data";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { Mobile } from './Responsive';
import {Tab} from './Responsive';

import '../Component/web.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Slider() {
    const navigate=useNavigate();
    const [index, setIndex] = useState(0);
    function handledirection(direction) {
        console.log(direction);
        if (direction === "Left") {
            setIndex(index > 0 ? index - 1 : slideData.length - 1);
        }
        else {
            setIndex(index < slideData.length - 1 ? index + 1 : 0);

        }
    }


    return (
        <Wrapper >
            <Arrow direction="left" onClick={() => handledirection("Left")}>
                <ArrowCircleLeftIcon style={{ fontSize: "65px" }} />
            </Arrow>
            <Container slideindex={index} >
                {
                    slideData.map((item) => (

                        <Slide bg={item.bgcolor} >

                            <ImgContainer>
                                <Image src={item.img}></Image>

                            </ImgContainer>
                            <InfoContainer color={item.color} >
                                <Title1>{item.title1} </Title1>
                                <Title2>{item.title2} </Title2>
                                <Title3>{item.title3}</Title3>
                                <h2>{item.title5}</h2>
                                <Title4 className="animate__animated animate__rubberBand animate__infinite	infinite">{item.title4} </Title4>
                                <Button onClick={()=>{navigate("/products/")}}>
                                    ShopNow
                                </Button>
                            </InfoContainer>
                        </Slide>
                    ))
                }



            </Container>

            <Arrow direction="right" onClick={() => handledirection("Right")}>
                <ArrowCircleRightIcon style={{ fontSize: "65px" }} />
            </Arrow>
        </Wrapper>
    );
}

const Wrapper = styled.div`
                width:100%;
                height:100vh;
                display:flex;
                top:50px;
                overflow:hidden;
                background-color:lightgrey;
                position:relative;
                ${Mobile({ display: "none" })};
                /* ${Tab({width:"60%", height:"100vh"})}; */
                
                `;


const Arrow = styled.div`
                color:grey;
                display:flex;
                align-items:center;
                justify-content:center;
                position:absolute;
                top:0;
                bottom:0;
                margin:auto;
                z-index:999;
                left:${(props)=>props.direction === "left" && "15px"};
                right:${(props)=>props.direction === "right" && "15px"};
                `;
const Container = styled.div`
                height:100%;
                background-color:lightgrey;
                display:flex;
                transform:translateX(${(props) => props.slideindex * -100}vw);
                transition: all 1.6s ease;

                `;
const Slide = styled.div`
                display:flex;
                align-items:center;
                height:100vh;
                width:100vw;
                background-color:${(props) => props.bg};

                `;
const ImgContainer = styled.div`
                flex:1;
                height:100%;

                `;
const Image = styled.img`
                height:80%;
                width: 100%;

                `;

const InfoContainer = styled.div`
                flex:1;
                color:${(props) => props.color};
                text-align:center;
                height:100%;
                `;

const Title1 = styled.h1`
                font-size:80px;
                font-family: 'Rubik Moonrocks', cursive;
                font-weight:300;
                // font-family: 'Rye', cursive;
                // font-family: 'Satisfy', cursive;
                // font-family: 'Shrikhand', cursive;
                // font-family: 'Wallpoet', cursive;

                opacity:0.7;
                `;
const Title2 = styled.h1`
                font-size:70px;
                font-family: 'Rubik Moonrocks', cursive;
                font-weight:300;
                opacity:0.75;

                `;
const Title3 = styled.h1`
                font-size:60px;
                font-weight:300;
                opacity:0.7;
                font-family: 'Rubik Moonrocks', cursive;

                `;
const Title4 = styled.h1`
                font-size:50px;
                font-weight:300;
                opacity:0.7;
                font-family:'Wallpoet', cursive;
                background-color:red;
                border-radius:200px;

                `;
const Button = styled.button`
                height:60px;
                border-radius:20px;
                width:150px;
                font-size:30px;
                color:white;
                font-weight:bold;
                background-color:green;
                transition:all 0.2s;
                &:hover{

                    background-color:white;
                color:green;
   
}
                `;


export default Slider;

