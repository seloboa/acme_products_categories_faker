import React from 'react';
import List from './List';

function App(props) {
  return props.data.map(cat => {
    if (cat.products.length > 0) {
      return (
        <div>
          <List
            data={cat}
            handleCreate={props.handleCreate}
            handleDelete={props.handleDelete}
            isCat={true}
          />
          <ul>
            <List
              data={cat.products}
              handleCreate={props.handleCreate}
              handleDelete={props.handleDelete}
              isCat={false}
            />
          </ul>
        </div>
      );
    } else {
      return (
        <List
          data={cat}
          handleCreate={props.handleCreate}
          handleDelete={props.handleDelete}
          isCat={true}
        />
      );
    }
  });
}

export default App;
