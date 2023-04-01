import logo from '../../images/edited.png';
import car from '../../images/car.png';
import './login.css';
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Typography } from "@mui/material";
import { sentLoginRequest } from '../../apihelpers/helpers';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store';



function Login() {
  const dispatch = useDispatch();
  const onResReceived = (data) => {
    localStorage.setItem("userId",data.id);

    dispatch(authActions.login());
    navigate("/profile");
  }

  
  const navigate = useNavigate();
const navigateToResister = () =>{
  navigate('/register');
}
const [inputs, setInputs] = useState({
  email: "",
  password: "",
});
const handleChange = (e) => {
  setInputs((prevState) => ({
    ...prevState,
    [e.target.name]: e.target.value,
  }));
};

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(inputs)

  sentLoginRequest(inputs)
  .then(onResReceived)
  .catch((err) => {
    console.log(err);
    alert("Either Password or Username wrong, Please enter again");
  });


};


  return (
    <div className="App">
      <header className="App-header">
        <div className="front">
          <div className='left'></div>
          <div className='center'>
            <div className='center-left'></div>
            <div>
              <form onSubmit={handleSubmit}>
              <Box
          maxWidth={350}
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          justifyContent={"center"}
          // boxShadow="10px 10px 20px #ccc"
          padding={3}
          margin="auto"
          marginTop={-60}
          marginLeft={42}
          borderRadius={5}
        >
          <Typography variant="h2" padding={3} textAlign="center" sx={{color: "white"}}>
            Login
          </Typography>
          <TextField
            name="email"
            sx={{border:"solid white 2px", "& .MuiInputBase-root": {
              color: 'white'
          }}}
            onChange={handleChange}
            value={inputs.email}
            type={"email"}
            placeholder="Email"
            margin="normal"
            variant='outlined'
          />
          <TextField
            name="password"
            sx={{border:"solid white 2px", "& .MuiInputBase-root": {
              color: 'white'
          }}}
            onChange={handleChange}
            value={inputs.password}
            type={"password"}
            placeholder="Password"
            margin="normal"
            variant='outlined'
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ borderRadius: 3, marginTop: 3 }}
            color="warning"
          >
            Submit
          </Button>
          <Button
            // onClick={() => setIsSignup(!isSignup)}
            onClick={navigateToResister}
            sx={{ borderRadius: 3, marginTop: 3, color: "#FFA500"}}
          >
            Don't have an account? Register
            {/* Change To {isSignup ? "Login" : "Signup"} */}
          </Button>
        </Box>
              </form>
            {/* <button className="btnFront">Click here</button> */}
            {/* <button onClick={navigateToResister} className="register">Don't have an account? Register</button> */}
            </div>
            
          </div>
          <div className='rightF'>
          <img src={car} className="carFront" alt="car" />
          <img src={logo} className="App-logo" alt="logo" />

          </div>
        </div>
      </header>
    </div>
  );
}

export default Login;