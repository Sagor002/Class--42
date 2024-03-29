import { createContext, useReducer } = from("react")

const CakeContext =createContext();

const cakeReducer = (state, action) => {
  switch (action.type) {
    case "BUY_CAKE":
      return { ...state, stock: state.stock-action.payload };
    case "RESTOCK_CAKE":
      return { ...state, stock: state.stock + action.payload };
    default:
      return state;
  }
};
const initialState = {
  stock: 10,
};

export const CakeProvider = ({ children }) => {
  const [state, dispatch ] = useReducer( cakeReducer, initialState)

  return {
    <CakeContext.provider value={{ state, dispatch}}>children</CakeContext.provider>
  };
};
