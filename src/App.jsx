import { Routes, Route, Outlet, Link } from "react-router-dom";

import Home from "./Home";

import PaqueteExpress from "./PaqueteExpress";
import Sendex from "./Sendex";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<PaqueteExpress />} />
        <Route path="Sendex" element={<Sendex />} />
      </Route>
    </Routes>
  )
}

export default App
