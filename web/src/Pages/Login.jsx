import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthAction } from "../store/auth/Auth.Action";

const Login = () => {
  const [creds, setCreds] = useState({});
  const isAuth = useSelector((store) => store.auth.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log(state);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreds({
      ...creds,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AuthAction(creds));
  };

  useEffect(() => {
    if (isAuth) {
      if (state === null) {
        navigate("/");
      } else {
        navigate(state.from, { replace: true });
      }
    }
  }, [isAuth]);

  return (
    <div>
      Login
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          maxWidth: "200px",
          gap: "10px",
        }}
      >
        <input
          name="email"
          type="email"
          placeholder="Enter Email"
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Enter Password..."
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

// import React, { useEffect } from "react";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useLocation, useNavigate } from "react-router-dom";
// import { AuthAction } from "../store/auth/Auth.Action";

// const Login = () => {
// const [creds, setCreds] = useState({});
// const isAuth = useSelector((store) => store.auth.token);
// const dispatch = useDispatch;

//   const navigate = useNavigate();
//   // const pathname = useLocation();
//   // console.log(pathname.state)
// const handleChange = (e) => {
//   const { name, value } = e.target;

//   setCreds({
//     ...creds,
//     [name]: value,
//   });
// };

// const handleSubmit = (e) => {
//   e.preventDefault();
//   dispatch(AuthAction(creds));
// };

// useEffect(() => {
//   if (!isAuth) {

//       navigate("/login");
//     } else {
//       navigate("/");
//     }

// }, [isAuth]);

//   return (
// <div>
//   Login
//   <form
//     onSubmit={(e)=>handleSubmit(e,creds)}
//     style={{
//       display: "flex",
//       flexDirection: "column",
//       margin: "auto",
//       maxWidth: "200px",
//       gap: "10px",
//     }}
//   >
//     <input
//       name="email"
//       type="email"
//       placeholder="Enter Email"
//       onChange={handleChange}
//     />
//     <input
//       name="password"
//       type="password"
//       placeholder="Enter Password..."
//       onChange={handleChange}
//     />
//     <button type="submit">Login</button>
//   </form>
// </div>
//   );
// };

// export default Login;
