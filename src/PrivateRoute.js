import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({ element }) => {
    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem('picture')) {
            navigate('/');
        }
    }, [navigate]);

    return localStorage.getItem('picture') ? element : null;
};

export default PrivateRoute;


export const AuthRoute = ({ element }) => {
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('picture')) {
            navigate('/dashboard');
        }
    }, [navigate]);

    return localStorage.getItem('picture') ? null : element;
};


