import styled from 'styled-components';

export const AuthenticationContainer = styled.div`
  display: flex;
  width: 900px;
  height: 100vh;
  justify-content: space-between;
  margin: 30px auto;

  @media screen and (max-width: 800px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin:10px;

  }
`;