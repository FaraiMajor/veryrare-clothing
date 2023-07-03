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

export const EmptyBag = styled.div`
    width: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-item: center;
    margin-left: 300px;
    p{
        font-size: 20px;
        margin-bottom: 25px;
        font-weight: 800;
    }
    img{
        margin: 0 auto 20px;
    }
    @media screen and (max-width: 800px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-item: center;
        margin:0 auto 55px;
   }

    `;

export const EmptyBagButton = styled.button`
    min-width: 165px;
    width: 300px;
    height: 50px;
    letter-spacing: 1px;
    border-radius: 5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    background-color: black;
    color: white;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
    `;
export const CardSection = styled.div`
        width: 500px;
        details{
            margin-top: 15px;
            h4{
                margin-left: 15px;
            }
            p{
                margin-left: 10px;
                span{
                    font-weight: 800;
                    margin: 0 15px;
                }
            }
            
        }
        @media screen and (max-width: 800px) {
            width: 100%;
            details{
                margin: 10px;
            }
        }
`;

