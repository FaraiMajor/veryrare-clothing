import styled from 'styled-components';

export const DirectoryContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: safe
`;
export const BannerContainer = styled.div`
    width: inherit;
    height: 435px;
    display: flex;
    background-color: black;
    margin-bottom: 9.2px;
    flex: 1 1 auto;
    color: whitesmoke;
    overflow: hidden;

    @media screen and (max-width: 800px) {
       padding: 0;
    }

`;


export const CategoryBodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto 0;
    padding-left: 50px;

    h2 {
        width: 400px;
        font-weight: bold;
        font-size: 3rem;
    }

    span {
        width: 400px;
    }

    p {
        // font-weight: lighter;
        width: 150px;
        font-size: 20px;
        font-weight: 600;
        text-align: center;
        background-color: white;
        border: none;
        border-radius: 2px;
        padding: 15px 15px;
        color: black;

        &:hover {
            cursor: pointer;
            background-color: #280b0b;
            color: beige;
            transition: ease-in-out 0.3s;
        }
    }
    @media screen and (max-width: 800px) {
        padding: 2px;
        margin-bottom: 0;

        h2{
            width: 300px;
            font-size: 2.5rem;
        }
        span{
            width: 350px
        }
  }

`;


