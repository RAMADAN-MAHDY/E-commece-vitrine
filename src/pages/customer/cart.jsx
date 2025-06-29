import React from "react";
import useCartStore from "../../store/cartStore";

export default function Cart() {
  const cartItems = useCartStore(state => state.cartItems);
  const increaseItem = useCartStore(state => state.increaseItem);
  const decreaseItem = useCartStore(state => state.decreaseItem);
  const deletItem = useCartStore(state => state.deletItem); 

  return (
    <div className="p-6 m-10">
      <h2 className="text-2xl font-bold mb-6">your products</h2>

      {cartItems.length === 0 ? (
        <p>no products</p>
      ) : (
        cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center mb-4 p-4 border rounded shadow"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 object-cover rounded"
            />
            <div className="flex-1 mr-4">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-700">السعر: {item.price} جنيه</p>
              <p className="text-red-600">{item.offer}</p>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => decreaseItem(item.id)}
                className="bg-gray-200 px-2 rounded"
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => increaseItem(item.id)}
                className="bg-gray-200 px-2 rounded"
              >
                +
              </button>
            </div>
            <button
              onClick={() => deletItem(item.id)}
              className="ml-4 bg-red-600 text-white px-3 py-1 rounded"
            >
              delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}
