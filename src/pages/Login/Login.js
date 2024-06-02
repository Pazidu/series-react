import React from "react";
import "./Login.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Navigation from "../../components/Navigation/Navigation";
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="bg">

      <Navigation 
        title='Login'
        profilePic='./images/profile.webp'
        path='#'/>

      <div className="LoginFormContainer">
        <div className="registationHeader">
            Login
        </div>
        <div className="RegistationFileContainer">
            <Form className="insideFormContainer">
            <Form.Group controlId="formBasicEmail">
                <Form.Label>UserName</Form.Label>
                <Form.Control type="UserName" placeholder="username or phone" required/>
            </Form.Group>
            <br/>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" required/>
            </Form.Group>
            <span className="forgotPasswordText">Forgot password?</span>
            <br/>
            <Link to='/PersonalViewHome'>
                <Button type="submit" className="loginButton">
                    Login
                </Button>
            </Link>
            <hr className="loginHr"/>
            <span className="haventAccountYetTest">
              Haven't Account Yet?
            </span>
            <br/>
            <Link to='/RegistationFile'>
                <Button type="submit" className="createNewAccountButton">
                    Create new Account
                </Button>
            </Link>
            </Form>
        </div>
      </div>
    </div>
  );
}
