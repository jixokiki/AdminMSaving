// SignUp.js

// import React, { useState } from 'react';
// import './SignUp.css';

// const SignUp = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Implement your signup logic here
//     console.log('Form submitted:', formData);
//   };

//   return (
//     <div className="signup-container">
//       <h2>Sign Up</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="username">Username:</label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="confirmPassword">Confirm Password:</label>
//           <input
//             type="password"
//             id="confirmPassword"
//             name="confirmPassword"
//             value={formData.confirmPassword}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit">Sign Up</button>
//       </form>
//     </div>
//   );
// };

// export default SignUp;


// // Import React
// import React, { useState } from 'react';
// import './SignUp.css';

// // Komponen Formulir Registrasi
// const RegistrationForm = ({ onRegistration }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [agreed, setAgreed] = useState(false);
//   const [formSubmitted, setFormSubmitted] = useState(false);

//   const handleRegistration = () => {
//     if (username && password && agreed) {
//       // Kirim data registrasi ke server atau penyimpanan
//       onRegistration({ username, password });
//       setFormSubmitted(true);
//     }
//   };

//   return (
//     <div>
//       <h2>Registrasi</h2>
//       <form>
//         <label>Username:</label>
//         <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

//         <label>Password:</label>
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

//         <label>
//           <input type="checkbox" checked={agreed} onChange={() => setAgreed(!agreed)} />
//           Saya setuju dengan syarat dan ketentuan
//         </label>

//         <button type="button" onClick={handleRegistration}>
//           Daftar
//         </button>

//         {formSubmitted && <p>Registrasi berhasil! Silakan masuk.</p>}
//       </form>
//     </div>
//   );
// };

// // Komponen Formulir Login
// const LoginForm = ({ onLogin }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     // Kirim data login ke server atau penyimpanan
//     onLogin({ username, password });
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form>
//         <label>Username:</label>
//         <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

//         <label>Password:</label>
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

//         <button type="button" onClick={handleLogin}>
//           Masuk
//         </button>
//       </form>
//     </div>
//   );
// };

// // Komponen Utama
// const SignUp = () => {
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [userData, setUserData] = useState(null);

//   const handleRegistration = (data) => {
//     // Simpan data registrasi ke state atau server
//     setUserData(data);
//   };

//   const handleLogin = (data) => {
//     // Periksa kecocokan data login dengan data registrasi
//     if (userData && userData.username === data.username && userData.password === data.password) {
//       setLoggedIn(true);
//     } else {
//       alert('Login gagal. Periksa kembali username dan password.');
//     }
//   };

//   return (
//     <div>
//       {!loggedIn ? (
//         <>
//           <RegistrationForm onRegistration={handleRegistration} />
//           <LoginForm onLogin={handleLogin} />
//         </>
//       ) : (
//         <>
//           <h2>Selamat datang, {userData.username}!</h2>
//           <p>Isi formulir persetujuan:</p>
//           {/* Tampilkan formulir persetujuan di sini */}
//         </>
//       )}
//     </div>
//   );
// };

// export default SignUp;





// Import React
import React, { useState } from 'react';
import './SignUp.css';
import axios from 'axios';
// import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import {Route, Routes} from 'react-router-dom';
// import Home from '../component/Home';

// Komponen Formulir Registrasi
const RegistrationForm = ({ onRegistration }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleRegistration = () => {
    if (username && password && agreed) {
      // Kirim data registrasi ke server atau penyimpanan
      onRegistration({ username, password });
      setFormSubmitted(true);
    }
  };

  return (
    <div>
      {/* <h2>Registrasi</h2> */}
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

        {formSubmitted && <p>Registrasi berhasil! Silakan masuk.</p>}
      </form>
    </div>
  );
};

//CODE FIX UNTUK LOGIN TANPA MENYERTAKAN AUTOFILLDATA
// Komponen Formulir Login
// const LoginForm = ({ onLogin }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     // Kirim data login ke server atau penyimpanan
//     onLogin({ username, password });
//   };

//   return (
//     <div>
//       {/* <h2>Login</h2> */}
//       <form>
//         <label>Username:</label>
//         <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

//         <label>Password:</label>
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

//         <button type="button" onClick={handleLogin}>
//           Masuk
//         </button>
//       </form>
//     </div>
//   );
// };

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


// // Komponen Formulir Persetujuan
// const ApprovalForm = () => {
//   const [name, setName] = useState('');
//   const [birthdate, setBirthdate] = useState('');
//   const [address, setAddress] = useState('');
//   const [salaryRange, setSalaryRange] = useState('');
//   const [bankName, setBankName] = useState('');
//   const [accountNumber, setAccountNumber] = useState('');
//   const [accountHolderName, setAccountHolderName] = useState('');

//   const handleApprovalSubmit = () => {
//     // Lakukan sesuatu dengan data persetujuan, misalnya kirim ke server
//     console.log('Data persetujuan:', {
//       name,
//       birthdate,
//       address,
//       salaryRange,
//       bankName,
//       accountNumber,
//       accountHolderName,
//     });
//   };




//INI KODE YANG BENERBENER FIXXX BANGETTTTTT
// const ApprovalForm = () => {
//   const [name, setName] = useState('');
//   const [birthdate, setBirthdate] = useState('');
//   const [address, setAddress] = useState('');
//   const [salaryRange, setSalaryRange] = useState('');
//   const [bankName, setBankName] = useState('');
//   const [accountNumber, setAccountNumber] = useState('');
//   const [accountHolderName, setAccountHolderName] = useState('');

//   const navigate = useNavigate();

//   const handleApprovalSubmit = async(e) => {
//     // // Kirim data persetujuan ke server
//     // fetch('http://localhost:4000/api/persetujuan', {
//     //   method: 'POST',
//     //   headers: {
//     //     'Content-Type': 'application/json',
//     //   },
//     //   body: JSON.stringify({
//     //     name,
//     //     birthdate,
//     //     address,
//     //     salaryRange,
//     //     bankName,
//     //     accountNumber,
//     //     accountHolderName,
//     //   }),
//     // })
//     //   .then(response => response.json())
//     //   .then(data => {
//     //     console.log('Response from server:', data);
//     //     // Tambahkan logika atau tindakan lain setelah persetujuan disimpan
//     //   })
//     //   .catch(error => {
//     //     console.error('Gagal mengirim persetujuan ke server:', error);
//     //   });
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:4000/formulir', {
//         name,
//         birthdate,
//         address,
//         salaryRange,
//         bankName,
//         accountNumber,
//         accountHolderName
//       });

//       console.log('Data submitted to database successfully!');

//       // // Navigasi ke halaman lain setelah pengiriman sukses
//       // // eslint-disable-next-line no-undef
//       navigate('/');
//       // <NavLink exact="true" activeclassname="active" to={<Home/>}></NavLink>
//       // Navigasi ke halaman lain setelah pengiriman sukses
//       navigate('/home'); // Ganti '/' dengan path yang sesuai
      
//       alert('Data submitted successfully!');
//     } catch (error) {
//       console.error(error);
//       alert('An error occurred. Please try again.'+  error.message);
//     }
//   };

//   return (
//     <div>
//       <h2>Formulir Persetujuan</h2>
//       <form>
//         <label>Nama:</label>
//         <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

//         <label>Tanggal Lahir:</label>
//         <input type="text" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />

//         <label>Alamat:</label>
//         <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />

//         <label>Range Gaji:</label>
//         <input type="text" value={salaryRange} onChange={(e) => setSalaryRange(e.target.value)} />

//         <label>Nama Bank:</label>
//         <input type="text" value={bankName} onChange={(e) => setBankName(e.target.value)} />

//         <label>No Rek Bank:</label>
//         <input type="text" value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} />

//         <label>Nama Rek:</label>
//         <input type="text" value={accountHolderName} onChange={(e) => setAccountHolderName(e.target.value)} />

//         {/* <NavLink exact="true" activeclassname="active" to={<Home/>}>

//           <button type="submit" onClick={handleApprovalSubmit}>
//             Kirim Persetujuan
//           </button>
//         </NavLink> */}
//         <button type="submit" onClick={handleApprovalSubmit}>
//           Kirim Persetujuan
//         </button>
//       </form>
//     </div>
//   );
// };


const ApprovalForm = () => {
  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [address, setAddress] = useState('');
  const [salaryRange, setSalaryRange] = useState('');
  const [bankName, setBankName] = useState('');
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
      });

      console.log('Data submitted to database successfully!');
      navigate('/');

      // navigate('/home'); // Ganti '/' dengan path yang sesuai
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

        <button type="submit" onClick={handleApprovalSubmit}>
          Kirim Persetujuan
        </button>
      </form>
    </div>
  );
};







// // Komponen Utama
// const App = () => {
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [userData, setUserData] = useState(null);

//   const handleRegistration = (data) => {
//     // Simpan data registrasi ke state atau server
//     setUserData(data);
//   };

//   const handleLogin = (data) => {
//     // Periksa kecocokan data login dengan data registrasi
//     if (userData && userData.username === data.username && userData.password === data.password) {
//       setLoggedIn(true);
//     } else {
//       alert('Login gagal. Periksa kembali username dan password.');
//     }
//   };

//   return (
//     <div>
//       {!loggedIn ? (
//         <>
//           <RegistrationForm onRegistration={handleRegistration} />
//           <LoginForm onLogin={handleLogin} />
//         </>
//       ) : (
//         <>
//           <h2>Selamat datang, {userData.username}!</h2>
//           <ApprovalForm />
//         </>
//       )}
//     </div>
//   );
// };

// export default App;

// //CODE FIX UNTUK APROVAL FORM SETELAH REGIS
// Komponen Utama
const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [showRegistration, setShowRegistration] = useState(false);

  const handleRegistration = (data) => {
    // Simpan data registrasi ke state atau server
    setUserData(data);
    setLoggedIn(true);
  };

  const handleLogin = (data) => {
    // Periksa kecocokan data login dengan data registrasi
    if (userData && userData.username === data.username && userData.password === data.password) {
      setLoggedIn(true);
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
            <RegistrationForm onRegistration={handleRegistration} />
            <div className="toggle-form-link">
              Sudah punya akun?{' '}
              <button type="button" onClick={toggleForm}>
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


// // Komponen Utama
// const App = () => {
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [userData, setUserData] = useState(null);
//   const [showRegistration, setShowRegistration] = useState(false);

//   const handleRegistration = (data) => {
//     // Simpan data registrasi ke state atau server
//     setUserData(data);
//     setLoggedIn(true);
//   };

//   const handleLogin = (data) => {
//     // Periksa kecocokan data login dengan data registrasi
//     if (userData && userData.username === data.username && userData.password === data.password) {
//       setLoggedIn(true);
//     } else {
//       alert('Login gagal. Periksa kembali username dan password.');
//     }
//   };

//   const toggleForm = () => {
//     setShowRegistration(!showRegistration);
//   };

//   // const handleSkipApproval = () => {
//   //   // Implementasi aksi untuk melewati formulir persetujuan
//   //   setLoggedIn(true);
//   // };

//   return (
//     <div className={`signup-container ${showRegistration ? 'show-registration' : 'show-login'}`}>
//       {!loggedIn ? (
//         <>
//           <div className="registration-form">
//             <h2>Registrasi</h2>
//             <RegistrationForm onRegistration={handleRegistration} />
//             <div className="toggle-form-link">
//               Sudah punya akun?{' '}
//               <button type="button" onClick={toggleForm}>
//                 Login di sini
//               </button>
//             </div>
//           </div>
//           <div className="login-form">
//             <h2>Login</h2>
//             <LoginForm onLogin={handleLogin} autoFillData={userData}/>
//             <div className="toggle-form-link">
//               Belum punya akun?{' '}
//               <button type="button" onClick={toggleForm}>
//                 Daftar di sini
//               </button>
//             </div>
//           </div>
//         </>
//       ) : (
//         <>
//           <h2>Selamat datang, {userData.username}!</h2>
//           <ApprovalForm />
//           <div className="skip-approval-link">
//             {/* <button type="button" onClick={handleSkipApproval}>
//               Lewati Persetujuan
//             </button> */}
//             {/* atau bisa menggunakan NavLink */}
//             <NavLink to="/">Lewati Persetujuan</NavLink>
//           </div>
//           {/* Menyediakan data registrasi ke formulir login */}
//           <LoginForm onLogin={handleLogin} autoFillData={userData} />

//         </>
//       )}
//     </div>
//   );
// };

// export default App;



