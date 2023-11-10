import { styled } from "styled-components";
// import SendIcon from '@mui/icons-material/Send';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { Mobile } from './Responsive';
import { Button } from "@mui/material";
import axios from "axios";
import {  useState } from "react";


function News() {
    var [inputdata, setInputdata] = useState("");
    console.log(inputdata);


    const sendMail = async (e) => {
        e.preventDefault();
        
        const username=localStorage.getItem("username");

        const maildata = {
            inputdata,
            username
        }
        
        const res = await axios.post("http://localhost:5000/api/mail", maildata);
        // console.log("data after sending mail",res.status);

        if(res.status===200)
        { 
            setInputdata("");
            alert("Done 👍")
    }

    }
 
    return (
        <Container>
            <Title>
                UPDATE ME
            </Title>
            <DES>Get timely update about your favouite product </DES>
            <InputContainer>
            
                <Input placeholder="Your Email ?" value={inputdata} type="Email" onChange={(e) => setInputdata(e.target.value)} />
                <Button>

                    <ArrowCircleRightIcon style={{ fontSize: "50px", marginLeft: "10px", color: "blue", zIndex: "999" }} onClick={sendMail}>
                    </ArrowCircleRightIcon >
                </Button>


            </InputContainer>



        </Container>
    )
}
const Container = styled.div`

background-color: #afabac;
color:black;
width: 85vw;
height: 50vh;
margin: 20px auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
${Mobile({ margin: "10px auto", width: "90vw", height: "30vh" })};
`;
const Title = styled.div`
font-size: 4rem;
font-weight: 300;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
${Mobile({ fontSize: "2rem" })};

`;
const DES = styled.div`
font-size: 1.5rem;
/* margin: 15px; */
padding:30px;
${Mobile({ fontSize: "1rem" })};


`;
const Input = styled.input`
padding: 10px;
flex:8;

`;
const InputContainer = styled.div`
width: 30%;
display: flex;
${Mobile({ width: "80%" })};


`;
export default News;