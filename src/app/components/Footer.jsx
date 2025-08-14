import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex flex-row justify-between space-y-2">
          <p className="text-gray-400 text-sm -ml-30">
            Made with Next.js, React & Tailwind CSS
          </p>
          <p className="text-gray-400 -mr-35">
            © {currentYear} Jagan Reddy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
