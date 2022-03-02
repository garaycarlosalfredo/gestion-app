import React,{useContext, useEffect, useState} from 'react'
import { Routes, Route, Link, Navigate } from 'react-router-dom';
//import AuthContext from '../../context/autenticacion/authContext'
//import AuthState from '../../context/autenticacion/authState'
//util auth
import {checkUserAuth} from '../../util/auth'

const ProtectedRoute = ({ user,redirectPath = '/', children }) => {
    const [authCheck,authCheckSet] = useState(false)

    useEffect(() => {
        authCheckSet(checkUserAuth())
      },[authCheck]);


    console.log('authCheck',authCheck)
    if (!authCheck) {
      return <Navigate to={redirectPath} replace />;
    }
  
    return children;
  };

export default ProtectedRoute