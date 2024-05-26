import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white py-4">
      <div className="max-w-6xl mx-auto flex justify-between">
        <div>
          <h4 className="font-bold">All-in</h4>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-gray-700">
              Facebook
            </a>
            <a href="https://x.com/home" className="text-gray-700">
              Twitter
            </a>
            <a href="#" className="text-gray-700">
              Instagram
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-bold">Markets</h4>
          <ul>
            <li>
              <a href="#" className="text-gray-700">
                Elections
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700">
                Football
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold">About us</h4>
          <ul>
            <li>
              <a href="#" className="text-gray-700">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700">
                Blog
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
