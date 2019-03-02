import React, {Component} from 'react';
import ReactDOM from 'react-dom';
const faker = require('faker');

class Main extends Component {
  constructor() {
    super();
    this.state = {
      category: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Create Category</button>
        <ul>
        </ul>
      </div>
    );
  }

  handleClick() {
    const cat = faker.commerce.department();
    this.state.category.push(cat);
  }
}

ReactDOM.render(<Main />, document.querySelector('#app'));
