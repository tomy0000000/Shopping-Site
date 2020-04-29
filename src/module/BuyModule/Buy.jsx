import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Item from "../ItemModule/Item";
import "./Buy.css";

class Buy extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let items = [];
    for (let i = 1; i <= 5; i++) {
      items.push(`Laptop#${i}`);
      items.push(`Television#${i}`);
      items.push(`Mouse#${i}`);
      items.push(`Keyboard#${i}`);
    }

    return (
      <Row>
        {items.map((item) => (
          <Item
            key={item}
            name={item}
            withButtons={true}
            addItemToCart={this.props.addItemToCart}
            addItemToFavorite={this.props.addItemToFavorite}
          />
        ))}
      </Row>
    );
  }
}

export default Buy;
