import React from "react";
import { Link } from "react-router-dom";

function Searchbar({ searchTerm, setSearchTerm }) {
  return (
    // <div>
    //   <div className="container-fluid">
    //     <div className="row">
    //       <div className="col-xl-8 col-lg-8 col-md-6 col-sm-6 mt-3">
    //         <form>
    //           <input
    //             className="search form-control ms-3 mt-3  "
    //             type="search"
    //             placeholder="search"
    //             value={searchTerm}
    //             onChange={(e) => setSearchTerm(e.target.value)}
    //           />
    //         </form>
    //       </div>
    //       <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 d-flex flex-row-reverse mt-4">
    //         <Link to="/cart" className=" btn btn-outline-dark m-3">
    //           🛒 View Cart
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="container-fluid">
      <div className="row align-items-center py-3">
        {/* Search bar */}
        <div className="col-12 col-sm-8 col-md-8 col-lg-8 col-xl-8 mb-3 mb-sm-0">
          <form className="w-100">
            <input
              className="form-control mx-sm-3 mt-2 mt-sm-0"
              type="search"
              placeholder="Search for movies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </form>
        </div>

        {/* View Cart button */}
        <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-3 text-sm-end text-center">
          <Link to="/cart" className="btn btn-outline-dark mt-2 mt-sm-0">
            🛒 View Cart
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
