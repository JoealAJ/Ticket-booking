import { useCart } from "./CartContext";

export default function CartPage() {
  const { cart, increaseQty, decreaseQty, removeItem } = useCart();

  if (cart.length === 0) return <p>Your cart is empty.</p>;

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.ticketprice * item.quantity,
    0
  );

  //   return (
  //     <div>
  //       <h2>Your Cart</h2>
  //       <div className="row">
  //         {cart.map((item) => (
  //           <div key={item._id} className=" p-2 mb-2">
  //             <div className="col-4">
  //               <img src={item.image} alt="" style={{ height: "200px" }} />
  //               <h5>{item.name}</h5>
  //               <p>Price: ₹{item.ticketprice}</p>
  //             </div>

  //             <div className="col-4">
  //               <button
  //                 onClick={() => increaseQty(item._id)}
  //                 className="btn btn-success btn-sm me-2"
  //               >
  //                 +
  //               </button>

  //               <span>Quantity: {item.quantity}</span>

  //               <button
  //                 onClick={() => decreaseQty(item._id)}
  //                 className="btn btn-warning btn-sm me-2"
  //               >
  //                 -
  //               </button>
  //               <button
  //                 onClick={() => removeItem(item._id)}
  //                 className="btn btn-danger btn-sm"
  //               >
  //                 Remove
  //               </button>
  //             </div>
  //           </div>
  //         ))}
  //         <div className="col-4">
  //           <h3>Total: ${totalAmount}</h3>
  //         </div>
  //       </div>
  //     </div>
  //   );

  return (
    <>
      {/* <div className="container-fluid text-center mt-3">
        <h1 className="">Your Cart</h1>
        <h3 className="mt-3">Total: ${totalAmount}</h3>
        {cart.map((item) => (
          <div key={item._id} className=" p-2 mb-2">
            <div className="row">
              <div className="col-4">
                <img src={item.image} alt="" style={{ height: "300px" }} />
                <h5>{item.name}</h5>
                <p>Price: ₹{item.ticketprice}</p>
              </div>
              <div className="col-6 mt-5">
                <button
                  onClick={() => increaseQty(item._id)}
                  className="but1 btn  me-5" style={{backgroundColor:"#0dfd2dff"}}
                >
                  +
                </button>

                <span className="mt-5">Quantity: {item.quantity}</span>

                <button
                  onClick={() => decreaseQty(item._id)}
                  className="but1 btn ms-5"style={{backgroundColor:"#0dd9fdff"}}
                >
                  -
                </button>
                <button
                  onClick={() => removeItem(item._id)}
                  className="but1 btn btn-danger  ms-5"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
        
      </div> */}

      <div className="container-fluid text-center mt-4">
        <h1>Your Cart</h1>
        <h3 className="mt-3">Total: ₹{totalAmount}</h3>

        {cart.length > 0 ? (
          cart.map((item) => (
            <div
              key={item._id}
              className="card shadow-sm p-3 mb-4 border-0"
              style={{ borderRadius: "10px" }}
            >
              <div className="row align-items-center">
                <div className="col-12 col-md-4 mb-3 mb-md-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="img-fluid rounded"
                    style={{
                      maxHeight: "250px",
                      objectFit: "cover",
                    }}
                  />
                  <h5 className="mt-3">{item.name}</h5>
                  <p className="text-muted">Price: ₹{item.ticketprice}</p>
                </div>
                <div className="col-12 col-md-8">
                  <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
                    <div className="my-2">
                      <button
                        onClick={() => increaseQty(item._id)}
                        className="btn text-light me-3"
                        style={{ backgroundColor: "#0dfd2dff" }}
                      >
                        +
                      </button>

                      <span className="fw-bold mx-2">
                        Quantity: {item.quantity}
                      </span>

                      <button
                        onClick={() => decreaseQty(item._id)}
                        className="btn text-light ms-3"
                        style={{ backgroundColor: "#0dd9fdff" }}
                      >
                        -
                      </button>
                    </div>

                    <button
                      onClick={() => removeItem(item._id)}
                      className="btn btn-danger ms-md-4 mt-3 mt-md-0"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h4 className="text-muted mt-5">Your cart is empty 🛒</h4>
        )}
      </div>
    </>
  );
}
