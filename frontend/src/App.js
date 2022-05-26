import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/main/login";
import Admin from "./components/admin";
import User from "./components/user";
import Main from "./components/main";
import Seller from "./components/seller";
import Header from "./components/main/header";
//import NewLogin from "./components/main/newlogin";
//import NewSignup from "./components/main/newsignup";
import Signup from "./components/main/signup";
import Ordering from "./components/main/ordering";
import BrowseEquipment from "./components/main/browseEquipment";
import Chat from "./components/user/chat";
import AddExpert from "./components/admin/addexpert";
import Expertlogin from "./components/main/expertlogin";
import Expertchat from "./components/expert/expertchat";
import Expert from "./components/expert";
import Home from "./components/main/home";
import Sellersignup from "./components/main/sellersignup";
import Sellerlogin from "./components/main/sellerlogin";
import AdminAuthorisor from "./components/adminAuth";
import Authorisor from "./components/authenticator";
import UserChat from "./components/user/chat";
import AdminProfile from "./components/admin/profile";
import AddEquipment from "./components/seller/addEquipment";
import ManageEquipment from "./components/seller/manageEquipment";
import Resetpassword from "./components/main/resetPassword";
import Expertsignup from "./components/main/expertsignup ";
import Contactus from "./components/main/contactus";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <AdminAuthorisor>
              <Admin />
            </AdminAuthorisor>
          }
          path="admin"
        >
          <Route element={<AdminProfile />} path="profile" />
          <Route element={<AddExpert />} path="addexpert" />
        </Route>

        <Route
          element={
            <Authorisor>
              <User />
            </Authorisor>
          }
          path="user"
        >
          <Route element={<Chat />} path="chat" />
        </Route>
        <Route element={<Main />} path="main">
          <Route element={<Signup />} path="signup" />
          <Route element={<Login />} path="login" />
          {/* <Route element={<NewLogin />} path="newlogin" /> */}
          {/* <Route element={<NewSignup />} path="newsignup" /> */}
          <Route element={<BrowseEquipment />} path="browseEquipment" />
          <Route element={<Home />} path="home" />
          <Route element={<Ordering />} path="ordering" />
          <Route element={<Expertlogin />} path="expertlogin" />
          <Route element={<Sellersignup />} path="sellersignup" />
          <Route element={<Sellerlogin />} path="sellerlogin" />
          <Route element={<Resetpassword />} path="resetpassword" />
          <Route element={<Expertsignup />} path="expertsignup" />
          <Route element={<Contactus/>} path="/main/contactus" />
          {/* <Route element={<Equipmentdetails />} path="equipmentdetails" /> */}
        </Route>
        <Route element={<Seller />} path="seller">
          <Route element={<AddEquipment />} path="addequipment" />
          <Route element={<ManageEquipment />} path="manageequipment" />
        </Route>

        <Route element={<Expert />} path="expert">
          <Route element={<Expertchat />} path="expertchat" />
        </Route>

        <Route element={<User />} path="user">
          <Route element={<UserChat />} path="chat/:expertid" />
        </Route>
        <Route element={<Home />} path="home" />

        <Route element={<Navigate to="/home" />} path="/"></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
