import axios from 'axios';
import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';

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

    return (
        <>
            <CommentList>
                {list.map((el) => (
                    <div key={el.commentPk}>
                        <CommentWriter>{el.commentWriter}</CommentWriter>
                        <CommentContent>{el.comment}</CommentContent>
                    </div>
                ))}
            </CommentList>
            <CommentInputWrapper>
                <CommentInput type="text" ref={commentRef} />
                <CommentButton onClick={handleSubmit}>등록</CommentButton>
            </CommentInputWrapper>
        </>
    );
};

export default Comment;

const CommentList = styled.div`
    width: 100%;
    padding: 20px 10px;

    div {
        margin-bottom: 10px;
    }
`;

const CommentWriter = styled.span`
    display: inline-block;
    width: 100px;
    margin-right: 20px;
    text-align: center;
`;
const CommentContent = styled.span`
    font-size: 14px;
`;

const CommentInputWrapper = styled.div`
    width: 100%;
    height: 55px;
    border: 1px solid ${theme.borderColor};
`;

const CommentInput = styled.input`
    width: 90%;
    height: 50px;
    border: none;
`;

const CommentButton = styled.button`
    width: 10%;
    height: 50px;
    padding-right: 10px;
    background-color: white;
    color: ${theme.primary};
    font-size: 20px;
`;
