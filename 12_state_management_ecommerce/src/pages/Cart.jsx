import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, incrementQuantity, decrementQuantity } from "../redux/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">🛒 Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="flex justify-between items-center mb-2 border-b pb-2">
            <div>
              <h3 className="font-bold">{item.title}</h3>
              <img src={item.images[0] || item.image} alt={item.name} className="w-16 h-16 object-cover" />
              <p>${item.price} x {item.quantity}</p>
            </div>
            <div className="flex gap-2">
              <button onClick={() => dispatch(decrementQuantity(item.id))} className="px-2 bg-gray-300 rounded">-</button>
              <button onClick={() => dispatch(incrementQuantity(item.id))} className="px-2 bg-gray-300 rounded">+</button>
              <button onClick={() => dispatch(removeFromCart(item.id))} className="px-3 bg-red-600 text-white rounded">Remove</button>
            </div>
          </div>
        ))
      )}
      <h3 className="mt-4 font-bold">Total: ${total}</h3>
    </div>
  );
};

export default Cart;
