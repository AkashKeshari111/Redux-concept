import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthAction, AuthLogout } from "../store/auth/Auth.Action";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const isAuth = useSelector((store) => store.auth.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginClick = () => {
    if (isAuth) {
      dispatch(AuthLogout());
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/feeds">Feeds</Link>
      <Link to="/cartItem">CartItems</Link>
      <button onClick={loginClick}>{isAuth?"Logout":"Login"}</button>
    </div>
  );
};

export default Navbar;
