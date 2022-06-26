import React, { useEffect, useState } from 'react';
import { withAuth } from '../component/hoc/withAuth';
import axios from 'axios';
import styled from 'styled-components';
import theme from '../styles/theme';
import Navigation from '../component/Navigation';
import Feed from '../component/Feed';

const Feeds = () => {
    const [feeds, setFeeds] = useState([]);

    const getFeeds = async () => {
        const result = await axios.get('http://localhost:3001/feeds');
        setFeeds(result.data);
    };

    useEffect(() => {
        getFeeds();
    }, []);

    return (
        <FeedsWrapper>
            <Navigation />
            <FeedsMain>
                {feeds.map((el) => (
                    <Feed
                        key={el.id}
                        feedId={el.id}
                        writer={el.writer}
                        feedImage={el.imageUrl}
                        likeCount={el.likeCount}
                        comment={el.comment}
                    />
                ))}
            </FeedsMain>
        </FeedsWrapper>
    );
};

export default withAuth(Feeds);

const FeedsWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: ${theme.bgColor};
`;

const FeedsMain = styled.main`
    max-width: 600px;
    width: 100%;
    height: 100%;
    margin-top: 120px;
    padding-bottom: 100px;
`;
