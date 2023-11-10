import { styled } from "styled-components";
import {Mobile} from './Responsive';
import { Link } from "react-router-dom";

function CategoriesItem({value}){

    return(
        

           <Container>
            <Link to={`/products/${value.cat}`}>
             <Wrapper>
                <Image src={value.img} />
                <Info>
                <Title>{value.title}</Title>
                
                </Info>
               
             </Wrapper>
             </Link>
           </Container> 
    )

}
const Wrapper=styled.div`
  flex:1;
 height: 350px;
 width: 350px;
 margin: auto;
 border:2px solid grey;
 border-radius: 50px;
 position: relative;  
 text-align: center;
 justify-content: space-around;
 top:-60px;
 box-shadow: 10xp 10px 10px red;
 overflow: hidden;
 background-color: white;
 transition: all 0.5s ease;
 &:hover{
 height: 370px;
 width: 370px;
 
 }

${Mobile({height:"150px",width:"150px", top:"50px",borderRadius:"20px",margin:"1px auto"})};

`;
const Container=styled.div`
 flex:1;
 
 /* background-color: #f39a9a; */
`;
const Image=styled.img`
border-radius: 50px;
 object-fit: contain;
height: 90%;
width:90%;
${Mobile({height:"130px",width:"130px"})}

`;
const Info=styled.div`
position: absolute;
bottom:0;
left:0;
height: 350px;
width: 350px;
display:flex;
justify-content: center;

align-items: flex-end;
color:black;
${Mobile({height:"150px",width:"150px",fontSize:"10px"})}
`;
const Title=styled.h2`
/* background-color: white;
padding:10px; */
`;




export default CategoriesItem;