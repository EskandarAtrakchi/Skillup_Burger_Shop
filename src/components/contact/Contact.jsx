import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the fields are empty
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all the fields before submitting.');
      return;
    }

    // Handle form submission logic here 
    // in the lecture course the guy said no database required for now (e.g., send data to server) so I will just log the data to the console
    //the video is here https://ibm.box.com/s/nlo8r939muitapht5ontxjgdms5bp8yb 
    console.log('Form submitted:', formData);

    // Alert user about successful submission
    alert('Form submitted successfully!');

    // Redirect to the home page
    setIsSubmitted(true);
    navigate('/');
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label>Message</label>
          <textarea name="message" value={formData.message} onChange={handleChange} />
        </div>
        {/* Popup for confirmation or additional information */}
        <Popup trigger={<button type="submit">Send</button>}>
          <div>
            <h2>Your message is important to us!</h2>
            <p>Try to fill out the fields before submission!</p>
          </div>
        </Popup>
      </form>
    </div>
  );
};

export default Contact;