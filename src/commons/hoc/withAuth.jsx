import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const withAuth = (Component) => (props) => {
    const route = useNavigate();
    useEffect(() => {
        console.log(localStorage.getItem('isLogin'));
        localStorage.getItem('isLogin') || route('/login');
    }, []);
    return <Component {...props} />;
};
