import React, { Component } from 'react';

class Item extends Component {
  render() {
    return (
      <li>
        {this.props.value}
      </li>
    );
  }
}

export default Item;