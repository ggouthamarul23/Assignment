import React, { useState } from "react";
import AddProduct from "./addProduct";
import EditProduct from "./EditProduct"; 
// Import the custom CSS file

function Product() {
  const list = [
    { id: 1, name: "HP", price: "2999" },
    { id: 2, name: "DELL", price: "3999" },
  ];
  const [lists, setlist] = useState(list);
  const [updateState, setUpdateState] = useState(-1);

  return (
    <div className="container mt-5">
      <div>
        
        <AddProduct setlist={setlist} lists={lists} />
      </div>
      <h2 className="text-center">Product List</h2>
      <div className="table-responsive">
        <form onSubmit={handleSubmit}>
          <table className="table table-bordered table-striped table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th style={{ textAlign: 'center' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {lists.map((current) =>
                updateState === current.id ? (
                  <EditProduct
                    current={current}
                    lists={lists}
                    setList={setlist}
                    key={current.id}
                  />
                ) : (
                  <tr key={current.id}>
                    <td>{current.id}</td>
                    <td>{current.name}</td>
                    <td>{current.price}</td>
                    <td>
                      <button
                        className="edit"
                        onClick={() => handleEdit(current.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="delete"
                        onClick={() => handleDelete(current.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );

  function handleEdit(id) {
    setUpdateState(id);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const price = event.target.elements.price.value;
    const newlist = lists.map((li) =>
      li.id === updateState ? { ...li, name: name, price: price } : li
    );
    setlist(newlist);
    setUpdateState(-1);
  }

  function handleDelete(id) {
    const newlist = lists.filter((li) => li.id !== id);
    setlist(newlist);
  }
}

export default Product;
