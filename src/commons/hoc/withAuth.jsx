import React from 'react';

export const withAuth = (Component) => (props) => {
    return <Component {...props} />;
};
