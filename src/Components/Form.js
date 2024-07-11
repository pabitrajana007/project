import React, { useState } from 'react';
import { TiTick } from "react-icons/ti";

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    email: '',
    address: '',
    currentAddress: '',
    country: '',
    tel: '',
    occupation: '',
    education: '',
    nationality: '',
    job: ''
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/formData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to save form data');
      }

      alert('Form data submitted successfully!');
      // Clear form fields after successful submission
      setFormData({
        name: '',
        gender: '',
        email: '',
        address: '',
        currentAddress: '',
        country: '',
        tel: '',
        occupation: '',
        education: '',
        nationality: '',
        job: ''
      });
    } catch (error) {
      console.error('Error saving form data:', error);
      alert('Failed to submit form data. Please try again later.');
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className='w-screen h-screen bg-sky-100 flex justify-center items-center'> 
      <div className='lg:w-3/4 md:w-2/3 sm:w-11/12 w-full p-4 relative'>
        <div className='flex justify-start mb-4'>
          <TiTick className='bg-blue-500 absolute -left-1 text-white rounded-md' size={70} />
        </div>
        <div className='bg-slate-300 rounded-md shadow-md'>
          <form className='p-6 rounded-md' onSubmit={handleSubmit}>
            <h1 className='text-2xl font-bold mb-4'>FORM B</h1>
            <div className='flex flex-col space-y-4'>
              <div className='p-4 rounded-md flex flex-col border-2'>
                <p className='text-blue-600 font-bold mb-4'>Personal Information</p>
                <div className='mx-auto table text-left flex flex-col space-y-2'>
                  <div className='my-2 table-row'>
                    <label htmlFor='name' className='table-cell'>Name *</label>
                    <input type='text' placeholder='Enter name' id='name' name='name' className='table-cell w-40 rounded-md indent-2 p-1 border' onChange={handleChange} value={formData.name} />
                  </div>
                  <div className='my-2 table-row'>
                    <label htmlFor='gender' className='table-cell'>Gender *</label>
                    <select id='gender' name='gender' className='table-cell w-40 rounded-md indent-2 p-1 border' onChange={handleChange} value={formData.gender} required>
                      <option value=''>Select Gender</option>
                      <option value='male'>Male</option>
                      <option value='female'>Female</option>
                      <option value='others'>Others</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className='p-2 rounded-md'>
                <p className='text-blue-600 font-bold mb-4'>Contact Details</p>
                <div className='mx-auto table text-left flex flex-col space-y-2'>
                  <div className='table-row'>
                    <label htmlFor='email' className='table-cell'>Email *</label>
                    <input type='email' placeholder='Enter email' id='email' name='email' className='table-cell rounded-md indent-2 p-1 border' onChange={handleChange} value={formData.email} required />
                  </div>
                  <div className='table-row'>
                    <label htmlFor='address' className='table-cell'>Permanent Address *</label>
                    <input type='text' placeholder='Enter address' id='address' name='address' className='table-cell rounded-md indent-2 p-1 border' onChange={handleChange} value={formData.address} required />
                  </div>
                  <div className='table-row'>
                    <label htmlFor='currentAddress' className='table-cell'>Current Address</label>
                    <input type='text' placeholder='Enter address' id='currentAddress' name='currentAddress' className='table-cell rounded-md indent-2 p-1 border' onChange={handleChange} value={formData.currentAddress} />
                  </div>
                  <div className='table-row'>
                    <label htmlFor='country' className='table-cell'>Country *</label>
                    <input type='text' placeholder='Enter country' id='country' name='country' className='table-cell rounded-md indent-2 p-1 border' onChange={handleChange} value={formData.country} required />
                  </div>
                  <div className='table-row'>
                    <label htmlFor='tel' className='table-cell'>Mobile Number *</label>
                    <input type='tel' placeholder='Enter mobile number' id='tel' name='tel' className='table-cell rounded-md indent-2 p-1 border' onChange={handleChange} value={formData.tel} required />
                  </div>
                  <div className='table-row'>
                    <label htmlFor='occupation' className='table-cell'>Occupation *</label>
                    <input type='text' placeholder='Enter occupation' id='occupation' name='occupation' className='table-cell rounded-md indent-2 p-1 border' onChange={handleChange} value={formData.occupation} required />
                  </div>
                  <div className='table-row'>
                    <label htmlFor='education' className='table-cell'>Educational Qualifications *</label>
                    <input type='text' placeholder='Enter educational qualifications' id='education' name='education' className='table-cell rounded-md indent-2 p-1 border' onChange={handleChange} value={formData.education} required />
                  </div>
                  <div className='table-row'>
                    <label htmlFor='nationality' className='table-cell'>Nationality *</label>
                    <input type='text' placeholder='Enter nationality' id='nationality' name='nationality' className='table-cell rounded-md indent-2 p-1 border' onChange={handleChange} value={formData.nationality} required />
                  </div>
                  <div className='table-row'>
                    <label htmlFor='job' className='table-cell'>Preferred Job</label>
                    <select id='job' name='job' className='table-cell rounded-md indent-2 p-1 border' onChange={handleChange} value={formData.job} required>
                      <option value=''>Select Job</option>
                      <option value='hardware Engineer'>Hardware Engineer</option>
                      <option value='system engineer'>System Engineer</option>
                      <option value='software engineer'>Software Engineer</option>
                      <option value='care giver'>Care Giver</option>
                    </select>
                  </div>
                </div>
              </div>
              <button type='submit' className='bg-blue-500 text-white py-2 px-4 rounded-md'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
