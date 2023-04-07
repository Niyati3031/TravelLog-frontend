import logo from '../../images/edited.png';
import car from '../../images/car.png';
import './register.css';
import React, { useState } from "react";
import {Link, useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Typography } from "@mui/material";
import { sentRegisterRequest } from '../../apihelpers/helpers';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store';
import axios from "axios";
import styles from "./styles.module.css";
import girl from '../../images/girl.png';

function Register() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
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


  const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

  const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "https://travel-mania-api.onrender.com/users/signup";
			const { data: res } = await axios.post(url, data);
      localStorage.setItem("userId",res.id);
      console.log(res.message);
     dispatch(authActions.login());
      navigate("/home");

		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};
  return (
    <div className="App">
      <header className="App-header">
        <div className="back">
          <img src={car} className="carBack" alt="car" />
          <img src={logo} className="App-logoBack" alt="logo" />
          <div className='right'></div>
            <div className='centerR'>
              <div className={styles.signup_container}>
			<div className={styles.signup_form_container}>
				<div className={styles.left}>
        <img src={girl}></img>
				</div>
				<div className={styles.right}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Create Account</h1>
						<input
							type="text"
							placeholder="Name"
							name="name"
							onChange={handleChange}
							value={data.name}
							required
							className={styles.input}
						/>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							Sign Up
						</button>
            <h1 style={{fontSize:'medium'}}>Already have an account ?</h1>
					<Link to="/login" style={{marginTop:-50}}>
						<button type="button" className={styles.white_btn}>
							Sign In
						</button>
					</Link>
					</form>
				</div>
			</div>
		</div>
            </div>
          
        </div>
      </header>
    </div>
  );
}

export default Register;
