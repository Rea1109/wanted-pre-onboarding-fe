import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import TelegramIcon from '@mui/icons-material/Telegram';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import Messenger from '../assets/images/messenger.png';
import Comment from './Comment';
import CircularProgress from '@mui/material/CircularProgress';

const Feed = ({ feedId, writer, feedImage, likeCount, comment }) => {
    const [isLoad, setIsLoad] = useState(false);
    useEffect(() => {
        console.log('Feed~~~');
    }, []);

    return (
        <FeedWrapper>
            <FeedHeader>
                <div>
                    <AccountCircleIcon
                        sx={{ fontSize: 40, color: theme.borderColor }}
                    />
                    <span>{writer}</span>
                </div>
                <MoreHorizIcon sx={{ fontSize: 40, color: '#575657' }} />
            </FeedHeader>

            <div style={{ display: isLoad ? 'block' : 'none' }}>
                <FeedImage
                    src={feedImage}
                    alt="content"
                    onLoad={() => setIsLoad(true)}
                />
            </div>

            {isLoad || (
                <FeedLoadingImage>
                    <CircularProgress />
                </FeedLoadingImage>
            )}

            <FeedFooter>
                <div style={{ width: '114px' }}>
                    <FavoriteBorderIcon sx={{ fontSize: 30 }} />
                    <img src={Messenger} alt="icon" />
                    <TelegramIcon sx={{ fontSize: 30 }} />
                </div>
                <TurnedInNotIcon sx={{ fontSize: 30 }} />
            </FeedFooter>
            <LikeCount>좋아요 {likeCount}개</LikeCount>
            <Comment feedId={feedId} list={comment} />
        </FeedWrapper>
    );
};

export default Feed;

const FeedWrapper = styled.section`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    border-radius: 5px;
    border: 1px solid ${theme.borderColor};
    background-color: white;
    overflow: hidden;
`;

const FeedHeader = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    padding: 0px 20px;

    span {
        position: absolute;
        top: 15px;
        left: 65px;
    }

    svg {
        :hover {
            cursor: pointer;
        }
    }
`;

const FeedImage = styled.img`
    width: 100%;
    object-fit: contain;
`;

const FeedLoadingImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 500px;

    @media all and (max-width: 600px) {
        height: 300px;
    }
`;

const FeedFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    padding: 0px 10px;

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 20%;
    }

    img {
        width: 23px;
        height: 23px;
        object-fit: cover;

        :hover {
            cursor: pointer;
        }
    }

    svg {
        :hover {
            cursor: pointer;
        }
    }
`;

const LikeCount = styled.span`
    display: inline-block;
    margin: 5px 0px 10px 10px;
`;
