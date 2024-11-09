import { useRef,useState } from "react";

function AddProduct({ setlist,lists }) {
  const nameRef = useRef();
  const priceRef = useRef();
  function handleSubmit(event) {
    debugger;
    event.preventDefault();
    const name = event.target.elements.name.value;
    const price = event.target.elements.price.value;
    const newlist = {
      id: lists.length + 1,
      name: name,
      price: price,
    };
    setlist((prevlist) => {
      return prevlist.concat(newlist);
    });
    nameRef.current.value = "";
    priceRef.current.value = "";
  }
  return (
    <div>
      <form className="form-container" onSubmit={handleSubmit}>
        <h3>Add Products</h3>
        <div className=".container">
          <input type="text" name="name" placeholder="Enter name"  ref={nameRef}/>
          <input type="text" name="price" placeholder="Enter price" ref={priceRef}/>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
}
export default AddProduct;
