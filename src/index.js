import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router} from 'react-router-dom' 
import { makeServer } from "./server";
import {FilterContextProvider} from './context/filter-context'
import {CartContextProvider} from './context/cart-context'
import {WishListContextProvider} from './context/wishlist-context'

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <FilterContextProvider>
     <CartContextProvider>
     <WishListContextProvider>
        <App />
      </WishListContextProvider>
      </CartContextProvider>
    </FilterContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
