import React, {Component} from 'react';
import ReactDOM from 'react-dom';
const faker = require('faker');
import axios from 'axios';
import List from './List';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() {
    try {
      const data = await axios.get('/api/categories');
      this.setState({
        categories: data.data,
      });
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Create Category</button>
        <ul>
          <List categories={this.state.categories} />
        </ul>
      </div>
    );
  }

  handleClick() {
    const cat = faker.commerce.department();
    axios.post('/api/categories', {name: cat});
    axios.get('/api/categories').then(newData => {
      this.setState({
        categories: newData.data,
      });
    });
  }
}

ReactDOM.render(<Main />, document.querySelector('#app'));
