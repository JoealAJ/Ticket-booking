// import { useState, useEffect } from "react";
// import Searchbar from "./Searchbar";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

// const Card = () => {
//   const [movie, setmovie] = useState([]);

//   const Navigate = useNavigate();

//   useEffect(() => {
//     fetch("https://backend-crud-one.vercel.app/product")
//       .then((response) => response.json())
//       .then((data) => setmovie(data));
//   }, []);

//   return (
//     <>
//       <Searchbar />
//       <div className="container-fluid">
//         <div className="row p-3">
//           {movie.map((mov) => (
//             <div className="col-3" key={mov.id}>
//               <div className="card">
//                 <img
//                   className="card-img-top"
//                   src={mov.image}
//                   alt={mov.name}
//                   style={{ height: "500px" }}
//                 />
//                 <div className="card-body">
//                   <h3>{mov.name}</h3>
//                   <p>${mov.ticketprice}</p>
//                   <Link to ={`/details/${mov._id}`} classNmae="link">
//                   <button
//                     className="btn btn-primary"
//                   >
//                     add to Cart
//                   </button>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Card;

import { useState, useEffect } from "react";
import Searchbar from "./Searchbar";
import { Link } from "react-router-dom";

const Card = () => {
  const [movie, setMovie] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://backend-crud-one.vercel.app/product") // ✅ use https
      .then((response) => response.json())
      .then((data) => setMovie(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  const filteredMovies = movie.filter((mov) =>
    mov.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div>
        <h1 className="head text-center mt-3">Welcome to Ticket Booking website</h1>
        <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div className="container-fluid">
          <div className="row p-3">
            {filteredMovies.map((mov) => (
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mt-5" key={mov._id}>
                <div className="mov-card">
                  <img
                    className="image"
                    src={mov.image}
                    alt={mov.name}
                    // style={{ height: "450px" }}
                  />
                  <div className="card-body text-center">
                    <h3>{mov.name}</h3>
                    <p>${mov.ticketprice}</p>
                    <Link to={`/details/${mov._id}`} className="link">
                      <button className="btn btn-primary">Add to Cart</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
            {filteredMovies.length === 0 && (
              <h4 className="text-center mt-5 text-muted">
                Sorry!! No results found
              </h4>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
