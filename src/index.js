import React, {Component} from 'react';
import ReactDOM from 'react-dom';
const faker = require('faker');

class Main extends Component {
  constructor() {
    super();
    this.state = {
      Category: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <div>
        <p>hi</p>
        <button onclick={this.handleClick}>Create Category</button>
      </div>
    );
  }

  handleClick() {
    console.log('hey');
  }
}

ReactDOM.render(<Main />, document.querySelector('#app'));
