import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router} from 'react-router-dom' 
import { makeServer } from "./server";
import {FilterContextProvider} from './context/filter-context'

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <FilterContextProvider>
      <App />
    </FilterContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
