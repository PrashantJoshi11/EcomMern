
import { lapycatgo } from "./data";
import { styled } from "styled-components";
import Laptop from "./Laptop";
import {Mobile} from './Responsive';
function Laptopcategories(){

    return(
        <Wrapper>
            <Title>BEST SELLING LAPTOPS</Title>
        <Container>
                {
                    lapycatgo.map((item)=>(
                         <Laptop value={item} />
                        )
                             
                    )
                }
        </Container>
        </Wrapper>
    );

}

const Container=styled.div`
display: flex;
${Mobile({flexDirection:"row",flexWrap:"wrap"})};

`;
const Wrapper=styled.div`
margin:5% 0;
${Mobile({margin:"50px 0"})};
`;
const Title=styled.h1`
color:white;
padding: 20px;
text-align: center;
${Mobile({fontSize:"20px"})};

`;



export default Laptopcategories;