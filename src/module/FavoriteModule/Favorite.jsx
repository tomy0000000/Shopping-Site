import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import Row from "react-bootstrap/Row";
import Item from "../ItemModule/Item";
import "./Favorite.css";

class Favorite extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let { appState } = this.props;
    return (
      <Row>
        {appState.favs.map((item) => (
          <Item key={item} name={item} withButtons={false} />
        ))}
      </Row>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    appState: state,
  };
};

export default compose(connect(mapStateToProps))(Favorite);
