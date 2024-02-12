// Import React
import React, { useState } from 'react';
import './SignUp.css';
import axios from 'axios';
// import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import {Route, Routes} from 'react-router-dom';
// import Home from '../component/Home';

// Komponen Formulir Registrasi
const RegistrationForm = ({ onRegistration, onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [agreed, setAgreed] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
  
    const navigate = useNavigate();
  
    const handleRegistration = () => {
      if (username && password && agreed) {
        // Save registration data to db.json
        const userData = { username, password };
        saveToJSON(userData);
  
        // Trigger the registration callback
        onRegistration(userData);
  
        setFormSubmitted(true);
      }
    };
  
    // Function to save user data to db.json
    const saveToJSON = (userData) => {
      // Fetch the existing data
      const existingData = localStorage.getItem('user_data');
      const dataArray = existingData ? JSON.parse(existingData) : [];
  
      // Add new data to the array
      dataArray.push(userData);
  
      // Save the updated array to localStorage
      localStorage.setItem('user_data', JSON.stringify(dataArray));
    };
  
    const handleContinueToLogin = () => {
        if (formSubmitted) {
            // Reset the form state
            setUsername('');
            setPassword('');
            setAgreed(false);
            setFormSubmitted(false);
        
            // Navigate to the login form
            navigate('/');

                // Trigger the login callback to populate the LoginForm with user data
            onLogin({ username, password });
        
            // Trigger the login callback after a short delay to ensure navigation has completed
            setTimeout(() => {
              onLogin({ username, password });
            }, 100);
          } else {
            alert('Registration is not yet completed.');
        }
    };
  
    return (
      <div>
        <form>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
  
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
  
          <label>
            <input type="checkbox" checked={agreed} onChange={() => setAgreed(!agreed)} />
            Saya setuju dengan syarat dan ketentuan
          </label>
  
          <button type="button" onClick={handleRegistration}>
            Daftar
          </button>
  
          {formSubmitted && (
            <>
              <p>Registrasi berhasil! Silakan lanjutkan ke login.</p>
              <button type="button" onClick={handleContinueToLogin}>
                Lanjutkan ke Login
              </button>
            </>
          )}
        </form>
      </div>
    );
  };



// Komponen Formulir Login
const LoginForm = ({ onLogin, autoFillData }) => {
  const [username, setUsername] = useState(autoFillData ? autoFillData.username : '');
  const [password, setPassword] = useState(autoFillData ? autoFillData.password : '');

  const handleLogin = () => {
    // Kirim data login ke server atau penyimpanan
    onLogin({ username, password });
  };

  return (
    <div>
      {/* <h2>Login</h2> */}
      <form>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button type="button" onClick={handleLogin}>
          Masuk
        </button>
      </form>
    </div>
  );
};


const ApprovalForm = () => {
  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [address, setAddress] = useState('');
  const [salaryRange, setSalaryRange] = useState('');
  const [bankName, setBankName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [accountHolderName, setAccountHolderName] = useState('');
  const navigate = useNavigate();

  const handleApprovalSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4000/formulir', {
        name,
        birthdate,
        address,
        salaryRange,
        bankName,
        accountNumber,
        accountHolderName
      });

      console.log('Data submitted to database successfully!');
      // navigate('/');

      navigate('/home'); // Ganti '/' dengan path yang sesuai

      alert('Data submitted successfully!');
    } catch (error) {
      console.error(error);
      alert('An error occurred. Please try again.' + error.message);
    }
  };

  return (
    <div>
      <h2>Formulir Persetujuan</h2>
      <form>
        <label>Nama:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

        <label>Tanggal Lahir:</label>
        <input type="text" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />

        <label>Alamat:</label>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />

        <label>Range Gaji:</label>
        <select value={salaryRange} onChange={(e) => setSalaryRange(e.target.value)}>
          <option value="">Pilih Kesanggupan Nominal Menabung</option>
          <option value="300000">Rp. 300.000</option>
          <option value="500000">Rp. 500.000</option>
          <option value="1000000">Rp. 1.000.000</option>
          <option value="1500000">Rp. 1.500.000</option>
        </select>

        <label>Nama Bank:</label>
        <select value={bankName} onChange={(e) => setBankName(e.target.value)}>
          <option value="">Pilih Nama Bank</option>
          <option value="BCA">BCA</option>
          <option value="BNI">BNI</option>
          <option value="BRI">BRI</option>
          <option value="Mandiri">Mandiri</option>
        </select>

        <label>No Rek Bank:</label>
        <input type="text" value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} />

        <label>Nama Rek:</label>
        <input type="text" value={accountHolderName} onChange={(e) => setAccountHolderName(e.target.value)} />

        <button type="submit" onClick={handleApprovalSubmit}>
          Kirim Persetujuan
        </button>
      </form>
    </div>
  );
};













// //CODE FIX UNTUK APROVAL FORM SETELAH REGIS
// Komponen Utama
const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [showRegistration, setShowRegistration] = useState(false);

  // const [loggedIn, setLoggedIn] = useState(false);
  const [transactions, setTransactions] = useState([
    { date: '2024-01-15', description: 'Purchase Item A', amount: 50.0 },
    { date: '2024-01-16', description: 'Purchase Item B', amount: 75.0 },
    // Add more transactions as needed
  ]);

  const handleRegistration = (data) => {
    // Simpan data registrasi ke state atau server
    setUserData(data);
    setLoggedIn(true);
  };

    // Initialize the useNavigate hook
  const navigate = useNavigate();

//   const handleLogin = (data) => {
//     // Periksa kecocokan data login dengan data registrasi
//     if (userData && userData.username === data.username && userData.password === data.password) {
//       setLoggedIn(true);
//         // Navigate to the home page after successful login
//       navigate('/');
//     } else {
//       alert('Login gagal. Periksa kembali username dan password.');
//     }
//   };
  const handleLogin = (data) => {
    // Retrieve user data from localStorage
    const storedData = localStorage.getItem('user_data');
    const userDataArray = storedData ? JSON.parse(storedData) : [];

    // Find the user in the array
    const foundUser = userDataArray.find(
        (user) => user.username === data.username && user.password === data.password
    );

    if (foundUser) {
        setLoggedIn(true);
        // Navigate to the home page after successful login
        navigate('/home');
    } else {
        alert('Login gagal. Periksa kembali username dan password.');
    }
  };

  const toggleForm = () => {
    setShowRegistration(!showRegistration);
  };

  return (
    <div className={`signup-container ${showRegistration ? 'show-registration' : 'show-login'}`}>
      {!loggedIn ? (
        <>
          <div className="registration-form">
            <h2>Registrasi</h2>
            <RegistrationForm onRegistration={handleRegistration} onLogin={handleLogin}/>
            <div className="toggle-form-link">
              Sudah punya akun?{' '}
              <button type="button" onClick={() => setShowRegistration(false)}>
                Login di sini
              </button>
            </div>
          </div>
          <div className="login-form">
            <h2>Login</h2>
            <LoginForm onLogin={handleLogin} />
            <div className="toggle-form-link">
              Belum punya akun?{' '}
              <button type="button" onClick={toggleForm}>
                Daftar di sini
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <h2>Selamat datang, {userData.username}!</h2>
          <ApprovalForm />
        </>
      )}
    </div>
  );
};

export default App;






