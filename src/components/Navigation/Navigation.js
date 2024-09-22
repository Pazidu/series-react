import React from "react";
import "./Navigation.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

export default function Navigation(props) {
  function main() {
    const word = document.getElementById("searchBar").value;

    fetch("https://imdb8.p.rapidapi.com/auto-complete?q=" + word, {
      method: "GET",
      headers: {
        "x-rapidapi-key": "7ac1d3b363msha61d4fc6d7d73c1p1b4b39jsn385fc0b67a2b",
        "x-rapidapi-host": "imdb8.p.rapidapi.com",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const list = data.d;
        list.map((item) => {
          const name = item.l;
          const poster = item.i.imageUrl;
          const movie = `<li>
                              <img src="${poster}">
                              <h2>${name}</h2>
                          </li>`;
          document.querySelector(".movies").innerHTML += movie;
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid className="navigationBar">
          <Navbar.Brand href="#">
            <img src="./images/logo.png" className="logoImage" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/">
                <span className="title">Home</span>
              </Nav.Link>
              <Nav.Link as={Link} to="/About">
                <span className="title">About</span>
              </Nav.Link>
              {/* <Nav.Link as={Link} to="/ContactUs">
                <span className="title">Contact Us</span>
              </Nav.Link> */}
              <NavDropdown title="Menu" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to="/Tvseries">
                  TV series
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Films">
                  Films
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/AwardsEvents">
                  Awards & Events
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Watch">
                  Watch
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link as={Link} to={props.path}>
                <span className="signTitle">
                  <img src={props.profilePic} className="profilePic" />
                  {props.title}
                </span>
              </Nav.Link>
            </Nav>

            <Form className="d-flex">
              <Link to="/Result">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="searchBar"
                  id="searchBar"
                  aria-label="Search"
                />
              </Link>

              <Button variant="outline-success" className="searchButton" onClick={main}>
                Search
              </Button>

            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
