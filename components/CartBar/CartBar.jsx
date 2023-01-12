import React from 'react';

const CartBar = ({ cart }) => {
    
    return (
      <section>
        <div className="cart-container bg-gradient-to-br from-green-400 to-blue-500 rounded-lg sm:h-screen sm:sticky pb-5 top-0 min-w-[300px]  sm:w-1/4 ">
          <h2 className="text-center text-2xl font-semibold text-white">
            This is cart
          </h2>
          <h2 className="text-white text-xl ml-3"> Subtotal: {total} </h2>
          {cart.length > 0 ? (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-1 border m-1"
              >
                <img
                  className="w-[100px] p-1 mr-2"
                  src={item.thumbnail}
                  alt="/"
                />
                <div className="flex flex-col">
                  {" "}
                  <h2 className="text-white text-lg">{item.title}</h2>
                  <p className="text-xl text-white">{item.price}$</p>{" "}
                </div>
                <div className="flex">
                  <p
                    className="cursor-pointer text-lg text-black bg-white px-1 rounded-md text-center ml-4"
                    onClick={() => changeQty(item.id, item.qty - 1)}
                  >
                    {" "}
                    -
                  </p>
                  <p className="text-lg text-black bg-white px-3 rounded-md text-center ml-1">
                    {" "}
                    {item.qty}
                  </p>
                  <p
                    className="cursor-pointer text-lg text-black bg-white px-1 rounded-md text-center ml-1"
                    onClick={() => changeQty(item.id, item.qty + 1)}
                  >
                    {" "}
                    +
                  </p>
                </div>
                <div className="flex">
                  <p
                    className="text-lg text-white bg-red-400 px-3 rounded-md text-center ml-1"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: { id: item.id },
                      })
                    }
                  >
                    {" "}
                    X
                  </p>
                </div>
              </div>
            ))
          ) : (
            <h2 className="text-white text-xl ml-3">cart is empty</h2>
          )}
        </div>
      </section>
    );
};

export default CartBar;