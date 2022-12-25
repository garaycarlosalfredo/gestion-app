import React,{useContext, useEffect, useState} from 'react'
import { Routes, Route, Link, Navigate } from 'react-router-dom';
//import AuthContext from '../../context/autenticacion/authContext'
//import AuthState from '../../context/autenticacion/authState'
//util auth
import {getLocalUser} from '../../util/auth'

const ProtectedRoute = ({ user,redirectPath = '/', children }) => {
    //const userLocal = JSON.parse(localStorage.getItem('userLocal'))
    const userLocal = getLocalUser()

    //console.log('userLocal',userLocal)
    if (userLocal===undefined || userLocal === null) {
      return <Navigate to={redirectPath} replace />;
    }
  
    return children;
  };

export default ProtectedRoute