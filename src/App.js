import Home from "./pages/Home/Home";
import Products from "./pages/Product/Products";
import Gucci from "./pages/Products/Gucci";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/products" element={<Products/>}/> 
        <Route path="/gucci" element={<Gucci/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App;
