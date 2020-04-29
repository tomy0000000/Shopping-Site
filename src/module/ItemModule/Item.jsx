import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "./Item.css";
import { addToCart, addToFavorite, newMessage } from "../action";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  isThisNew = (sessionName, existItems, newItem) => {
    let { dispatch } = this.props;
    if (!existItems.includes(newItem)) {
      dispatch(newMessage(`${newItem} has added to the ${sessionName}`));
      return true;
    } else {
      dispatch(newMessage(`${newItem} is already in the ${sessionName}`));
      return false;
    }
  };

  renderButtons() {
    let { dispatch, appState } = this.props;
    return (
      <>
        <Button
          key={this.props.name + "CartBut"}
          variant="primary"
          className="m-1"
          onClick={() => {
            if (this.isThisNew("cart", appState.cart, this.props.name)) {
              dispatch(addToCart(this.props.name));
            }
          }}
        >
          <FontAwesomeIcon icon={fas.faShoppingCart} />
          <span className="p-1 d-inline-block">Add to Cart</span>
        </Button>
        <Button
          key={this.props.name + "FavBut"}
          variant="secondary"
          className="m-1 pink-button"
          onClick={() => {
            if (this.isThisNew("favorite", appState.favs, this.props.name)) {
              dispatch(addToFavorite(this.props.name));
            }
          }}
        >
          <FontAwesomeIcon icon={fas.faHeart} />
          <span className="p-1 d-inline-block">Add to Favorite</span>
        </Button>
      </>
    );
  }

  render() {
    const withButtons =
      this.props.withButtons === undefined ? true : this.props.withButtons;
    return (
      <Col md={4} className="p-3">
        <Card>
          <Card.Img
            variant="top"
            src="https://dummyimage.com/600x400/858e96/dee2e6&text=Product"
          />
          <Card.Body>
            <Card.Title>{this.props.name || "Untitled Product"}</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              placerat tortor non diam rutrum auctor. Praesent ut ante vitae
              magna euismod tincidunt. Nullam quis blandit ante. Nunc dui eros,
              tristique sed finibus ut, semper sed ipsum. Praesent non massa et
              nibh aliquam dictum non eget ex. Sed finibus ipsum posuere
              accumsan pretium.
            </Card.Text>
            {withButtons ? this.renderButtons() : null}
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </Col>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    appState: state,
  };
};

export default compose(connect(mapStateToProps))(Item);
