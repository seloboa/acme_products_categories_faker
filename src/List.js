import React, {Component} from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
  }
  render() {
    return this.props.categories.map(category => (
      <li key={category.id}>
        {category.name}
        <button id={category.id} onClick={this.handleCreate}>
          +
        </button>
        <button id={category.id} onClick={this.handleDelete}>
          -
        </button>
      </li>
    ));
  }
  handleDelete(e) {
    axios.delete('/api/categories', {
      id: e.target.id,
    });
  }
  handleCreate() {
    // const cat = faker.commerce.productName();
    // axios.post('/api/product', {name: cat});
    // axios.get('/api/product').then(newData => {
    //   this.setState({
    //     categories: newData.data,
    //   });
    // });
  }
}

export default List;
