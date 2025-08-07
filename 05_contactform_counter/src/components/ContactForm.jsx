import { useState } from 'react';

function ContactForm() {

  const [formData, setFormData] = useState({name: '', email: '', message: ''});
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState()

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
     setError(''); // clear error as user types
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {

      alert("Error, Please fill in all fields.")
      setSubmitted(false);
      setError('Please fill in all fields.');      
      return;
    }
    

    console.log("Form Data Submitted:", formData);
    setSubmitted(true);

    
  };

  const resetform = () => {
    // Optional: reset form
    setFormData({ name: '', email: '', message: '' });
    setSubmitted(false);
    setError('');
    setTimeout(() => {
    console.log("Form has been reset", formData);
    alert('form has been reset')
  }, 100);
    
  }

  return (
    <div className="max-w-1/2 mx-auto mt-10 p-6 bg-white shadow rounded-xl">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
        ></textarea>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Submit
        </button>
        <button
          onClick={resetform}
          type="button"
          className="bg-blue-600 text-white ml-2 px-4 py-2 rounded hover:bg-blue-700">
          Reset
        </button>
      </form>

      { submitted && 
        <p className="text-green-600 mt-4">Thank you! Your message was sent.</p>
      }
      { error && 
        <p className="text-red-600 mt-2">{error}</p>
      }
    </div>
  );
}

export default ContactForm;
