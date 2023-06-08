import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 15px 50px;

  @media screen and (max-width: 800px) {
    display: flex;
    justify-content: center;
    align-items: center;

  }
`;

export const Title = styled(Link)`
    font-size: 28px;
    margin-bottom: 25px;
    cursor: pointer;
    text-decoration: none;
    color: inherit;

    @media screen and (max-width: 800px) {
      font-size: 35px;
      display :flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 0px;
      text-align: center;
  }
`;

export const Preview = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    row-gap: 50px;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 15px;
    grid-row-gap: 25px;       
  }

  @media screen and (max-width: 400px) {
    grid-template-columns: 1fr;
    grid-row-gap: 45px;
  }
`;