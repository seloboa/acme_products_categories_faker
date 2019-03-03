import React, {Component} from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';

function List(props) {
  if (props.isCat) {
    return props.categories.map(category => (
      <li key={category.id}>
        {category.name}
        <button id={category.id}>+</button>
        <button
          id={category.id}
          onClick={e => {
            props.handleDelete(e, props.isCat);
          }}
        >
          -
        </button>
      </li>
    ));
  } else {
    return props.products.map(product => (
      <li key={product.id}>
        {product.name}
        <button
          id={product.id}
          onClick={e => {
            props.handleDelete(e, props.isCat);
          }}
        >
          -
        </button>
      </li>
    ));
  }
}

export default List;
