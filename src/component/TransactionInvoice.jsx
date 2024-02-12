import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TransactionInvoice.css';
import Navbar from '../platform/Navbar';

const TransactionInvoice = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/formulir');
        setTransactions(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs once when the component mounts

  return (
    <div>
        <Navbar/>
      <h2>Transaction Invoices</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Name</th>
              <th>Address</th>
              <th>Salary Range</th>
              <th>Bank Name</th>
              <th>Account Number</th>
              <th>Account Holder Name</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(transactions) && transactions.length > 0 ? (
              transactions.map((transaction, index) => (
                <tr key={index}>
                  <td>{transaction.date}</td>
                  <td>{transaction.name}</td>
                  <td>{transaction.address}</td>
                  <td>{transaction.salaryRange}</td>
                  <td>{transaction.bankName}</td>
                  <td>{transaction.accountNumber}</td>
                  <td>{transaction.accountHolderName}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7">No transactions available</td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TransactionInvoice;










// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './TransactionInvoice.css';
// import Navbar from '../platform/Navbar';

// const TransactionInvoice = () => {
//   const [transactions, setTransactions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [totalSalary, setTotalSalary] = useState(0);

//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     try {
//   //       const response = await axios.get('http://localhost:4000/formulir');
//   //       setTransactions(response.data);

//   //       // Calculate total salary
//   //       const total = response.data.reduce((acc, transaction) => {
//   //         return acc + transaction.salaryRange;
//   //       }, 0);
//   //       setTotalSalary(total);

//   //       setLoading(false);
//   //     } catch (error) {
//   //       console.error('Error fetching data:', error);
//   //       setLoading(false);
//   //     }
//   //   };

//   //   fetchData();
//   // }, []); // Empty dependency array ensures the effect runs once when the component mounts


//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:4000/formulir');
//         const newTransactions = response.data;
  
//         // Calculate total salary only if there are new transactions
//         if (newTransactions.length > 0) {
//           setTransactions(newTransactions);
  
//           // Calculate total salary for the new transactions
//           const newTotal = newTransactions.reduce((acc, transaction) => {
//             return acc + transaction.salaryRange;
//           }, 0);
  
//           // Set the new total salary
//           setTotalSalary(newTotal);
//           console.log('New Total Salary:', newTotal);
  
//           setLoading(false);
//         }
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setLoading(false);
//       }
//     };
  
//     fetchData();
//   }, []); // Empty dependency array ensures the effect runs once when the component mounts
  

//   return (
//     <div>
//       <Navbar />
//       <h2>Transaction Invoices</h2>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <div>
//           {/* <p>Total Salary: {totalSalary}</p> */}
//           <p>Total Salary: {totalSalary.toLocaleString()}</p>
//           <table>
//             <thead>
//               <tr>
//                 <th>Date</th>
//                 <th>Name</th>
//                 <th>Address</th>
//                 <th>Salary Range</th>
//                 <th>Bank Name</th>
//                 <th>Account Number</th>
//                 <th>Account Holder Name</th>
//               </tr>
//             </thead>
//             <tbody>
//               {Array.isArray(transactions) && transactions.length > 0 ? (
//                 transactions.map((transaction, index) => (
//                   <tr key={index}>
//                     <td>{transaction.date}</td>
//                     <td>{transaction.name}</td>
//                     <td>{transaction.address}</td>
//                     <td>{transaction.salaryRange}</td>
//                     <td>{transaction.bankName}</td>
//                     <td>{transaction.accountNumber}</td>
//                     <td>{transaction.accountHolderName}</td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="7">No transactions available</td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TransactionInvoice;
