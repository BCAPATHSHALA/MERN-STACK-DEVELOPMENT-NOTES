import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadProducts } from "../../redux/slices/productSlice";
import SingleProduct from "../singleProduct/SingleProduct";
import "./ProductList.css";

function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer.products);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await fetch("https://api.escuelajs.co/api/v1/products");
    const jsonData = await response.json();
    dispatch(loadProducts(jsonData));
  }

  return (
    <div className="productList">
      {products.map((item) => (
        <SingleProduct product={item} key={item.id} />
      ))}
    </div>
  );
}

export default ProductList;
