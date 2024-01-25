// import { Children } from "react";

// const App = () => {
//   return (
//     <div>
//       <p>Hello from the Mars!</p>
//     </div>
//   );
// };

// export default App;

// // functional component
// // default export
// // return type: jsx element
// // ability to receive props
// // can be pass as a Children

// import React from "react";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//   }
//   render() {
//     return <div>hello</div>;
//   }
// }

// export default App;
// import { useState } from "react";

// const App = () => {
//   const [count, setCount] = useState(0);

//   return <div>App</div>;
// };

// export default App;

// import Child from "./Components/child";
// import HOC from "./Components/HOC";

// const App = ( ) => {
//   const authStatus = false;

//   return (
//     <div>
//       <HOC authStatus={authStatus}><Child /></HOC>
//     </div>
//   );
// };

// export default App;
// import { useState } from "react";
// import ComponentOne from "./Components/componentOne";

// const App = ( ) => {
//   const [bananas, setBananas] = useState(10);
//     return <ComponentOne bananas={bananas} />;
// };

// export default App;

// import About from "./Components/About";
// import Contact from "./Components/Contact";

// const App = ( ) => {

//     return <>
//     <About/>
//     <Contact/>
//     </>
// };

// export default App;
import  CakeAdmin from "./Components/CakeAdmin";
import{ CakeProvider } from "./Components/CakeContext";
import CakeShop from "./Components/Cakeshop";

const  App = ( ) => {
    return ( 
        <CakeProvider>
            <div>
                <CakeShop />
                <CakeAdmin />
            </div>
        </CakeProvider>
    );
};

export default App;
