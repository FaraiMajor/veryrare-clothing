import styled from 'styled-components';

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const Body = styled.div`
        height: 90px;
        width: 90px;
        padding: 25px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
       border-radius: 50%;
        background-color: white;
        opacity: 0.7;
        position: absolute;
        text-decoration: none;


        h2 {
            font-weight: 600;
            margin: 0 6px 0;
            font-size: 22px;
            color: #313030;
        }


        p {
            font-weight: 400;
            font-size: 16px;
        }
`;

export const DirectoryItemContainer = styled.div`
    // width: 100%;
    height: 240px;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    // border: 1px solid black;
    margin: 0px 6.5px 0 6.5px;
    overflow: hidden;

    &:hover {
        cursor: pointer;


        ${BackgroundImage} {
            transform: scale(1.1);
            transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        }


        ${Body} {
            opacity: 0.9;
        }
    }

    .background-image {
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
    }

    @media screen and (max-width: 800px) {
        height: 200px;
        width: 50vw;
        margin-bottom: 10px;
  }
  @media screen and (min-width: 1025px) {
        height: 30rem;
    
  }
`;

