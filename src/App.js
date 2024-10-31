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
import NotificationPage from "./Components/NotificationPage";
import NoticePage from "./Components/NoticePage";
import ProfilePage from "./Components/ProfilePage";
import PaymentGateway from "./Components/Pages/Payment/PaymentGateway";

function App() {
  return (
    <>
      <BrowserRouter>
      <AppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<ProfilePage/>} />
          <Route path="/dues" element={<Dues />} />
          <Route path="/feesDescription" element={<FeesDescription />} />
          <Route path="/paymentHistory" element={<PaymentHistory />} />
          <Route path="/rentReceipt" element={<RentReceipt />} />
          <Route path="/complains" element={<Complains />} />
          <Route path="/electricityBill" element={<ElectricityBill/>} />
          <Route path="/notification" element={<NotificationPage/>} />
          <Route path="/notice" element={<NoticePage/>} />
          <Route path="/paymentGateway" element={<PaymentGateway/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
