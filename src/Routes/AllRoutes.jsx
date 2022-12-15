import { Routes, Route } from "react-router-dom";
import Makeup from "../Routes/Makeup";
import Skincare from "../Routes/Skincare";
import Offers from "./Offers";
import Store from "./Store";
import Login from "../Routes/Login";
import Otp from "../Routes/Otp";
import Homepage from "./Homepage";
import AllProduct from "../Components/AllProduct";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Otp" element={<Otp />}></Route>
        <Route path="/Makeup" element={<AllProduct />}></Route>
        <Route path="/Skincare" element={<AllProduct />}></Route>
        <Route path="/Offers" element={<Offers />}></Route>
        <Route path="/Store" element={<Store />}></Route>
      </Routes>
    </div>
  );
}

export default AllRoutes;
