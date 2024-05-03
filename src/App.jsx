import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import VendingMachine from "./VendingMachine";
import Cheetos from "./Cheetos";
import Pretzels from "./Pretzels";
import Doritos from "./Doritos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VendingMachine />} />
        <Route path="/Doritos" element={<Doritos />} />
        <Route path="/Cheetos" element={<Cheetos />} />
        <Route path="/Pretzels" element={<Pretzels />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;