import styled from 'styled-components';

import Button from '../button/button';

export const PaymentFormContainer = styled.div`
  min-width: 400px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #e6f0ff;
  // border: solid black 1px;
  border-radius: 10px;
  margin-right: 40px;
  margin-top: 25px;
  padding: 0 20px
  
  @media screen and (max-width: 800px) {
    min-width: 400px;
    height: 300px;
    border-radius: 0;
}
  
`;

export const FormContainer = styled.form`
  padding: 30px 10px;
  min-width: 400px;

  @media screen and (max-width: 800px) {
    min-width: 350px;
} 
`;

export const PaymentButton = styled(Button)`
    margin-left: auto;
    margin-top: 60px;
    --width: 100px;
    --height: 35px;
    --tooltip-height: 35px;
    --tooltip-width: 120px;
    --gap-between-tooltip-to-button: 18px;
    --button-color: #222;
    --tooltip-color: #fff;
    width: var(--width);
    height: var(--height);
    background: var(--button-color);
    position: relative;
    text-align: center;
    border-radius: 0.45em;
    font-family: "Arial";
    transition: background 0.3s;

    &:before {
      position: absolute;
      content: attr(data-tooltip);
      width: var(--tooltip-width);
      height: var(--tooltip-height);
      background-color: #555;
      font-size: 0.9rem;
      color: #fff;
      border-radius: .25em;
      line-height: var(--tooltip-height);
      bottom: calc(var(--height) + var(--gap-between-tooltip-to-button) + 10px);
      left: calc(50% - var(--tooltip-width) / 2);
    }

    &:after {
      position: absolute;
      content: '';
      width: 0;
      height: 0;
      border: 10px solid transparent;
      border-top-color: #555;
      left: calc(50% - 10px);
      bottom: calc(100% + var(--gap-between-tooltip-to-button) - 10px);
    }

    &:after,
    &:before {
      opacity: 0;
      visibility: hidden;
      transition: all 0.5s;
    }

    .text {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .button-wrapper,
    .text,
    .icon {
      overflow: hidden;
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      color: #fff;
    }

    .text {
      top: 0;
    }

    .text,
    .icon {
      transition: top 0.5s;
    }

    .icon {
      color: #fff;
      top: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .icon svg {
      width: 24px;
      height: 24px;
    }

    &:hover {
      background: #222;
    }

    &:hover .text {
      top: -100%;
    }

    &:hover .icon {
      top: 0;
    }

    &:hover:before,
    &:hover:after {
      opacity: 1;
      visibility: visible;
    }

    &:hover:after {
      bottom: calc(var(--height) + var(--gap-between-tooltip-to-button) - 20px);
    }

    &:hover:before {
      bottom: calc(var(--height) + var(--gap-between-tooltip-to-button));
    }
`;
