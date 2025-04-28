import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AuthWatcher = () => {
    const token = useSelector((state) => state.auth.token);
    const navigate = useNavigate();
  
    useEffect(() => {
      if (!token) {
        navigate('/api/Login');
      }
    }, [token]);
  
    return null;
  };

export default AuthWatcher
