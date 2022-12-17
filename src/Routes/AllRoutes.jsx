import { Routes, Route } from "react-router-dom";
import Offers from "./Offers";
import Store from "./Store";
import Login from "../Routes/Login";
import Otp from "../Routes/Otp";
import Homepage from "./Homepage";
import AllProduct from "../Components/AllProduct";
import SingleProduct from "../Components/SingleProduct";
import Cart from "../Components/ProductCart";
import Registration from "../Routes/Registration";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Otp" element={<Otp />}></Route>
        <Route path="/Registration" element={<Registration />}></Route>
        <Route path="/Makeup" element={<AllProduct />}></Route>
        <Route path="/Skincare" element={<AllProduct />}></Route>
        <Route path="/product/:id" element={<SingleProduct />}></Route>
        <Route path="/Offers" element={<Offers />}></Route>
        <Route path="/Store" element={<Store />}></Route>
        <Route path="/Cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
}

export default AllRoutes;
