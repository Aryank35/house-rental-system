import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Shared/Home";
import AppBar from "./Shared/AppBar";
import Dues from "./Components/Pages/Payment/Dues";
import FeesDescription from "./Components/Pages/Payment/FeesDescription";
import PaymentHistory from "./Components/Pages/Payment/PaymentHistory";
import RentReceipt from "./Components/RentReceipt";
import Complains from "./Components/Pages/Complains";
import ElectricityBill from "./Components/Pages/Payment/ElectricityBill";

function App() {
  return (
    <>
      <AppBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dues" element={<Dues />} />
          <Route path="/feesDescription" element={<FeesDescription />} />
          <Route path="/paymentHistory" element={<PaymentHistory />} />
          <Route path="/rentReceipt" element={<RentReceipt />} />
          <Route path="/complains" element={<Complains />} />
          <Route path="/electricityBill" element={<ElectricityBill/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
