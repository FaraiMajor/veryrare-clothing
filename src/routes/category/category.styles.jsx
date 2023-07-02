import styled from "styled-components";

export const CategoryContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    row-gap: 50px;
    margin: 0 15px 50px;

    @media screen and (max-width: 800px) {
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 15px;
        grid-row-gap: 25px;
      }
    
      @media screen and (max-width: 400px) {
        grid-template-columns: 1fr;
        grid-row-gap: 45px;
        margin: 0 35px;
      }
`;

export const CategoryTitle = styled.h2`
    font-size: 15px;
    margin: 25px 0 25px 40px;

    @media screen and (max-width: 400px) {
      margin: 35px 0 25px 40px;
    }
`;