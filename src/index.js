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
  }

  async componentDidMount() {
    try {
      const Prodata = await axios.get('/api/products');
      console.log(Prodata);
      this.setState({
        data: Prodata.data,
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
      axios
        .get('/api/products')
        .then(newData => {
          this.setState({
            data: newData.data,
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
        .get('/api/products')
        .then(newData => {
          this.setState({
            data: newData.data,
          });
        })
        .catch(err => console.log(err));
    } else {
    }
  }
}

ReactDOM.render(<Main />, document.querySelector('#app'));
