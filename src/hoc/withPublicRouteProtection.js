import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const withPublicRouteProtection = (WrappedComponent) => {
  return (props) => {
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    useEffect(() => {
      if (isLoggedIn) {
        navigate('/', { replace: true });
      }
    }, [isLoggedIn, navigate]);

    return !isLoggedIn ? <WrappedComponent {...props} /> : null;
  };
};

export default withPublicRouteProtection;
