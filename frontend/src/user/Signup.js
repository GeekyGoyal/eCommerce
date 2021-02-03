import React, { useState } from "react";
import { Link } from "react-router-dom";
import Base from "../core/Base";
import { signup } from "../auth/helper/index";

const Signup = () => {
	//Initial States for the Signup component
	const initialValues = {
		name: "",
		email: "",
		password: "",
		mobno:"",
		address: "",
		error: "",
		success: false,
	};

	//States for Signup component
	const [values, setValues] = useState(initialValues);

	//Destructuring the states of the Signup component
	const { name, email, password, mobno, address, error, success } = values;

	//Sets data in the states according to the input fields
	const handleChange = (inputValue) => (event) => {
		setValues({
			...values,
			error: false,
			success: false,
			[inputValue]: event.target.value,
		});
	};

	//Submits the signup form and gets the response data from the backend
	const formSubmit = (event) => {
		event.preventDefault();
		setValues({ ...values, error: false });
		signup({ name, email, password,mobno, address })
			.then((data) => {
				if (data.error) {
					setValues({ ...values, error: data.error, success: false });
				} else {
					setValues({ ...initialValues, success: true });
				}
			})
			.catch((err) =>
				console.log("Error: Signup request to the server failed!\n", err)
			);
		//This catch runs whenever there is an error at the backend which is not handled
	};

	//Signup success message popup
	const successMessage = () => {
		return (
			<div className="row">
				<div className="col-md-6 offset-sm-3 text-center">
					<div
						className="alert alert-success"
						style={{ display: success ? "" : "none" }}
					>
						New account was created successfully. Please{" "}
						<Link to="/signin">Login here</Link>
					</div>
				</div>
			</div>
		);
	};

	//Signup error message popup
	const errorMessage = () => {
		return (
			<div className="row">
				<div className="col-md-6 offset-sm-3 text-center">
					<div
						className="alert alert-danger"
						style={{ display: error ? "" : "none" }}
					>
						{error}
					</div>
				</div>
			</div>
		);
	};

	//Signup form component
	const signUpForm = () => {
	return (
		<div>
				<div class="main-container" >
				<div className="row text-center mt-3" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
						
						<div class="col-sm-4 ">
							<div class="button-card mt-4">					
								<div class="action-buttons mb-3 mt-2">
									
									<a href="#loginModal2" data-toggle="modal" class="btn btn-theme btn-primary text-white"> Login</a>
									<a href="#registerModal2" data-toggle="modal" class="btn btn-theme btn-success text-white">Register</a>
								
								</div>
								<img src={require('./assets/demo/style-2-demo-dark.jpg')} />
						
					</div>
						</div>
					</div>
				</div>
				
				<div id="loginModal2" class="modal-style-2 dark modal ">
					<div class="modal-dialog modal-login">
						<div class="modal-content">
							<div class="modal-header p-0">				
								<h4 class="modal-title">Login</h4>
								<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
							</div>
							<div class="modal-body">
								
								<form action="" method="" class="mt-3">
									<div class="form-group">
										<div class="input-group">
											<span class="input-group-addon"><i class="fa fa-user"></i></span>
											<input type="text" class="form-control" name="username" placeholder="Enter your username" required="required" />
										</div>
									</div>
									<div class="form-group">
										<div class="input-group">
											<span class="input-group-addon"><i class="fa fa-lock"></i></span>
											<input type="password" class="form-control" name="password" placeholder="Enter password" required="required" autocomplete="on" />
										</div>
									</div>
									<div class="row pl-1 pr-1">
										<div class="col text-left">
											<label class="custom-control custom-checkbox">
												<input type="checkbox" class="custom-control-input" id="item_checkbox" name="item_checkbox" value="option1" />
												<span class="custom-control-label">&nbsp;Remember Me</span>
											</label>
										</div>
										<div class="col text-right hint-text pt-0">
											<a href="" class="text-danger">Forgot Password?</a>
										</div>
									</div>
									<div class="form-group text-center mt-2 mb-0">
										<button type="submit" class="btn btn-primary btn-sm">Login</button>
										
									</div>
									<p class="hint-text mt-0">or login with</p>
									<div class="social-login text-center">
										<a class=" btn-facebook  text-uppercase" href="redirect/facebook"><i class="fab fa-facebook-f mr-2 ml-2"></i> </a>
										<a class=" btn-facebook  text-uppercase" href="redirect/google"><i class="fab fa-google mr-2 ml-2"></i></a>
										<a class=" btn-facebook  text-uppercase" href="redirect/twitter"><i class="fab fa-twitter mr-2 ml-2"></i></a>
									</div>
								</form>
							</div>
							<div class="modal-footer">Don't have an account? <a href="#registerModal2" data-dismiss="modal" data-toggle="modal"> Register</a></div>
						</div>
					</div>
				</div>  
				<div id="registerModal2" class="modal-style-2 dark modal ">
					<div class="modal-dialog modal-login">
						<div class="modal-content">
							<div class="modal-header p-0">				
								<h4 class="modal-title">Register</h4>
								<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
							</div>
							<div class="modal-body">
								<form action="" method="post" class="mt-3">
									<div class="form-group">
										<div class="input-group">
											<span class="input-group-addon"><i class="fa fa-user"></i></span>
											<input type="text" class="form-control" name="name" placeholder="Enter your name" required="required" />
										</div>
									</div>
									<div class="form-group">
										<div class="input-group">
											<span class="input-group-addon"><i class="fa fa-envelope"></i></span>
											<input type="text" class="form-control" name="email" placeholder="Enter email address" required="required" />
										</div>
									</div>
									<div class="form-group">
										<div class="input-group">
											<span class="input-group-addon"><i class="fa fa-lock"></i></span>
											<input type="password" class="form-control" name="password" placeholder="Enter password" required="required" autocomplete="on" />
										</div>
									</div>
									<div class="form-group">
										<div class="input-group">
											<span class="input-group-addon"><i class="fa fa-eye-slash"></i></span>
											<input type="password" class="form-control" name="password_confirmation" placeholder="Retype password" required="required" autocomplete="on" />
										</div>
									</div>

									<div class="form-group text-center">
										<button id="signup-button" type="submit" class="btn btn-primary btn-sm">Register</button>
										
									</div>
								</form>

							</div>
							<p class="hint-text">or register with</p>
							<div class="social-login text-center mb-2">
								<a class=" btn-facebook  text-uppercase" href="redirect/facebook"><i class="fab fa-facebook-f mr-2 ml-2"></i> </a>
								<a class=" btn-facebook  text-uppercase" href="redirect/google"><i class="fab fa-google mr-2 ml-2"></i></a>
								<a class=" btn-facebook  text-uppercase" href="redirect/twitter"><i class="fab fa-twitter mr-2 ml-2"></i></a>
							</div>
							<div class="modal-footer">Already have an account? <a href="#loginModal2" data-dismiss="modal" data-toggle="modal"> Login</a></div>
						</div>
					</div>
				</div> 
		</div>
	);
	}
	return (
		<div>
			<Base title="Signup!" description="We wish you a warm welcome...">
				{successMessage()}
				{errorMessage()}
				{signUpForm()}
			</Base>
		</div>
	);
};

export default Signup;


