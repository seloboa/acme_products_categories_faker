import React, {Component} from 'react';
import ReactDOM from 'react-dom';
const faker = require('faker');
import axios from 'axios';
import List from './List';
import App from './App';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
    this.handleCreate = this.handleCreate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.getData = this.getData.bind(this);
  }

  async componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div>
        <button onClick={e => this.handleCreate(e, true)}>
          Create Category
        </button>
        <ul>
          <App
            data={this.state.data}
            handleDelete={this.handleDelete}
            handleCreate={this.handleCreate}
          />
        </ul>
      </div>
    );
  }

  async handleDelete(e, isCat) {
    if (isCat) {
      await axios
        .delete(`/api/categories/${e.target.id}`)
        .catch(err => console.log(err));
    } else {
    }
    this.getData();
  }

  async handleCreate(e, isCat) {
    if (isCat) {
      const cat = faker.commerce.department();
      await axios
        .post('/api/categories', {name: cat})
        .catch(err => console.log(err));
    } else {
      const product = faker.commerce.productName();
      await axios
        .post('/api/categories/:id/products', {
          name: product,
          categoryId: e.target.id,
        })
        .catch(err => console.log(err));
    }
    this.getData();
  }

  async getData() {
    try {
      const catData = await axios.get('/api/categories');
      const proData = await axios.get('/api/products');
      const combinedData = catData.data.map(cat => {
        cat.products = proData.data.filter(pro => pro.categoryId === cat.id);
        return cat;
      });
      this.setState({
        data: combinedData,
      });
    } catch (err) {
      console.log(err);
    }
  }
}

ReactDOM.render(<Main />, document.querySelector('#app'));
