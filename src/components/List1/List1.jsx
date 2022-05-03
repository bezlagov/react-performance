import React, { Component } from 'react';
import Item from '../Item/Item';

class List1 extends Component {
  shouldComponentUpdate(currProps) {
    return this.props.items.length != currProps.items.length
  }

  render() {
    console.log('render List 1');
    return (
      <ul>
        {this.props.items.map((element) => {
          return <Item key={element.id} value={element.item} />
        })}
      </ul>
    );
  }
}

export default List1;