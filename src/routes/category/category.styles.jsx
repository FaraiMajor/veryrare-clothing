import styled from "styled-components";

export const CategoryContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 50px;
    margin: 0 0px 60px;

    @media screen and (max-width: 800px) {
        width: 100%;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        margin: 0;
      }
    

`;

export const CategoryTitle = styled.h2`
    font-size: 15px;
    margin: 35px 0 25px 40px;

    @media screen and (max-width: 800px) {
      margin: 35px 0 10px 10px;
      font-size: 13px;
    }
`;

export const LabelSelect = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    position: static;
    margin:10px 40px;

    select{
      padding: 11px 0px 11px 10px;
      font-size: 0.85rem;
      border: 0.5px black solid;
      border-radius: 5px;
      background: white;

      &:focus {
        outline: none;
      }
    }

    label{
      font-size: 0.75rem;
      font-weight: 00;
      position: relative;
      top: 0.5rem;
      margin: 0 0 0 9px;
      padding: 0 3px;
      background: white;
      width: fit-content;
    }

      @media screen and (max-width: 800px) {
        width: 150px;
        margin:10px 10px;
    `;

export const TopElement = styled.div`
      display: flex;
      justify-content: space-between;
      margin-top: 25px;

      @media screen and (max-width: 800px) {
        margin:0;
      }
`;
