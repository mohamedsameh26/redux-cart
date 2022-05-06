import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";

// redux stuff
// Store - stores data, think of state
// reducer - function that used to update store
// state - old state/state before update
// action - whate happened / what update
// return updated or old state

import {createStore} from 'redux';
import reducer from "./reducer";
import {Provider} from 'react-redux';
// initial store




// store
const store = createStore(reducer);

function App() {
  // cart setup 

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
