import React, {Component} from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';

function List(props) {
  if (props.isCat) {
    return (
      <li key={props.data.id} className="list-group-item">
        {props.data.name}
          <button
            id={props.data.id}
            onClick={e => {
              props.handleCreate(e, false);
            }}
            className={'btn btn-primary'}
          >
            +
          </button>
          <button
            id={props.data.id}
            onClick={e => {
              props.handleDelete(e, props.isCat);
            }}
            className={'btn btn-danger'}
          >
            -
          </button>
      </li>
    );
  } else {
    return props.data.map(product => (
      <li key={product.id} className="list-group-item">
        {product.name}
          <button
            id={product.id}
            onClick={e => {
              props.handleDelete(e, props.isCat);
            }}
            className={'btn btn-danger'}
          >
            -
          </button>
      </li>
    ));
  }
}

export default List;
