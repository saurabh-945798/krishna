import React, { useState } from 'react';
import Swal from 'sweetalert2'; // Import SweetAlert2
import 'sweetalert2/dist/sweetalert2.min.css'; // Import SweetAlert2 CSS
import * as XLSX from 'xlsx'; // Import xlsx library

const DonationForm = () => {
  const [title, setTitle] = useState('Mr');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState(''); // Added state for donation amount

  const handleSubmit = async (e) => {
    e.preventDefault();

    const details = {
      title,
      name,
      mobile,
      email,
      amount, // Add amount to the details
    };

    // Post data to Firebase
    const res = await fetch("https://techmen-17a20-default-rtdb.firebaseio.com/saurabh/-O9coHbH2AUlYIFUQYW5/saurabh.json", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(details),
    });

    if (res.ok) {
      // Generate Excel sheet after successful Firebase submission
      generateExcel(details);

      // Show a success pop-up using SweetAlert2
      Swal.fire({
        icon: 'success',
        title: 'सफलता!',
        text: 'आपकी जानकारी सफलतापूर्वक सबमिट हो गई है!',
        confirmButtonText: 'ओके',
      });

      // Reset form after submission
      setTitle('Mr');
      setName('');
      setMobile('');
      setEmail('');
      setAmount(''); // Reset the amount
    } else {
      // Show an error pop-up using SweetAlert2
      Swal.fire({
        icon: 'error',
        title: 'त्रुटि',
        text: 'जानकारी सबमिट करने में विफल!',
        confirmButtonText: 'ओके',
      });
    }
  };

  // Function to generate an Excel file
  const generateExcel = (details) => {
    const wb = XLSX.utils.book_new(); // Create a new workbook
    const ws = XLSX.utils.json_to_sheet([details]); // Convert details to sheet

    // Add the sheet to the workbook
    XLSX.utils.book_append_sheet(wb, ws, 'Donation Details');

    // Create an Excel file and download it
    XLSX.writeFile(wb, 'donation_details.xlsx');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://i.postimg.cc/ZRv45PWd/12.jpg)' }}></div>
      <div className="relative z-10 w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-orange-600 mb-4">दान करें</h2>
        <h3 className="text-lg text-center text-gray-600 mb-6">
          सक्रिय सदस्यता के लिए दान करने के लिए
        </h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="title">उपाधी*</label>
            <select
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
            >
              <option value="Mr">श्री</option>
              <option value="Mrs">श्रीमती</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="name">नाम*</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
              placeholder="अपना नाम दर्ज करें"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="mobile">मोबाइल नंबर*</label>
            <input
              id="mobile"
              type="tel"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
              placeholder="+91"
            />
            <small className="text-gray-500">कृपया नंबर सत्यापित करें</small>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">ईमेल आईडी</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
              placeholder="example@gmail.com"
            />
          </div>

          {/* New donation amount input field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="amount">दान राशि*</label>
            <input
              id="amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
              placeholder="राशि दर्ज करें"
            />
          </div>

          <div className="flex items-center mb-4">
            <input type="checkbox" id="agreement" required className="mr-2"/>
            <label htmlFor="agreement" className="text-sm text-gray-600">
              मैं प्रमाणित करता हूँ कि उपरोक्त जानकारी सही है और कोई विसंगति नहीं है।
            </label>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white bg-orange-600 rounded-lg hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            दान करें
          </button>
        </form>
      </div>
    </div>
  );
};

export default DonationForm;
