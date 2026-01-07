import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    clientName: "",
    projectName: "",
    phoneNumber: "",
    projectDescription: "",
    budget: "",
    relevantLinks: "",
  });

  const [status, setStatus] = useState(""); // success or error message

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple front-end validation
    for (let key in formData) {
      if (!formData[key]) {
        setStatus("Please fill all fields");
        return;
      }
    }

    try {
      const response = await fetch("https://your-backend-api.com/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Enquiry submitted successfully!");
        setFormData({
          clientName: "",
          projectName: "",
          phoneNumber: "",
          projectDescription: "",
          budget: "",
          relevantLinks: "",
        });
      } else {
        setStatus("Failed to submit enquiry. Try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("An error occurred. Try again later.");
    }
  };

  return (
    <div className="contact-form-container">
      <h2>Project Enquiry Form</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="clientName"
          placeholder="Client Name"
          value={formData.clientName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="projectName"
          placeholder="Project Name"
          value={formData.projectName}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        <textarea
          name="projectDescription"
          placeholder="Project Description"
          value={formData.projectDescription}
          onChange={handleChange}
        ></textarea>
        <input
          type="text"
          name="budget"
          placeholder="Budget"
          value={formData.budget}
          onChange={handleChange}
        />
        <input
          type="text"
          name="relevantLinks"
          placeholder="Relevant Links (GitHub, Drive, Figma...)"
          value={formData.relevantLinks}
          onChange={handleChange}
        />
        <button type="submit">Submit Enquiry</button>
        {status && <p className="status-message">{status}</p>}
      </form>
    </div>
  );
};

export default ContactForm;
