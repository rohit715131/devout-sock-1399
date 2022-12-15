import { Routes, Route } from "react-router-dom";
import Makeup from "../Routes/Makeup";
import Skincare from "../Routes/Skincare";
import Offers from "./Offers";
import Store from "./Store";
// import SingleProductPage from "../Routes/SingleProductPage";
import Homepage from "./Homepage";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/Makeup" element={<Makeup />}></Route>
        <Route path="/Skincare" element={<Skincare />}></Route>
        <Route path="/offers" element={<Offers />}></Route>
        <Route path="/store" element={<Store />}></Route>
        {/* <Route path="/product/:id" element={<SingleProductPage />}></Route> */}
      </Routes>
    </div>
  );
}

export default AllRoutes;
