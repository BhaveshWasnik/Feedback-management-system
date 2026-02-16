function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-indigo-700 text-white text-center py-2">
      <p className="text-sm">
        © {new Date().getFullYear()} Feedback Management System | 
        <span className="font-semibold ml-1">Powered by Bhavesh Wasnik</span>
      </p>
    </footer>
  );
}

export default Footer;
