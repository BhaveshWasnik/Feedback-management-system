import {Routes,Route} from "react-router-dom"
import Navbar from "./components/Navbar";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import ProductList from "./pages/ProductList";

function App() {
  return (
    <div className="min-h-screen bg-gray-300">
      <Navbar />
      <div className="max-w-5xl mx-auto p-6 space-y-10">
        <Routes>
          <Route path="/" element={<FeedbackForm />} />
          <Route path="/feedbacks" element={<FeedbackList />} />
          <Route path="/products" element={<ProductList />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
