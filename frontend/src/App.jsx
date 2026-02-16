import {Routes,Route} from "react-router-dom"
import Navbar from "./components/Navbar";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import ProductList from "./pages/ProductList";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-300">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<FeedbackForm />} />
          <Route path="/feedbacks" element={<FeedbackList />} />
          <Route path="/products" element={<ProductList />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
