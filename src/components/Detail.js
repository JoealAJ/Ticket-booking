// import { useParams } from "react-router-dom";
// import {useState, useEffect} from "react";

// const Details = () => {
//   const { id } = useParams();
//   const [movie, setMovie] = useState(null);

//   useEffect(() => {
//     fetch(`https://backend-crud-one.vercel.app/product/${id}`)
//       .then((res) => res.json())
//       .then((data) => setMovie(data))
//       .catch((err) => console.error(err));
//   }, [id]);

//   if (!movie) return <h2>Loading...</h2>;

//   return (
//     <div className="container mt-5">
//       <h2>{movie.name}</h2>
//       <img src={movie.image} alt={movie.name} style={{ height: "400px" }} />
//       <p>Ticket Price: ${movie.ticketprice}</p>
//     </div>
//   );
// };

// export default Details;

import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCart } from "./CartContext";

const Details = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(`https://backend-crud-one.vercel.app/product/${id}`)
      .then((res) => res.json())
      .then((data) => setMovie(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!movie) return <h2 className="text-center mt-5">Loading...</h2>;

  return (
    // <div className="container text-center mt-5">
    //   <div className="row">
    //     <div className="col-8">
    //       <h2>{movie.name}</h2>
    //       <img
    //         className="mt-3"
    //         src={movie.image}
    //         alt={movie.name}
    //         style={{ height: "400px", borderRadius: "10px" }}
    //       />
    //       <h3>Watch Now</h3>
    //       <p className="mt-4">
    //         <strong>Description :</strong> {movie.description}
    //       </p>
    //     </div>
    //     <div className="col-4">
    //       <h2 className="mt-5">
    //         Price: ${movie.ticketprice}
    //       </h2>
    //       <button
    //           onClick={() => addToCart(movie)}
    //           className="butn btn  m-5" style={{backgroundColor:"#0dd1fdff"}}
    //         >
    //           Add to Cart
    //         </button><br></br>
    //         <Link to="/cart"><button className="butn rounded-3 bg-dark text-light m-5">Go to Cart</button><br></br></Link>
    //       <Link to="/">
    //         <button className="butn rounded  m-5" style={{backgroundColor:"#fd0d0dff"}}>Back to Movies</button>
    //       </Link>
    //     </div>
    //   </div>
    // </div>
    
<div className="container text-center mt-5">
  <div className="row align-items-center">
    {/* Left Column - Movie Info */}
    <div className="col-12 col-md-8 mb-4">
      <h2>{movie.name}</h2>
      <img
        className="img-fluid mt-3"
        src={movie.image}
        alt={movie.name}
        style={{
          maxHeight: "400px",
          width: "100%",
          borderRadius: "10px",
          objectFit: "cover",
        }}
      />
      <h3 className="mt-3">Watch Now</h3>
      <p className="mt-4 px-3 px-md-0">
        <strong>Description:</strong> {movie.description}
      </p>
    </div>

    {/* Right Column - Price and Buttons */}
    <div className="col-12 col-md-4">
      <h2 className="mt-3 mt-md-5">Price: ${movie.ticketprice}</h2>

      <button
        onClick={() => addToCart(movie)}
        className="btn text-light m-3 w-75"
        style={{ backgroundColor: "#0dd1fdff" }}
      >
        Add to Cart
      </button>

      <Link to="/cart">
        <button className="btn bg-dark text-light rounded-3 m-3 w-75">
          Go to Cart
        </button>
      </Link>

      <Link to="/">
        <button
          className="btn text-light rounded m-3 w-75"
          style={{ backgroundColor: "#fd0d0dff" }}
        >
          Back to Movies
        </button>
      </Link>
    </div>
  </div>
</div>

   
  );
};

export default Details;
