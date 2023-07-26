import styled from "styled-components";

export const MainContainer = styled.div`
  margin-top: 20x;
`;

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 0px;
    grid-row-gap: 50px;
    margin: 10px 0 150px;

    p{
      display: flex;
      justify-content: center;
      align-item: center;
      font-weight: 600;
      span{
        font-weight: 400;
        color: red;
      }
  }

    @media screen and (max-width: 800px) {
      width: 100%;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 0px;
      grid-row-gap: 0px;
      // margin-top; 20px;
      p{
        width: 350px;
      }
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

      p{
        font-weight: 600;
        margin: 35px 0 25px 40px; 
    }

    @media screen and (max-width: 800px) {
      margin:0;
      p{
        margin: 35px 0 15px 15px; 
    }
}
`;
export const NoResults = styled.div`
    grid-template-columns: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 10px 300px;
    width: 100%;
    @media screen and (max-width: 800px) {
      margin: 0;
    }
    
`;
