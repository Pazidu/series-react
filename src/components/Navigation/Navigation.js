import React from 'react'
import './Navigation.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


export default function Navigation(props) {
  return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid className='navigationBar'>
                <Navbar.Brand href="#"><img src='./images/logo.png' className='logoImage'/></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link as={Link} to='/'><span className="title">Home</span></Nav.Link>
                    <Nav.Link as={Link} to='/About'><span className="title">About</span></Nav.Link>
                    <Nav.Link as={Link} to='/ContactUs'><span className="title">Contact Us</span></Nav.Link>
                    <NavDropdown title="Menu" id="navbarScrollingDropdown">
                    <NavDropdown.Item as={Link} to='/Tvseries'>TV series</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to='/Films'>Films</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} to='/AwardsEvents'>Awards & Events</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to='/Watch'>Watch</NavDropdown.Item>
                    </NavDropdown>
                    
                    <Nav.Link as={Link} to={props.path}>
                        <span className="signTitle">
                            <img src={props.profilePic} className='profilePic'/>
                            {props.title}
                        </span>
                    </Nav.Link>
                </Nav>
              
                <Form className="d-flex">
                    <Form.Control
                    type="search"
                    placeholder="Search"
                    className="searchBar"
                    aria-label="Search"
                    />
                    <Button variant="outline-success" className='searchButton'>Search</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}
