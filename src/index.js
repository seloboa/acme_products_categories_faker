import React, {Component} from 'react';
import ReactDOM from 'react-dom';
const faker = require('faker');
import axios from 'axios';
import List from './Category';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      product: [],
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
        <button onClick={() => this.handleCreate(true)}>Create Category</button>
        <ul>
          <List
            categories={this.state.categories}
            products = {this.state.products}
            handleDelete={this.handleDelete}
            handleCreate={this.handleCreate}
            isCat={true}
          />
        </ul>
      </div>
    );
  }

  handleDelete(e, isCat) {
    if (isCat) {
      axios
        .delete(`/api/categories/${e.target.id}`)
        .catch(err => console.log(err));
      axios
        .get('/api/categories')
        .then(newData => {
          this.setState({
            categories: newData.data,
          });
        })
        .catch(err => console.log(err));
    } else {
    }
  }

  handleCreate(isCat) {
    if (isCat) {
      const cat = faker.commerce.department();
      axios.post('/api/categories', {name: cat}).catch(err => console.log(err));
      axios
        .get('/api/categories')
        .then(newData => {
          this.setState({
            categories: newData.data,
          });
        })
        .catch(err => console.log(err));
    } else {
    }
  }
}

ReactDOM.render(<Main />, document.querySelector('#app'));
