import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
  Feedback Management System
</Link>

        <div className="space-x-6">
          <Link to="/" className="hover:underline">
            Submit Feedback
          </Link>

          <Link to="/feedbacks" className="hover:underline">
            View Feedbacks
          </Link>

          <Link to="/products" className="hover:underline">
            Products
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
