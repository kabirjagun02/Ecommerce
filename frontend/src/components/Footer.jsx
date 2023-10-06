import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-20">
      <div className="container mx-auto flex flex-wrap">
        <div className="w-full md:w-1/3 text-center md:text-left">
          <h5 className="uppercase mb-6">Shop</h5>
          <ul className="mb-4">
            <li className="mt-2"><Link className="hover:underline">Welloo Tools</Link></li>
            <li className="mt-2"><Link className="hover:underline">Inco Tools</Link></li>
            <li className="mt-2"><Link className="hover:underline">Max Tools</Link></li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 text-center md:text-left">
          <h5 className="uppercase mb-6">About</h5>
          <ul className="mb-4">
            <li className="mt-2"><Link className="hover:underline">Our Story</Link></li>
            <li className="mt-2"><Link className="hover:underline">Our Tools</Link></li>
            <li className="mt-2"><Link className="hover:underline">Careers</Link></li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 text-center md:text-left">
          <h5 className="uppercase mb-6">Connect</h5>
          <ul className="mb-4">
            <li className="mt-2"><Link className="hover:underline">Contact Us</Link></li>
            <li className="mt-2"><Link className="hover:underline">FAQ</Link></li>
            <li className="mt-2"><Link className="hover:underline">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-8">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <p>&copy; 2023 OBI EXCEL TOOLS All Rights Reserved.</p>
          </div>
          <div className="w-full md:w-1/2 text-center md:text-right">
            <ul className="flex justify-center md:justify-end">
              <li className="ml-4"><Link><i className="fab fa-facebook-f"></i></Link></li>
              <li className="ml-4"><Link><i className="fab fa-twitter"></i></Link></li>
              <li className="ml-4"><Link><i className="fab fa-instagram"></i></Link></li>
              <li className="ml-4"><Link><i className="fab fa-pinterest-p"></i></Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
