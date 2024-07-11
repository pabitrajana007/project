import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EmployeeDatabase() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Fetch data from JSON server when component mounts
    axios.get('http://localhost:3001/formData')  // Adjust URL as per your json-server setup
      .then(response => {
        setEmployees(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);  // Empty dependency array ensures this effect runs only once

  return (
    <div className="w-screen h-screen bg-gray-100 flex justify-center items-center">
      <div className="w-3/4 p-4 bg-white rounded-md shadow-md">
        <h1 className="text-2xl font-bold mb-4">Employee Database</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border-gray-300 border">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="px-6 py-3 border-r text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 border-r text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 border-r text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 border-r text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Gender</th>
                <th className="px-6 py-3 border-r text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Address</th>
                <th className="px-6 py-3 border-r text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Country</th>
                <th className="px-6 py-3 border-r text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Mobile</th>
                <th className="px-6 py-3 border-r text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Occupation</th>
                <th className="px-6 py-3 border-r text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Education</th>
                <th className="px-6 py-3 border-r text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Nationality</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">Job</th>
              </tr>
            </thead>
            <tbody>
              {employees.map(employee => (
                <tr key={employee.id} className="border-b border-gray-300">
                  <td className="px-6 py-4 whitespace-nowrap">{employee.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{employee.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{employee.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{employee.gender}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{employee.address}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{employee.country}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{employee.mobile}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{employee.occupation}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{employee.education}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{employee.nationality}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{employee.job}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default EmployeeDatabase;
