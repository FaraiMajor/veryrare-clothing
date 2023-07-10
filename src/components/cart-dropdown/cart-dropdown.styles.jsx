import styled from 'styled-components';

import {
  BaseButton,
  InvertedButton,
} from '../button/button.styles';

export const CartDropdownContainer = styled.div`
    position: absolute;
    width: 360px;
    height: 450px;
    display: flex;
    flex-direction: column;
    padding-top: 15px;
    border: 1px solid rgb(234, 232, 232);
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: white;
    top: 80px;
    right: 0px;
    z-index: 5;
    ${BaseButton},
    ${InvertedButton} {
        margin-top: auto;
      }

      @media screen and (max-width: 800px) {
        top: 90px;
        right: 0px;
        
      }

    `;

export const CartItems = styled.div`
        height: 290px;
        display: flex;
        flex-direction: column;
        overflow: auto;
        padding: 15px;
    `;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CheckoutEl = styled.div`
    background-color: rgb(248, 245, 245);
    padding: 5px 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    `;
export const CartTotal = styled.p`
    margin-bottom: 10px;
    `;

export const TotalEl = styled.span`
        font-size: 1.2rem;
        font-weight: 600;
`;
