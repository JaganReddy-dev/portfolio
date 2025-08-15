const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex flex-col text-center md:flex-row md:justify-between space-y-2">
          <p className="text-gray-400 text-sm md:-ml-30">
            Made with Next.js, React & Tailwind CSS
          </p>
          <p className="text-gray-400 md:-mr-35">
            © {currentYear} Jagan Reddy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
