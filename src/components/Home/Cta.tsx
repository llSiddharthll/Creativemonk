import React from 'react';
import { FaFirefox, FaGithub, FaInstagram, FaTwitter, FaFacebook, FaGoogle } from 'react-icons/fa';

const Cta: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] bg-gradient-to-r from-white to-indigo-100 p-6 rounded-lg shadow-lg">
      <div className="flex space-x-4 mb-6">
        <FaFirefox className="text-3xl text-red-500" />
        <FaGithub className="text-3xl text-gray-800" />
        <FaInstagram className="text-3xl text-pink-500" />
        <FaTwitter className="text-3xl text-blue-400" />
        <FaFacebook className="text-3xl text-blue-600" />
        <FaGoogle className="text-3xl text-red-600" />
      </div>
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Easily Bring AI in Your Workflow</h2>
      <p className="text-gray-600 text-center max-w-md mb-6">
        There are many variations of passages of Lorem Ipsum available but the majority have suffered
        alteration in some form, by more and more injected humour.
      </p>
      <button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition">
        Get Started for Free
      </button>
    </div>
  );
};

export default Cta;