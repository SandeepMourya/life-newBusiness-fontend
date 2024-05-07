import "bootstrap/dist/css/bootstrap.min.css"
import "./Login.css";
import checkEmpty from "../../utlis/utils";
import config from "../../utlis/config";

import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Form, Button, Spinner } from "react-bootstrap";

const Login = () => {

    const history = useNavigate();
    const [loginErrorMsg, setloginErrorMsg] = useState(() => "");
    const [userIDError, setuserIDError] = useState(() => "");
    const [passwordError, setPasswordError] = useState(() => "");

    const formValidation = (e) => {
        
        e.preventDefault();
        setloginErrorMsg("");
        setuserIDError("");
        setPasswordError("");
      
        const isUserValid = checkEmpty(e.target["userID"]);
        if(!isUserValid.status) setuserIDError(isUserValid.message);

        const isPasswordValid = checkEmpty(e.target["password"]);
        if(!isPasswordValid.status) setPasswordError(isPasswordValid.message);

        const reqBody = {
          "userId": e.target["userID"].value,
          "password": e.target["password"].value
        };
     
        if (isUserValid.status && isPasswordValid.status) {
            fetch(`${config.apiUrl}/user/login`, {
                method: "POST",
                body: JSON.stringify(reqBody),
                headers: {
                "Content-Type": "application/json"
                }
            })
            .then(res => res.json())
            .then(data => {
                if (data.message !== "LoggedIn Successfully.") {
                    setloginErrorMsg("Incorrect Username or Password");
                } else {
                    window.localStorage.setItem("access_token", data.token);
                    // window.localStorage.setItem("user_type", data.data.role);
                    history('/applicationForm');
                }
            })
            .catch(err => {
                console.error(err);
            });
        }
    }
    
    const userLogin = (e) => {
        formValidation(e);
    }

    return (
    <div className='container'>
        <div className='row d-flex justify-content-center'>
            <div className='col-md-4'>
            <Form id="user-login-form" className='login-form' onSubmit={userLogin}>
                <h3 className='form-title'>Login</h3>
                <Form.Group>
                    <Form.Control type="text" name="userID" id='userID' placeholder="Enter your user ID" />
                    <small className="text-danger">
                    {userIDError}
                    </small>
                </Form.Group>
                <br/>
                <Form.Group>
                    <Form.Control type="password" name="password" id="password" placeholder="Enter Password" />
                    <small className="text-danger">
                    {passwordError}
                    </small>
                    <small className="text-danger">
                    {loginErrorMsg}
                    </small>
                </Form.Group>
                <br/>
                <div className="submit-container">
                    <Button className="submit btn btn-primary" type="submit">Login
                    </Button>
                </div>
                </Form>
            </div>
        </div>
    </div>
    );
}

export default Login;
