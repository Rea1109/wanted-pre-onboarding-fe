import React from 'react';
import styled from 'styled-components';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import logo from '../assets/images/instagram_logo.png';
import theme from '../styles/theme';

const Navigation = () => {
    return (
        <Navbar>
            <Logo>
                <img src={logo} alt="logo" />
            </Logo>
            <NavInput type="text" placeholder="검색" />
            <LogoutButton>
                <ExitToAppIcon sx={{ fontSize: 40 }} />
            </LogoutButton>
        </Navbar>
    );
};

export default Navigation;

const Navbar = styled.nav`
    position: fixed;
    top: 0px;
    z-index: 99;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100px;
    border: 1px solid ${theme.borderColor};
    background-color: white;

    @media all and (max-width: 768px) {
        padding: 0px 30px;
        justify-content: space-between;
    }
`;

const Logo = styled.div`
    width: 150px;
    height: 50px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const NavInput = styled.input`
    width: 350px;
    height: 50px;
    padding-left: 20px;
    border: none;
    border-radius: 5px;
    background-color: ${theme.borderColor};
    font-size: 24px;

    @media all and (max-width: 768px) {
        display: none;
    }
`;

const LogoutButton = styled.button`
    width: 50px;
    height: 50px;
    background-color: white;
`;
