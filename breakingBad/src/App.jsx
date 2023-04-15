import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { Routes, Route } from "react-router-dom";
import Player from "./components/Player";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
          <Header />
          <Main />
          </>
          
        }/>
        <Route path="/player" element={<Player/>} />
      </Routes>
    </>
  );
}

export default App;
