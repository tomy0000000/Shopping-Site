import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <footer className="main mt-auto py-3 text-muted text-center">
        <span className="d-inline-block">Copyright © 2020 Tomy Hsieh.</span>
        <span className="d-inline-block">All rights reserved.</span>
      </footer>
    );
  }
}

export default Footer;
