import styled from 'styled-components';

const subColor = 'grey';
const mainColor = 'black';

// const shrinkLabelStyles = css`
//   top: -14px;
//   font-size: 12px;
//   color: ${mainColor};
// `;

export const FormInputLabel = styled.label`
  color: black;
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 5px;
  font-size: 16px;
  pointer-events: none;
  transition: 300ms ease all;

  
`;

export const Input = styled.input`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ ${FormInputLabel},
  &:valid ~ ${FormInputLabel} {
    top: -20px;
    left: 0;
    color: ${mainColor};
    font-size: 12px;
  }

  @media screen and (max-width: 800px) {
    width: 90%

  }
`;

export const Group = styled.div`
  position: relative;
  margin: 45px 0;

  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;