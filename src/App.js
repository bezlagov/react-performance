import React from 'react';
import './App.css';
import List1 from './components/List1/List1';
import List2 from './components/List2/List2';
import faker from '@faker-js/faker';
import { v4 } from 'uuid';

class App extends React.Component {

  state = {
    items: [{
      id: v4(),
      item: faker.name.findName()
    }
    ],
    flag: true,
    value: ""
  }

  constructor(props) {
    super(props);

    for (let index = 0; index < 4000; index++) {
      this.state.items.push({
        id: v4(),
        item: faker.name.findName()
      })
    }
  }

  handleAddItemToStart() {
    const newItem = faker.name.findName();

    this.setState({
      items: [
        {
          item: newItem,
          id: v4()
        },
        ...this.state.items
      ]
    })
  }

  handleAddItemToEnd() {
    const newItem = faker.name.findName();

    this.setState({
      items: [
        ...this.state.items,
        {
          item: newItem,
          id: v4()
        },
      ]
    })
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.setState({ flag: !this.state.flag })}>Change list type</button>
        <button onClick={this.handleAddItemToStart.bind(this)}>Add Start</button>
        <button onClick={this.handleAddItemToEnd.bind(this)}>Add end</button>

        <p><input type='text' value={this.state.value} onChange={this.handleChange.bind(this)} /></p>

        {this.state.flag
          ? <List1 items={this.state.items} />
          : <List2 items={this.state.items} />
        }
      </div>
    );
  }
}

export default App;