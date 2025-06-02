import React from "react";
import { Route, Routes } from "react-router";
import Container from "./component/Container";
import Home from "./pages/Home";
import News from "./pages/News";
import Matches from "./pages/Matches";
import Search from "./pages/Search";
import Profile from "./pages/Profile";

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
      </Routes>
    </div>
  );
}

export default App;
