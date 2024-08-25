import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Shared/Home";
import AppBar from "./Shared/AppBar";
import Dues from "./Components/Pages/Dues";

function App() {
  return (
    <>
    <AppBar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dues" element={<Dues/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
