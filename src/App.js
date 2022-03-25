import "./App.css";
import { Route, Routes } from "react-router-dom";
import {Home, Header, Footer, Productlist, Cart} from "./components/import.js"

function App() {
  return (
    <div className="App">
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/productlist/:type" element={<Productlist/>}/>
      <Route path="/cart" element={<Cart/>}/>

    </Routes>
    <Footer/>
    </div>
  );
}
export default App;
