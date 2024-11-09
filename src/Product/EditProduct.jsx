import React from "react";

 

function EditProduct({current,lists,setList}) {
    function handleInput(event)    {
        debugger;
        const name=event.target;
        const value=name.value;
        const newlist=lists.map((li)=>(
            li.id===current.id?{...li,name:value} :li
        ))
        setList(newlist);
    }
    function handleInputprice(event)    {
        debugger;
        const price=event.target;
        const value=price.value;
        const newlist=lists.map((li)=>(
            li.id===current.id?{...li,price:value} :li
        ))
        setList(newlist);
    }
  return (
     
     <React.Fragment>
      <td>
        {current.id}
      </td>
      <td>
        <input type="text" onChange={handleInput} name="name" placeholder="Enter name" value={current.name}/>
      </td>
      <td>       
        <input type="text" onChange={handleInputprice}  name="price" placeholder="Enter price" value={current.price} />
      </td>
      <td>       
        <button type="submit">Save</button>
      </td>
      </React.Fragment>
     
  );
}
export default EditProduct;
