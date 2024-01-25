import { useContext } from "react";
import { CakeContext } from "./CakeContext"

const CakeAdmin = ( ) => {
 const { state, dispatch} =  useContext(CakeContext)
 const handleRestock = (quantity) => {
  if (state.stock == 10) {
    return alert("Stock full");
  }else if (state.stock < 10 ){
    const updateQuantity = quantity - state.stock;
    dispatch({type: "RESTOCK_CAKE", payload: updateQuantity });
  }
 };
  return (
  <div>
    <h1>Welcome to cake Shop Admin!</h1>
    <p>Stock: {state.stock}</p>
    <buttob onClick= {()=>handleRestock(10)}>Restock 10 Cakes</buttob>
  </div>
  );
};

export default CakeAdmin;