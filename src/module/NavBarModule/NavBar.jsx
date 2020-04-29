import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./NavBar.css";
import { pageChange } from "../action";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { dispatch, appState } = this.props;
    return (
      <header>
        <Navbar bg="light" expand="lg" fixed="top">
          <Navbar.Brand>Shopping Site</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link
                active={appState.page === "Buy"}
                onClick={() => {
                  dispatch(pageChange("Buy"));
                }}
              >
                Buy
              </Nav.Link>
              <Nav.Link
                active={appState.page === "Cart"}
                onClick={() => {
                  dispatch(pageChange("Cart"));
                }}
              >
                Cart
              </Nav.Link>
              <Nav.Link
                active={appState.page === "Favorite"}
                onClick={() => {
                  dispatch(pageChange("Favorite"));
                }}
              >
                Favorite
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    appState: state,
  };
};

export default compose(connect(mapStateToProps))(NavBar);
