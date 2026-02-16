import { react, useState } from 'react'
import axios from 'axios';


function FeedbackForm() {


  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    rating: 1

  });

  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });

  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/feedback", form);
      setSuccess("Feedback submitted successfully!");
      setForm({ name: "", email: "", message: "", rating: 1 });

    } catch (error) {
      console.log("Feedback Form Error", error)

    }
  }
  return (

    <div className='bg-white p-6 rounded-xl shadow-md'>
      <h2 className='text-lg font-semibold mb-4'>Submit Feedback</h2>
    
    <form onSubmit={handleSubmit} className='space-y-4'>
    <input type='text' 
    name='name' 
    placeholder='Full Name' 
    value={form.name} 
    onChange={handleChange} className='w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400' 
    required/>

    <input type ='email'
    name='email'
    placeholder='Email'
    value={form.email}
    onChange={handleChange}
    className='w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400' 
    required/>

    <textarea name='message'
    placeholder='Feedback Message'
    value={form.message}
    onChange={handleChange}
    className='w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400' 
    required/>

    <select name ='rating'
    value={form.rating}
    onChange={handleChange}
    className='w-full border rounded-lg p-2'>
      {[1,2,3,4,5].map(num => (
        <option key = {num} value = {num} >{num} </option>
      ))}
      </select>

      <button type ='submit'
      className='w-full bg-gradient-to-r from-blue-500 to-indigo-700 text-white py-2 rounded-lg 
      hover:from-blue-600 hover:to-indigo-800 transition-all duration-300 ease-in-out

'>Submit</button>
      </form>

      {success && ( <p className='mt-3 text-green-300 font-medium'>{success}
        
      </p>)}
      
    </div>
  )
}

export default FeedbackForm
