
import { categories } from "./data";
import { styled } from "styled-components";
import CategoriesItem from "./CategoriesItem";
import {Mobile} from './Responsive';
function Categories(){

    return(
        
        <Container>
                {
                    categories.map((item)=>(
                         <CategoriesItem value={item} />
                        )
                             
                    )
                }
        </Container>
    );

}

const Container=styled.div`
display: flex;
${Mobile({flexDirection:"row",flexWrap:"wrap",margin:"15px",top:"100px"})};

`;



export default Categories;