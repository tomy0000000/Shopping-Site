import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import Buy from "./module/BuyModule/Buy.jsx";
import Cart from "./module/CartModule/Cart.jsx";
import Favorite from "./module/FavoriteModule/Favorite.jsx";
import Footer from "./module/FooterModule/Footer.jsx";
import MsgBox from "./module/MsgBoxModule/MsgBox.jsx";
import NavBar from "./module/NavBarModule/NavBar.jsx";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "",
      cart: [],
      favs: [],
      msgs: [],
    };
  }

  render() {
    let { appState } = this.props;
    const page = appState.page || "Buy";
    let content;
    const generateKey = (pre) => {
      return `${pre}_${Date.now()}`;
    };

    switch (page) {
      default:
      case "Buy":
        content = <Buy />;
        break;
      case "Cart":
        content = <Cart />;
        break;
      case "Favorite":
        content = <Favorite />;
        break;
    }

    return (
      <div className="App d-flex flex-column h-100">
        <NavBar />
        <Container as="main" id="content">
          {content}
        </Container>
        <Footer />
        <div id="messages" className="fixed-bottom float-right">
          {appState.msgs.map((message, index) => (
            <MsgBox key={generateKey(index)} message={message} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    appState: state,
  };
};

export default compose(connect(mapStateToProps))(App);
