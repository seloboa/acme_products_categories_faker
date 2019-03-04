import React, {Component} from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';

function List(props) {
  if (props.isCat) {
    return (
      <li key={props.data.id}>
        {props.data.name}
        <button
          id={props.data.id}
          onClick={e => {
            props.handleCreate(e, false);
          }}
        >
          +
        </button>
        <button
          id={props.data.id}
          onClick={e => {
            props.handleDelete(e, props.isCat);
          }}
        >
          -
        </button>
      </li>
    );
  } else {
    return props.data.map(product => (
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
