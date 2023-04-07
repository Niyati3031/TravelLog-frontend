import logo from '../../images/edited.png';
import car from '../../images/car.png';
import './login.css';
import React, { useState } from "react";
import {Link, useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Typography } from "@mui/material";
import { sentLoginRequest } from '../../apihelpers/helpers';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store';
import styles from './styles.module.css';
import axios from "axios";
import girl from '../../images/girl.png';

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
// const handleChange = (e) => {
//   setInputs((prevState) => ({
//     ...prevState,
//     [e.target.name]: e.target.value,
//   }));
// };

// const handleSubmit = (e) => {
//   e.preventDefault();
//   console.log(inputs)

//   sentLoginRequest(inputs)
//   .then(onResReceived)
//   .catch((err) => {
//     console.log(err);
//     alert("Either Password or Username wrong, Please enter again");
//   });
// };

// const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const onResReceived = (data) => {
//     localStorage.setItem("userId",data.id);
// 	localStorage.setItem("token", data.data);
//     dispatch(authActions.login());
//     navigate("/profile");
//   }

	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {

			const url = "https://travel-mania-api.onrender.com/users/login";
			const { data: res } = await axios.post(url, data);
			console.log(res);
			localStorage.setItem("userId",res.id);
			localStorage.setItem("token", res.data);
			dispatch(authActions.login());
    		navigate("/profile");
			window.location = "/";
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
        <div className="front">
          <div className='left'></div>

          <div className='center'>
		  <div className={styles.login_container}>
		  <div className={styles.login_form_container}>
		  <div className={styles.left_l}>
              <form className={styles.form_container} onSubmit={handleSubmit}>

		  <h1>Login to Your Account</h1>
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
							Sign In
						</button>

						<h1 style={{fontSize:'medium'}}>New Here ?</h1>
					<Link to="/register" style={{marginTop:-50}}>
						<button type="button" className={styles.white_btn}>
							Sign Up
						</button>
					</Link>
 
              </form>
			  </div>
			  <div className={styles.right_r}>
					<img src={girl}></img>
				</div>
			  </div>
			  </div>
           {/* <form className={styles.form_container} onSubmit={handleSubmit}>
 						<h1>Login to Your Account</h1>
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
							Sign In
						</button>
						<h6>New Here ?</h6>
					<Link to="/signup">
						<button type="button" className={styles.green_btn}>
							Sign Up
						</button>
					</Link>
					</form> */}
		  {/* <div className={styles.login_container}>
 			<div className={styles.login_form_container}>
 				<div className={styles.left_l}>
 					<form className={styles.form_container} onSubmit={handleSubmit}>
 						<h1>Login to Your Account</h1>
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
							Sign In
						</button>
						<h6>New Here ?</h6>
					<Link to="/signup">
						<button type="button" className={styles.green_btn}>
							Sign Up
						</button>
					</Link>
					</form>
				</div>
				<div className={styles.right_r}>
					<img src={girl}></img>
				</div>
			</div> */}
		{/* </div> */}

            
            
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

// import { useState } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import girl from '../../images/girl.png';
// import styles from './styles.module.css';
//  import { useDispatch } from 'react-redux';
//  import { authActions } from '../../store';
// import { sentLoginRequest } from "../../apihelpers/helpers";

// const Login = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const onResReceived = (data) => {
//     localStorage.setItem("userId",data.id);
// 	localStorage.setItem("token", data.data);
//     dispatch(authActions.login());
//     navigate("/profile");
//   }

// 	const [data, setData] = useState({ email: "", password: "" });
// 	const [error, setError] = useState("");

// 	const handleChange = ({ currentTarget: input }) => {
// 		setData({ ...data, [input.name]: input.value });
// 	};

// 	const handleSubmit = async (e) => {
// 		e.preventDefault();
// 		try {

// 			const url = "http://localhost:5050/users/login";
// 			const { data: res } = await axios.post(url, data);
// 			console.log(res);
// 			localStorage.setItem("userId",res.id);
// 			localStorage.setItem("token", res.data);
// 			dispatch(authActions.login());
//     		navigate("/profile");
// 			window.location = "/";
// 		} catch (error) {
// 			if (
// 				error.response &&
// 				error.response.status >= 400 &&
// 				error.response.status <= 500
// 			) {
// 				setError(error.response.data.message);
// 			}
// 		}
// 	};

// 	return (
// 		<div className={styles.login_container}>
// 			<div className={styles.login_form_container}>
// 				<div className={styles.left_l}>
// 					<form className={styles.form_container} onSubmit={handleSubmit}>
// 						<h1>Login to Your Account</h1>
// 						<input
// 							type="email"
// 							placeholder="Email"
// 							name="email"
// 							onChange={handleChange}
// 							value={data.email}
// 							required
// 							className={styles.input}
// 						/>
// 						<input
// 							type="password"
// 							placeholder="Password"
// 							name="password"
// 							onChange={handleChange}
// 							value={data.password}
// 							required
// 							className={styles.input}
// 						/>
// 						{error && <div className={styles.error_msg}>{error}</div>}
// 						<button type="submit" className={styles.green_btn}>
// 							Sign In
// 						</button>
// 						<h6>New Here ?</h6>
// 					<Link to="/signup">
// 						<button type="button" className={styles.green_btn}>
// 							Sign Up
// 						</button>
// 					</Link>
// 					</form>
// 				</div>
// 				<div className={styles.right_r}>
// 					{/* <h1>New Here ?</h1>
// 					<Link to="/signup">
// 						<button type="button" className={styles.white_btn}>
// 							Sign Up
// 						</button>
// 					</Link> */}
// 					<img src={girl}></img>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Login;