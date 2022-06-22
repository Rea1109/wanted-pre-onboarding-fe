import React, { useEffect } from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import TelegramIcon from '@mui/icons-material/Telegram';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import Messenger from '../assets/images/messenger.png';
import Comment from './Comment';

const Feed = ({ feedId, writer, feedImage, likeCount, comment }) => {
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
            <FeedImage src={feedImage} alt="content" />
            <FeedFooter>
                <div>
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
    border: none;
    background-color: white;
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
