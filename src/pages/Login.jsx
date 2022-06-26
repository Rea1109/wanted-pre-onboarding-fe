import React, { useRef, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import theme from '../styles/theme';
import logo from '../assets/images/instagram_logo.png';
import { checkFormatId, checkFormatPwd } from '../commons/utility';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const id = useRef(null);
    const pwd = useRef(null);
    const [isAble, setIsAble] = useState(false);
    const [isId, setIsId] = useState(true);
    const [isPwd, setIsPwd] = useState(true);

    const route = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        validationCheck() && login();
    };

    const login = async () => {
        try {
            const result = await axios.get(
                `http://localhost:3001/users?email=${id.current.value}`
            );
            if (result.data.length === 0) {
                alert('아이디 비밀번호를 확인해주세요.');
                return;
            }
            alert(`안녕하세요 ${result.data[0].name} 님`);
            localStorage.setItem('name', result.data[0].name);
            localStorage.setItem('isLogin', 'true');
            route('/');
        } catch (error) {
            alert('잠시후 다시 시도 해주세요.');
        }
    };

    const validationCheck = (type) => () => {
        type === 'id'
            ? checkFormatId(id.current.value)
                ? setIsId(true)
                : setIsId(false)
            : checkFormatPwd(pwd.current.value)
            ? setIsPwd(true)
            : setIsPwd(false);

        if (!checkFormatId(id.current.value)) {
            setIsAble(false);
            return false;
        }
        if (!checkFormatPwd(pwd.current.value)) {
            setIsAble(false);
            return false;
        }

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
                    onChange={validationCheck('id')}
                    helpText={isId}
                />
                <Input
                    name="pwd"
                    type="text"
                    placeholder="대문자, 숫자, 특수문자 포함 8자리 이상"
                    ref={pwd}
                    onChange={validationCheck('pwd')}
                    helpText={isPwd}
                />
                <Button isAble={isAble}>로그인</Button>
            </LoginForm>
        </LoginWrapper>
    );
};

export default Login;

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
`;

const Header = styled.header`
    width: 80%;

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
`;

const Input = styled.input`
    width: 80%;
    height: 42px;
    margin: 15px 0px;
    padding: 0px 0px 0px 15px;
    border: 1px solid
        ${({ helpText }) => (helpText ? theme.borderColor : 'red')};
    border-radius: 4px;
    background-color: ${theme.bgColor};
`;

const Button = styled.button`
    width: 80%;
    height: 30px;
    margin: 15px 0px;
    border: none;
    border-radius: 4px;
    background-color: ${({ isAble }) =>
        isAble ? theme.primary : theme.secondery};
    color: white;
    font-size: 18px;
    line-height: 30px;
`;
