import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import ContactForm from './component/ContactForm';
// import SignUp from './component/SignUp';
import SignUp2 from "./component/SingUp2";
import Home2 from './component/Home2';
import PlanMore2 from './platform/PlanMore2';
import PlanMore3 from './platform/PlanMore3';
import PlanMore4 from './platform/PlanMore4';
import Navbar from './platform/Navbar';
import PlanMoreContent from './platform/PlanMoreContent';
import TransactionInvoice from './component/TransactionInvoice';
import PaymentForm from './component/PaymentForm';
import ContactForm2 from './component/ContactForm2';
import About2 from './component/About2';
import PaymentForm2 from './component/PaymentForm2';

function App() {
  const isLoggedIn = true; // Set this based on your authentication logic
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/' element={<Home2/>}/> */}
        <Route path='/home' element={<Home2/>}/>
        <Route path='/home/:approval' element={<Home2/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<ContactForm/>}/>
        <Route path='/about2' element={<About2/>}/>
        <Route path='/contact2' element={<ContactForm2/>}/>
        <Route path='/signup' element={<SignUp2/>}/>
        <Route path='/planing' element={<PlanMore2/>}/>
        <Route path='/planing2' element={<PlanMore3/>}/>
        <Route path='/planing3' element={<PlanMore4/>}/>
        <Route path='/transaksi' element={<TransactionInvoice/>}/>
        <Route path='/paymentForm' element={<PaymentForm/>}/>
        <Route path='/paymentForm2' element={<PaymentForm2/>}/>
        {!isLoggedIn && <Route path="/signup" element={<SignUp2 />} />}
      </Routes>
      {/* <Routes>
        <Route path='/' element={<Home2/>}/>
        <Route path='/home' element={<Home2/>}/>
      </Routes> */}
    </div>
  );
}

export default App;
