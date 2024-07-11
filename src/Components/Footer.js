import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-sky-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4"> 
          <div className="w-full md:w-1/3 px-4">
            <h2 className="text-lg font-semibold mb-4">Company</h2>
            <ul>
              <li><a href="https://www.mega.co.jp/en/" className="hover:underline">About Us</a></li>
              <li><a href="https://www.mega.co.jp/en/service/sup_human.html" className="hover:underline">Careers</a></li>
              <li><a href="https://www.mega.co.jp/en/about/companys-outline/" className="hover:underline">Press</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 px-4 mt-8 md:mt-0">
            <h2 className="text-lg font-semibold mb-4">Resources</h2>
            <ul>
              <li><a href="https://www.mega.co.jp/en/about/companys-outline/" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">Help Center</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 px-4 mt-8 md:mt-0">
            <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
            <ul>
              <li><a href="mailto:@gmail.com" className="hover:underline">Email: @email.com</a></li>
              <li><a href="tel:+81-354582311" className="hover:underline">Phone: +81-354582311</a></li>
              <li><a href="#" className="hover:underline">14F, Shibuya Markcity West<br></br> 1-12-1 Dogenzaka Shibuya-ku, Tokyo, Japan</a></li>
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
