import styled from "styled-components";

export const Container = styled.div`
position: absolute;
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    row-gap: 50px;
    margin: 0;
    z-index: -99999;

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