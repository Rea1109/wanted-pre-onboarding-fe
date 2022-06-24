import axios from 'axios';
import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

const Comment = ({ feedId, list }) => {
    const [commentPk] = useState(() => {
        return list[list.length - 1].commentPk + 1;
    });
    const [commentWriter] = useState(() => {
        return localStorage.getItem('name');
    });

    const commentRef = useRef(null);

    const updateComment = async () => {
        await axios.patch(`http://localhost:3001/feeds/${feedId}`, {
            comment: [
                ...list,
                { commentPk, commentWriter, comment: commentRef.current.value },
            ],
        });
    };

    const handleSubmit = () => {
        if (commentRef.current.value === '') return;
        updateComment();
    };

    const handleEnter = (event) => {
        if (event.key !== 'Enter') return;
        if (commentRef.current.value === '') return;
        updateComment();
    };

    return (
        <>
            <CommentList>
                {list.map((el) => (
                    <CommentWraaper key={el.commentPk}>
                        <CommentWriter>{el.commentWriter}</CommentWriter>
                        <CommentContent>{el.comment}</CommentContent>
                    </CommentWraaper>
                ))}
            </CommentList>
            <CommentInputWrapper>
                <SentimentSatisfiedAltIcon />
                <CommentInput
                    type="text"
                    ref={commentRef}
                    onKeyPress={handleEnter}
                />
                <CommentButton onClick={handleSubmit}>등록</CommentButton>
            </CommentInputWrapper>
        </>
    );
};

export default Comment;

const CommentList = styled.div`
    width: 100%;
    padding: 20px 10px;
`;

const CommentWraaper = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 15px;
`;

const CommentWriter = styled.span`
    display: block;
    width: 100px;
    margin-right: 20px;
    text-align: center;
    font-size: 14px;
`;
const CommentContent = styled.span`
    display: block;
    width: 200px;
    font-family: 'NotoSans-Light';
    font-size: 14px;
    overflow-wrap: break-word;
    line-height: 18px;
`;

const CommentInputWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 55px;
    border: 1px solid ${theme.borderColor};

    svg {
        position: absolute;
        top: 12px;
        left: 20px;
        font-size: 30px;
    }
`;

const CommentInput = styled.input`
    width: 90%;
    height: 50px;
    padding-left: 60px;
    border: none;

    @media all and (max-width: 600px) {
        width: 80%;
    }
`;

const CommentButton = styled.button`
    width: 10%;
    height: 50px;
    padding-right: 10px;
    background-color: white;
    color: ${theme.primary};
    font-size: 20px;

    @media all and (max-width: 600px) {
        width: 20%;
    }
`;
