import React, {Component} from 'react';
import ReactDOM from 'react-dom';
const faker = require('faker');
import axios from 'axios';
import List from './List';

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
        <button onClick={() => this.handleCreate(true)}>Create Category</button>
        <ul>
          <List
            data={this.state.data}
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
      this.getData();
    } else {
    }
  }

  handleCreate(isCat) {
    if (isCat) {
      const cat = faker.commerce.department();
      axios.post('/api/categories', {name: cat}).catch(err => console.log(err));
      this.getData();
    } else {
    }
  }

  async getData() {
    try {
      const catData = await axios.get('/api/categories');
      const proData = await axios.get('/api/products');
      const combinedData = catData.data.map(cat => {
        cat.product = proData.data.filter(pro => (pro.categoryId = cat.id));
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
