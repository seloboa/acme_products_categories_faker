import React, {Component} from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';

class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }
  render() {
    return this.props.categories.map(category => (
      <li key={category.id}>
        {category.name}
        <button id={category.id} onClick={this.handleCreate}>
          +
        </button>
        <button id={category.id} onClick={this.props.handleDelete}>
          -
        </button>
      </li>
    ));
  }

  handleCreate() {
    const pro = faker.commerce.productName();
    axios.post('/api/:id/product', {name: pro});
    // axios.get('/api/product').then(newData => {
    //   this.setState({
    //     categories: newData.data,
    //   });
    // });
  }
}

export default CategoryList;
