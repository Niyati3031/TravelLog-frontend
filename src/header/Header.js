import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    Button,
    Tabs,
    Tab,
  } from "@mui/material";
import logo from 'D:/Travel/travel/src/images/travel.png';
import  {Link,useNavigate}  from 'react-router-dom';
import { useSelector } from 'react-redux';
const linksArr = ["login", "register"]; 
const LoggedInLinks = ["home", "search", "add", "profile","chat"];

function Header() {


    const navigate = useNavigate();
    const navigateToPage = (link) =>{
        navigate(`/${link}`);
      }

    const isLoggedIn = useSelector(state => state.isLoggedIn);
    const [value, setValue] = useState();
    return (
     <AppBar 
     sx={{bgcolor: "transparent", position: "sticky", zIndex:'0'}}>
        <Toolbar>
        <img src={logo} onClick={() => {
            navigate("/");
            window.location.reload(false);
        }} width={50} height={50} alt="logo"/>
        
        <Tabs value={value} onChange={(e,val) => setValue(val)} sx={{ml: "auto",  textDecoration:"none"}}>
            {isLoggedIn ? 
            
            LoggedInLinks.map((link) =>(
                <Tab
                // onClick={() => {
                //     navigate(`/${link}`);
                //     window.location.reload(false);
                // }}
                // onClick={navigateToPage(link)}
                LinkComponent={Link}
                to={`/${link}`}
                sx={{textDecoration: "none", ":hover": {
                    textDecoration: "underline", 
                    textUnderlineOffset: "18px",
                }}} key= {link} label = {link}/>
            ))

            : linksArr.map((link) =>(
                <Tab
                // onClick={() => {
                //     navigate(`/${link}`);
                //     window.location.reload(false);
                // }}
                LinkComponent={Link}
                to={`/${link}`}
                sx={{textDecoration: "none", ":hover": {
                    textDecoration: "underline", 
                    textUnderlineOffset: "18px",
                }}} key= {link} label = {link}/>
            ))}
        </Tabs>
        </Toolbar>
     </AppBar>
    );
  }
  
  export default Header;

