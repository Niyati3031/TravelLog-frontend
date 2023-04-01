import logo from 'D:/Travel/travel/src/images/edited.png';
import car from 'D:/Travel/travel/src/images/car.png';
import './register.css';
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Typography } from "@mui/material";
import { sentRegisterRequest } from '../../apihelpers/helpers';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store';

function Register() {
  const navigate = useNavigate();
  const onResReceived = (data) => {
    localStorage.setItem("userId",data.id);
    dispatch(authActions.login());
    navigate("/home");
  }
  const dispatch = useDispatch();


  const navigateToLogin = () =>{
    navigate('/login');
  }

const [inputs, setInputs] = useState({
  name: "",
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

  console.log(inputs);

  sentRegisterRequest(inputs)
  .then(onResReceived)
  .catch((err) => console.log(err));
};
  return (
    <div className="App">
      <header className="App-header">
        <div className="back">
          <img src={car} className="carBack" alt="car" />
          <img src={logo} className="App-logoBack" alt="logo" />
          <div className='right'></div>
            <div className='centerR'>
              <div className='center-right'></div>
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
                    marginTop={-3}
                    marginRight={42}
                    borderRadius={5}
                  >
                  <Typography variant="h2" padding={3} textAlign="center" sx={{color: "white"}}>
                    Register
                  </Typography>
                    <TextField
                      name="name"
                      sx={{border:"solid white 2px", "& .MuiInputBase-root": {
                        color: 'white'
                    }}}
                      onChange={handleChange}
                      value={inputs.name}
                      placeholder="Name"
                      margin="normal"
                    />
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
                      onClick={navigateToLogin}
                      sx={{ borderRadius: 3, marginTop: 1, color: "#FFA500"}}
                    >
                      Already have an account? Login
                      {/* Change To {isSignup ? "Login" : "Signup"} */}
                    </Button>
                    </Box>
                </form>
              </div>
            </div>
          
        </div>
      </header>
    </div>
  );
}

export default Register;
