
import { smartphone } from "./data";
import { styled } from "styled-components";
import Smart from "./Smart";
import {Mobile} from './Responsive';

function Earbudscategories(){

    return(
        <Wrapper>
            <Title>TUNE INTO PERFECTION</Title>
        <Container>
                {
                    smartphone.map((item)=>(
                         <Smart value={item} />
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

`;
const Title=styled.h1`
color:white;
padding: 20px;
text-align: center;
${Mobile({fontSize:"20px"})};

`;



export default Earbudscategories;