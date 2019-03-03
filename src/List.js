import React, {Component} from 'react';
import ReactDom from 'react-dom';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
    };
  }
  render() {
    return this.props.categories.map(category => <li>{category.name}</li>);
  }
}

export default List;
