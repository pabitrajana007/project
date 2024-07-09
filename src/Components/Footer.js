import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-sky-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4"> 
          <div className="w-full md:w-1/3 px-4">
            <h2 className="text-lg font-semibold mb-4">Company</h2>
            <ul>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Press</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 px-4 mt-8 md:mt-0">
            <h2 className="text-lg font-semibold mb-4">Resources</h2>
            <ul>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">Help Center</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 px-4 mt-8 md:mt-0">
            <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
            <ul>
              <li><a href="mailto:Aryan@gmail.com" className="hover:underline">Email: Aryan@gmail.com</a></li>
              <li><a href="tel:+911406826" className="hover:underline">Phone: +911406826</a></li>
              <li><a href="#" className="hover:underline">Netaji Subhash Place, New Delhi</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; COPYRIGHT© MEGA.GROUP. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
