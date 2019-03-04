import React, {Component} from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';

function List(props) {
  if (props.isCat) {
    return props.data.map(cat => (
      <li key={cat.id}>
        {cat.name}
        <button id={cat.id}>+</button>
        <button
          id={cat.id}
          onClick={e => {
            props.handleDelete(e, props.isCat);
          }}
        >
          -
        </button>
      </li>
    ));
  } else {
    return <p>hey</p>;
    // return props.products.map(product => (
    //   <li key={product.id}>
    //     {product.name}
    //     <button
    //       id={product.id}
    //       onClick={e => {
    //         props.handleDelete(e, props.isCat);
    //       }}
    //     >
    //       -
    //     </button>
    //   </li>
    // ));
  }
}

export default List;
