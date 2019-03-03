import React, {Component} from 'react';
import ReactDOM from 'react-dom';
const faker = require('faker');
import axios from 'axios';
import CategoryList from './Category';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
    this.handleCreate = this.handleCreate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
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
        <button onClick={this.handleCreate}>Create Category</button>
        <ul>
          <CategoryList
            categories={this.state.categories}
            handleDelete={this.handleDelete}
          />
        </ul>
      </div>
    );
  }

  handleDelete(e) {
    axios.delete(`/api/categories/${e.target.id}`);
    axios.get('/api/categories').then(newData => {
      this.setState({
        categories: newData.data,
      });
    });
  }

  handleCreate() {
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
