import React from "react";
import { Route, Routes } from "react-router-dom";
import CartPage from "./e-commerce/cartPage/CartPage";
import Navigation from "./e-commerce/cartPage/Navigation";
import NavBar from "./e-commerce/navbar/NavBar";
import ProductList from "./e-commerce/productList/ProductList";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Navigation />
      <Routes>
        <Route path="/cartPage" element={<CartPage />} />
        <Route path="/productList" element={<ProductList />} />
      </Routes>
    </div>
  );
}

export default App;
