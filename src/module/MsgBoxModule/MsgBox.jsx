import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import Toast from "react-bootstrap/Toast";
import "./MsgBox.css";
import { removeMessage } from "../action";

class MsgBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { dispatch } = this.props;
    return (
      <Toast
        className="ml-auto m-3"
        onClose={() => {
          dispatch(removeMessage(this.props.message));
        }}
        delay={3000}
        autohide
      >
        <Toast.Header>
          <strong className="mr-auto">Bootstrap</strong>
          <small>now</small>
        </Toast.Header>
        <Toast.Body>{this.props.message}</Toast.Body>
      </Toast>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    appState: state,
  };
};

export default compose(connect(mapStateToProps))(MsgBox);
