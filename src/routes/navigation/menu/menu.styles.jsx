import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.primaryLight};
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  text-align: left;
  padding: 2rem 5rem;
  position: absolute;
  margin-top: 30px;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: ${({ theme }) => theme.mobile}) {
      width: 100%;
      padding: 0rem;
    }
  }
`;

export const NavLink = styled(Link)`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    text-align: right;
    font-size: 1rem;
    text-transform: uppercase;
    padding: 1.5rem;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;
    position: relative;
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
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1rem;
      text-align: center;
    } 
  `;
export const TopMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  `;

export const BottomMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  `;