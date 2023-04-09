import { Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import HeaderBar from "./HeaderStyle";

const Header = () => {
  const navigate = useNavigate();
  const {pathname} = useLocation();
  const token = !!localStorage.getItem('accessToken');

  const login = () => {
    navigate('/signin')
  }
  const logout = () =>{
    navigate('/');
    localStorage.removeItem('accessToken')
  }

    return (
        <HeaderBar>
            <Toolbar>
                <Typography variant="h3" component="h1">
                    Bucket List
                </Typography>
                {pathname === '/signin' || pathname === '/signup' || token ? null : <Button onClick={login} color="inherit">login</Button>
                }
                {token ? <Button color="inherit" onClick={logout}>logout</Button> : null}
            </Toolbar>
        </HeaderBar>
    );
};

export default Header;