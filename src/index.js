import React, {Component} from 'react';
import ReactDOM from 'react-dom';
const faker = require('faker');
import axios from 'axios';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      category: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() {
    try {
      const data = await axios.get('/api/categories');
      this.setState({
        category: data,
      });
      console.log(this.state);
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Create Category</button>
      </div>
    );
  }

  handleClick() {
    // const cat = faker.commerce.department();
    // this.state.category.push(cat);
  }
}

ReactDOM.render(<Main />, document.querySelector('#app'));
