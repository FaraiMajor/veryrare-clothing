import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;

    @media screen and (max-width: 800px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 0;
    }
`;
export const ImageContainer = styled.div`
    width: 23%;
    padding-right: 15px;
  
    img {
      width: 100%;
      height: 100%;
    }
    @media screen and (max-width: 800px) {
      width: 65%;

      img {
        width: 100%;
        height: 100%;
      }
    }
  `;

export const BaseSpan = styled.span`
    width: 40%;
    margin-right: 80px;

    @media screen and (max-width: 800px) {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      font-size: 20px;
      margin-right: 0px;
      margin-bottom: 20px;
      font-weight: 600;
    }
`;
export const BaseSpan2 = styled.span`
    margin-left: 120px;

    @media screen and (max-width: 800px) {
      margin: 15px 0;
      font-size: 20px;
      font-weight: 600;
      
    }
`;

export const Quantity = styled(BaseSpan)`
    display: flex;

    @media screen and (max-width: 800px) {
       display: flex;
       flex-direction: column;
       align-items: center;
      
    }


`;

export const RemoveButton = styled.div`
    margin-left: 100px;   
    cursor: pointer;

    @media screen and (max-width: 800px) {
      margin: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
     
   }
  `;

