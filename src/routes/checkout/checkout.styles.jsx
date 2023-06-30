import styled from 'styled-components';


export const CheckoutMainContainer = styled.div`
    width: 100%;
    // min-height: 90vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 50px auto;

    @media screen and (max-width: 800px) {
        display: flex;
        flex-direction: column;
    }

`
export const CheckoutContainer = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 40px;
    

    .bag-title {
        width: 100%;
        font-family: Georgia, 'Times New Roman', Times, serif;
        border-bottom: 1px solid darkgrey;
        font-size: 2rem;
        font-weight: 600;
    }
    @media screen and (max-width: 800px) {
       width: 80%
  }
`;
export const Total = styled.span`
        margin-top: 10px;
        margin-bottom: 50px;
        margin-left: auto;
        font-family: Georgia, 'Times New Roman', Times, serif;
        font-size: 25px;
        font-weight: 800px
    `;

