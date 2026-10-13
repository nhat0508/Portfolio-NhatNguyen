import Link from "next/link";
import dayjs from 'dayjs';
import { SocialNetworkIcons } from '../SocialNetwork';

const Footer = () => {
  return (
    <footer className="bg-slate-200 dark:bg-slate-800 text-gray-700 dark:text-gray-300 py-12">
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Quick Links Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/#navbar" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm">Home</Link>
            </li>
            <li>
              <Link href="/#projects" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm">Projects</Link>
            </li>
            <li>
              <Link href="/#certificates" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm">Certificates</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm">Contact</Link>
            </li>
          </ul>
        </div>
        
        {/* Social Media Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
          <SocialNetworkIcons size={24} className="flex space-x-4" />
        </div>
        
        {/* Contact Information Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-indigo-600 dark:text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span>nhat.nguyen@seamk.fi</span>
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-indigo-600 dark:text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5z" />
              </svg>
              <span>Finland</span>
            </li>
          </ul>
        </div>
        
      </div>
      
      {/* Divider */}
      <div className="mt-12 border-t border-gray-300 dark:border-gray-700"></div>
      
      {/* Bottom Section */}
      <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
        © {dayjs().year()} <span className="font-semibold">Nhat Nguyen</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
