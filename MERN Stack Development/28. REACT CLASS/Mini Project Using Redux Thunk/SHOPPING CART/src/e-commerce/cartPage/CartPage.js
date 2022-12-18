import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItemList } from "../../redux/slices/cartSlice";
import "./CartPage.css";

function CartPage() {
  let cart = useSelector((state) => state.cartReducer.cart);
  const dispatch = useDispatch();

  let count = 0;
  let ammount = 0;
  cart.forEach((item) => {
    count += item.quantity;
    ammount += item.price;
  });

  return (
    <div className="cartPage">
      <h2 className="titleH2">Shoping Cart</h2>
      <div className="shoppingCartList">
        {cart.map((cartItem, index) => {
          return (
            <div className="shoppingCart" key={index}>
              <div className="CartImg">
                <img src={cartItem.image} alt="" />
              </div>
              <div className="CartContent">
                <h4>PRODUCT ITEM NUMBER {index + 1}</h4>
                <p className="desc">
                  Description for product item number {index + 1}
                </p>
                <p className="price">${cartItem.price}</p>
              </div>
              <div className="CartQuentity">{cartItem.quantity}</div>
              <div className="button">
                <a
                  href="#"
                  onClick={() => dispatch(deleteItemList(cartItem.id))}
                >
                  ❌
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <div className="CartReciept">
        <div className=" cartAmmount subTotal">
          <p>Subtotal</p>
          <p>${ammount}</p>
        </div>
        <div className=" cartAmmount  tax">
          <p>Tax</p>
          <p>$5</p>
        </div>
        <div className="cartAmmount total">
          <h5>Total</h5>
          <h5>${ammount + 5}</h5>
        </div>
        <div className="CheckOutBTn">Check Out</div>
      </div>
    </div>
  );
}

export default CartPage;
