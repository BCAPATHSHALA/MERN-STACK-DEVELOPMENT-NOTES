import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTocart, removeFromCart } from "../../redux/slices/cartSlice";
import "./SingleProduct.css";

function SingleProduct({ product }) {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cartReducer.cart);
  const curItem = cart.find((item) => item.id === product.id);
  const curQuantity = curItem ? curItem.quantity : 0;
  // console.log(cart);

  return ( 
    <div className="singleProduct">
      <img className="productImg" src={product.images[0]} alt={product.title} />
      <div className="productInfo">
        <h2 className="productTitle">{product.title}</h2>
        <p className="product-price">${product.price}</p>
      </div>
      <div className="cartInfo">
        <button
          className="button"
          onClick={() => dispatch(removeFromCart(product))}
        >
          ➖
        </button>
        <h4>{curQuantity}</h4>
        <button className="button" onClick={() => dispatch(addTocart(product))}>
          ➕
        </button>
      </div>
    </div>
  );
}

export default SingleProduct;
