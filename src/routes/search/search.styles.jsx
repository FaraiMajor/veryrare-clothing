import styled from 'styled-components';


export const SearchContainer = styled.div`
  position: relative;
`;

export const SearchDropdown = styled.div`
  position: fixed;
  top: 0px; // Adjust the top position based on your navbar height
  left: 0;
  width: 100%;
  height: 50vh; // Adjust the height to cover half the page
  background-color: rgba(255,255,255, 1); // Adjust the background color and opacity
  z-index: 9999;
  backdrop-filter: blur(5px); // Apply backdrop blur effect
  
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0, 0.9); // Adjust the overlay background color and opacity
  z-index: 9998;
`;

export const InputBoxContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin: 20px auto;
  max-width: 30rem;
  width: fit-content;
  height: fit-content;
  background-color: #f2f2f2;
  border-radius: 0.1em;
  overflow: hidden;
`;

export const InputField = styled.input`
  background-color: transparent;
  color: black;
  outline: none;
  width: 100%;
  border: 0;
  padding: 1em 10rem 1em 0;
  font-size: 1em;

  &::placeholder {
    color: #abb2bf;
  }
`;
export const SearchIcon = styled.svg`
  height: 2rem;
  padding: 0 0.5em 0 0.8em;
  fill: #4d4d4d;
`;

export const Icon = styled.button`
    margin-left: 55px;
    margin-top: 5px;
    background-color:white;
    cursor: pointer;
    width: 40px;
    height: 40px;
    outline: none;
    color: black;
    border-style: none;
    border-radius: 50%;
    pointer-events: painted;
    @media screen and (max-width: 800px) {
      margin-top: 0px;
      width: 50px;
      height: 50px;
    }
`;