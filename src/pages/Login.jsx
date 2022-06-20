import React, { useRef, useState } from 'react';
import { withAuth } from '../commons/hoc/withAuth';
import styled from 'styled-components';
import theme from '../styles/theme';
import logo from '../assets/images/instagram_logo.png';
import { checkFormatId, checkFormatPwd } from '../commons/utility';

const Login = () => {
    const id = useRef(null);
    const pwd = useRef(null);
    const [isValidation, setIsValidation] = useState({ inputId: true, inputPwd: true });
    const [isAble, setIsAble] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        validationCheck() || console.log('로그인 불가능');
    };

    const handleBlur = (event) => {
        event.target.name === 'id'
            ? setIsValidation((pre) => ({
                  ...pre,
                  inputId: checkFormatId(event.target.value),
              }))
            : setIsValidation((pre) => ({
                  ...pre,
                  inputPwd: checkFormatPwd(event.target.value),
              }));
    };

    const validationCheck = () => {
        console.log(id.current.value === '' || pwd.current.value === '');
        console.log(!isValidation.inputId || !isValidation.inputPwd);
        if (id.current.value === '' || pwd.current.value === '') return false;
        if (!isValidation.inputId || !isValidation.inputPwd) return false;

        setIsAble(true);
        return true;
    };

    return (
        <LoginWrapper>
            <Header>
                <img src={logo} alt="logo" />
            </Header>
            <LoginForm onSubmit={handleSubmit}>
                <Input
                    name="id"
                    type="text"
                    placeholder="전화번호, 사용자 이름 또는 이메일"
                    ref={id}
                    onBlur={handleBlur}
                    error={!isValidation.inputId}
                />
                <Input
                    name="pwd"
                    type="text"
                    placeholder="대문자, 숫자, 특수문자 포함 8자리 이상"
                    ref={pwd}
                    onBlur={handleBlur}
                    error={!isValidation.inputPwd}
                />
                <Button isAble={isAble}>로그인</Button>
            </LoginForm>
        </LoginWrapper>
    );
};

export default withAuth(Login);

const LoginWrapper = styled.section`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 350px;
    height: 400px;
    border: 1px solid ${theme.borderColor};
    border-radius: 4px;
    background-color: white;
`;

const Header = styled.header`
    width: 80%;
    background-color: white;

    img {
        width: 100%;
        object-fit: contain;
    }
`;

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: white;
`;

const Input = styled.input`
    width: 80%;
    height: 42px;
    margin: 15px 0px;
    padding: 0px 0px 0px 15px;
    border: 1px solid ${({ error }) => (error ? 'red' : theme.borderColor)};
    border-radius: 4px;
`;

const Button = styled.button`
    width: 80%;
    height: 30px;
    margin: 15px 0px;
    border: none;
    border-radius: 4px;
    background-color: ${({ isAble }) => (isAble ? theme.primary : theme.secondery)};
    color: white;
    font-size: 18px;
    line-height: 30px;
`;
