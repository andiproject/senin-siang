import React from "react";
import {Routes, Route} from "react-router-dom"

export default function App(){

  return(
    <Routes>
      <Route path="/" element={<h1>Home Screen</h1>} />
      <Route path="/biodata" element={<h1>Biodata Screen</h1>} />
    </Routes>
  )
}