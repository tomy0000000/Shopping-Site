import React, { Component } from "react";
import Media from "react-bootstrap/Media";
import "./CartItem.css";

class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Media as="li" className="my-3">
        <img
          width={128}
          height={128}
          className="mr-3"
          src="https://dummyimage.com/128x128/858e96/dee2e6&text=Product"
          alt="Cart Item"
        />
        <Media.Body>
          <h5>{this.props.name || "Untitled Product"}</h5>
          <p>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
            in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
            nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </p>
        </Media.Body>
      </Media>
    );
  }
}

export default CartItem;
