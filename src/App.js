import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./components/Card.css";
import Card from "./components/Card";
import Details from "./components/Detail";
import CartPage from "./components/CartPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
}

export default App;

// import Card from "./components/Card";
// import Details from "./components/Detail";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// function App() {
//   return (
//     <>
//       <Router>
//         <Routes>
//           <Route path="/" element={<Card />} />
//           <Route path="/details/:id" element={<Details />} />
//         </Routes>
//       </Router>
//     </>
//   );
// }

// export default App;
