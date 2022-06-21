import React from 'react';
import { withAuth } from '../commons/hoc/withAuth';
// import axios from 'axios';
import styled from 'styled-components';
import theme from '../styles/theme';

const Feeds = () => {
    return (
        <FeedsWrapper>
            <Navigation></Navigation>
            <FeedsMain></FeedsMain>
        </FeedsWrapper>
    );
};

export default withAuth(Feeds);

const FeedsWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 1200px;
    background-color: ${theme.bgColor};
`;

const Navigation = styled.nav`
    position: fixed;
    top: 0px;
    width: 100%;
    height: 100px;
    border: 1px solid ${theme.borderColor};
    background-color: white;
`;

const FeedsMain = styled.main`
    max-width: 600px;
    min-width: 360px;
    width: 100%;
    height: 100%;
    margin-top: 120px;
    border: 1px solid red;
`;
