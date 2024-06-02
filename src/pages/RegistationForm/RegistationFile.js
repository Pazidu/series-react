import React from "react";
import "./RegistationFile.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Navigation from "../../components/Navigation/Navigation";
import { Link } from 'react-router-dom';

export default function RegistationFile() {
  return (
      

    <div className="bg">

      <Navigation 
        title='Login'
        profilePic='./images/profile.webp'
        path='#'/>

      <div className="registationHeader">
        Join with US
      </div>
      <div className="RegistationFileContainer">
        <Form className="insideFormContainer">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Full name</Form.Label>
            <Form.Control type="name" placeholder="Your name" required/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Your email" required/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="phone" placeholder="Your phone number" required/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Country</Form.Label>
            <Form.Control type="name" placeholder="Your country" required/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Birthday</Form.Label>
            <Form.Control type="date" required/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required/>
          </Form.Group>

          
          
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Agree to terms and conditions" required/>
          </Form.Group>
          <Link to='./Login'>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Link>
        </Form>
      </div>
    </div>
  );
}
