import React from 'react';
import { Navigate } from 'react-router-dom';

export function PrivateRoute({ children }: {children : React.ReactElement}) {
  const token =!!localStorage.getItem("accessToken");

  return token ?  children : <Navigate to="/signin" />;
}

export function PublicRoute({children}: {children : React.ReactElement}){
  const token =!!localStorage.getItem("accessToken");

  return token ?  <Navigate to="/todo" /> : children ;
}