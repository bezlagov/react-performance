import React, { memo } from 'react';
import Item from '../Item/Item';

class List2 extends React.PureComponent {
  render() {
    console.log('render List 2');
    return (
      <ol>
        {this.props.items.map(element => {
          return <Item key={element.id} value={element.item} />
        })}
      </ol>
    );
  }
}

// Example with memo
//export default memo(List2);
export default List2;