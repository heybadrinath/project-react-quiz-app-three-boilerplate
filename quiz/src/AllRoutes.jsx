import React from "react";
import { Route, Routes } from "react-router-dom";
// import HomeComponent from "./components/HomeComponent"
import HomeComponent from "./components/HomeComponent ";
import QuizComponent from "./components/QuizComponent ";
import ResultComponent from "./components/ResultComponent"
function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeComponent />}></Route>
        <Route path="/game" element={<QuizComponent />}></Route>
        <Route path="/result" element={<ResultComponent />}></Route>
      </Routes>
    </>
  );
}

export default AllRoutes;