import React from "react";
import { Route, Routes } from "react-router";
import Container from "./component/Container";
import Home from "./pages/Home";
import News from "./pages/News";
import Matches from "./pages/Matches";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import Signup from "./authentication/Signup";
import Signin from "./authentication/Signin";

function App() {
  return (
    <div className=" text-black ">
      <Routes>
        <Route element={<Container />}>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/search" element={<Search />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
