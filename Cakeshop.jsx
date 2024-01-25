import { useContext } from "react";
import { CakeContext} from "./CakeContext";

const cakeShop = ( ) => {
  const { state, dispatch } = useContext(CakeContext);

const handlePurchase = (quantity) => {

  
  if (state.stock === 0){
    return alert("Cake unavailable!");
  }
  dispatch( { type: "BUY_CAKE", payload: quantity });
};

  return ( 
    <div>
      <p>Welcome to our Cake Shop!</p>
      <p>Available cakes: {state.stock}</p>
      <button onClick={( )=> handlePurchase(1)}>Buy 1 Cake</button>
      <button onClick={( )=> handlePurchase(5)}>Buy 5 Cake</button>
    </div>
  );
};

export default CakeShop;