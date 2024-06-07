import { FaLinkedin, FaInstagram, FaDiscord } from 'react-icons/fa';
import { SiX } from 'react-icons/si';

const Footer: React.FC = () => {
  return (
    <div className="bg-gradient-to-t from-white to-orange-200 text-center py-8">
      <h2 className="text-4xl font-bold mb-2">TOINGG</h2>
      <p className="text-xl mb-4 px-6 text-white font-medium pt-4 pb-8">We are here to grow your business ❤️</p>
      <ul className="space-y-2 mb-8">
        <li><a href="#" className="text-gray-700 hover:text-gray-900 pt-4 text-xl font-medium">Terms and conditions</a></li>
        <li><a href="#" className="text-gray-700 hover:text-gray-900 pt-4 text-xl font-medium">Privacy policy</a></li>
        <li><a href="#" className="text-gray-700 hover:text-gray-900 pt-4 text-xl font-medium">Help center</a></li>
        <li><a href="#" className="text-gray-700 hover:text-gray-900 pt-4 text-xl font-medium">API docs</a></li>
        <li><a href="#" className="text-gray-700 hover:text-gray-900 pt-4 text-xl font-medium">Careers</a></li>
      </ul>
      <div className="flex justify-center space-x-6 mb-8 py-12 ">
        <a href="#" className="text-blue-600 hover:text-blue-800"><FaLinkedin size={24} /></a>
        <a href="#" className="text-pink-600 hover:text-pink-800"><FaInstagram size={24} /></a>
        <a href="#" className="text-black hover:text-gray-800"><SiX size={24} /></a>
        <a href="#" className="text-blue-400 hover:text-blue-600"><FaDiscord size={24} /></a>
      </div>
      <p className="text-sm text-gray-500">Copyright © 2024 Toingg</p>
      <p className="text-sm text-gray-500 mb-6">Inc. All rights reserved.</p>
      <p className="text-sm text-gray-700">
        Join our community <a href="#" className="text-black hover:text-gray-900"><FaDiscord size={18} className="inline" /></a>
      </p>
    </div>
  );
};

export default Footer;
