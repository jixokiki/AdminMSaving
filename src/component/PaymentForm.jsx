import React, { useState } from 'react';
import {Route, Routes} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';  // Ganti useHistory menjadi useNavigate
import NavbarHome2 from '../platform/NavbarHome2';
import Home2 from './Home2';
import Home from './Home';
import SignUp2 from "./SingUp2";
import Navbar from '../platform/Navbar';
const PaymentForm = () => {
  const [selectedSalaryRange, setSelectedSalaryRange] = useState(null);
  const [totalPayment, setTotalPayment] = useState(0);
  const navigate = useNavigate();  // Ganti useHistory menjadi useNavigate

  const adminAccountNumber = '1234567890'; // Ganti dengan nomor rekening admin

  const handleSalaryRangeSelect = (salary) => {
    setSelectedSalaryRange(salary);
  };

  const handlePayment = (amount) => {
    // Simulasikan proses pembayaran
    setTotalPayment(totalPayment + amount);
  };

  const handleDonePayment = () => {
    console.log('Total Payment:', totalPayment);
    console.log('Admin Account Number:', adminAccountNumber);
    // Implementasikan logika untuk menampilkan informasi pembayaran dan nomor rekening admin
  };

  const handleBackTo = () => {
    // Arahkan kembali ke halaman PaymentForm
    const isLoggedIn = false; // Set this based on your authentication logic

    if(isLoggedIn){
      navigate('/');
    }else{
      navigate('/signup');
    }
    // <Routes>
    // <Route path='/' element={<Home/>}/>
    {/* <Route path='/' element={<Home2/>}/> */}
    // <Route path='/home' element={<Home2/>}/>
    // <Route path='/home/:approval' element={<Home2/>} />
    {/* <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<ContactForm/>}/>
    <Route path='/signup' element={<SignUp2/>}/>
    <Route path='/planing' element={<PlanMore2/>}/>
    <Route path='/planing2' element={<PlanMore3/>}/>
    <Route path='/planing3' element={<PlanMore4/>}/>
    <Route path='/transaksi' element={<TransactionInvoice/>}/>
    <Route path='/paymentForm' element={<PaymentForm/>}/> */}
    // {!isLoggedIn && <Route path="/signup" element={<SignUp2 />} />}
  // </Routes>
  };

  return (
    <div>
      {/* <NavbarHome2 /> */}
      <Navbar/>
      <h1>Payment Form</h1>

      {!selectedSalaryRange && (
        <>
          <p>Choose your salary range:</p>
          <br></br>
          <button onClick={() => handleSalaryRangeSelect(300000)}>300,000</button>
          <br></br>
          <br></br>
          <button onClick={() => handleSalaryRangeSelect(500000)}>500,000</button>
          <br></br>
          <br></br>
          <button onClick={() => handleSalaryRangeSelect(1000000)}>1.000,000</button>
          <br></br>
          <br></br>
          <button onClick={() => handleSalaryRangeSelect(1500000)}>1.500,000</button>
        </>
      )}

      {selectedSalaryRange && (
        <>
          <p>Your selected salary range: {selectedSalaryRange}</p>
          <p>Admin Account Number: {adminAccountNumber}</p>
          <button onClick={() => handlePayment(selectedSalaryRange)}>
            Proceed to Payment
          </button>
          <br></br>
          <br></br>
          <button onClick={handleBackTo}>
            Back To
          </button>
        </>
      )}

      {totalPayment > 0 && (
        <>
          <p>Total Payment: {totalPayment}</p>
          <p>Admin Account Number: {adminAccountNumber}</p>
          <button onClick={handleDonePayment}>Done</button>
        </>
      )}
    </div>
  );
};

export default PaymentForm;
