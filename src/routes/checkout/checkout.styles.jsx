import styled from 'styled-components';

export const CheckoutContainer = styled.div`
    width: 65%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px auto 0;

    .bag-title {
        width: 100%;
        font-family: Georgia, 'Times New Roman', Times, serif;
        border-bottom: 1px solid darkgrey;
        font-size: 2rem;
        font-weight: 600;
    }
`;
export const Total = styled.span`
        margin-top: 10px;
        margin-bottom: 50px;
        margin-left: auto;
        font-family: Georgia, 'Times New Roman', Times, serif;
        font-size: 30px;
        font-weight: 800px
    `;

