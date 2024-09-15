import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Shared/Home";
import AppBar from "./Shared/AppBar";
import Dues from "./Components/Pages/Dues";
import FeesDescription from "./Components/Pages/FeesDescription";
import PaymentHistory from "./Components/Pages/PaymentHistory";

function App() {
  return (
    <>
    
    <AppBar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dues" element={<Dues/>} />
          <Route path="/feesDescription" element={<FeesDescription/>} />
          <Route path="/paymentHistory" element ={<PaymentHistory/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
