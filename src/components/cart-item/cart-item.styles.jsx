import styled from 'styled-components';

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 120px;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: solid 1.5px rgb(248, 245, 245);

  img {
    width: 30%;
  }
`;

export const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;

  span {
    font-size: 16px;
  };
`;

export const RemoveItem = styled.div`
  cursor: pointer;
  margin: auto 10px auto 0
`;
