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
    background-color: #1a1a1a;
    margin-bottom: 9.2px;
    flex: 1 1 auto;
    color: whitesmoke;
    overflow: hidden;

    @media screen and (max-width: 800px) {
       padding: 0;
    }
    @media screen and (min-width: 1600px) {
        height: 35rem;
        
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
        margin-bottom: 20px;
    }

    .btn-white {
        width: 250px;
        display: inline-flex;
        align-items: center;
        color: #fff;
        border: 1px solid #fff;
        min-height: 50px;
        padding: 0 20px;
        font-size: 17px;
        text-transform: uppercase;
        z-index: 1;
        position: relative;
        background-color: transparent;

        &::before{
            content: "";
            background-color: #fff;
            display: block;
            width: 45px;
            height: 1px;
            margin-right: 20px;
        }
        &::after{
            content: "";
            background-color: #fff;
            display: block;
            width: 0%;
            height: 100%;
            right: 0;
            top: 0;
            position: absolute;
            z-index: -1;
            -webkit-transition: all 0.3s ease-out;
            -moz-transition: all 0.3s ease-out;
            -o-transition: all 0.3s ease-out;
            transition: all 0.3s ease-out;
        }
        &:hover {
            cursor: pointer;
            color: #232963;
            text-decoration: none;
            -webkit-transition: all 0.3s ease-out;
            -moz-transition: all 0.3s ease-out;
            -o-transition: all 0.3s ease-out;
            transition: all 0.3s ease-out;

            &::after{
                width: 100%;
                -webkit-transition: all 0.3s ease-out;
                -moz-transition: all 0.3s ease-out;
                -o-transition: all 0.3s ease-out;
                transition: all 0.3s ease-out;  
            }
            &::before{
                background-color: #232963;
                -webkit-transition: all 0.3s ease-out;
                -moz-transition: all 0.3s ease-out;
                -o-transition: all 0.3s ease-out;
                transition: all 0.3s ease-out;
            }
        }
    
    }
    @media screen and (max-width: 800px) {
        padding: 10px 20px;
        margin-bottom: 0;

        h2{
            width: 300px;
            font-size: 2.5rem;
        }
        span{
            width: 350px
        }
  }
  @media screen and (min-width: 1600px) {
        padding-left: 0;
        h2 {
            width: 700px;
            font-weight: bold;
            font-size: 5rem;
        }

        span {
            width: 800px;
            margin-bottom: 20px;
        }
    
  }

`;


