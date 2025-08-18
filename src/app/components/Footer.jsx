const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex flex-col items-center text-center gap-2 md:flex-row md:justify-between md:text-left flex-wrap">
          <p className="text-gray-400 text-sm">
            Made with Next.js, React & Tailwind CSS
          </p>
          <p className="text-gray-400 text-sm">
            © {currentYear} Jagan Reddy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
