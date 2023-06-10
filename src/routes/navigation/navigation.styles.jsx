import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 0px;
    margin: 0px 0 5px;
    border-bottom: solid rgb(192, 190, 190) 0.1px;

    @media screen and (max-width: 800px) {
        width: 100%
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 0;
      }
`;
export const LogoContainer = styled(Link)`
        height: 100%;
        width: 70px;
        padding: 15px;
        display: flex;
        text-decoration: none;
        align-items: center;

        .logo {
            width: 80%;
        }

        .logo-text {
            font-size: 1.3rem;
            font-weight: 600;
            color: black
        }

        @media screen and (max-width: 800px) {

            .logo-text{
                display: none;
            }
          }
`;

export const NavLinks = styled.div`
        padding-right: 25px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        text-align: center;
        font-weight: 600;
`;

export const NavLink = styled(Link)`
        position: relative;
        padding: 10px 10px;
        margin-right: 5px;
        cursor: pointer;
        text-decoration: none;
        color: black;

        &:after {
            background: none repeat scroll 0 0 transparent;
            bottom: 0;
            content: "";
            display: block;
            height: 2px;
            left: 50%;
            position: absolute;
            background: black;
            transition: width 0.3s ease 0s, left 0.3s ease 0s;
            width: 0;
        }

        &:hover:after {
            width: 100%;
            left: 0;
        }
`;