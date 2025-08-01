import React, { useState } from "react";
import "./RequestForm.css";

const RequestForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    subjectLevel: "",
    preferredDate: "",
    preferredTime: "",
    location: "",
    additionalInfo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    //  Add API call or localStorage logic here
  };

  return (
    <div className="form-page">
      {submitted ? (
        <div className="confirmation">
          <h2>🎉 Request Submitted!</h2>
          <p>Thank you, {formData.fullName.split(" ")[0]}!</p>
          <p>
            Your tutoring request has been received. A tutor will contact you
            shortly.
          </p>
        </div>
      ) : (
        <form className="tutor-form" onSubmit={handleSubmit}>
          <h2>Request a Tutor</h2>

          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject (e.g. Mathematics)"
            value={formData.subject}
            onChange={handleChange}
            required
          />

          <select
            name="subjectLevel"
            value={formData.subjectLevel}
            onChange={handleChange}
            required
          >
            <option value="">Select Subject Level</option>
            <option value="Primary">Primary</option>
            <option value="Secondary">Secondary</option>
            <option value="Tertiary">Tertiary</option>
          </select>

          <input
            type="date"
            name="preferredDate"
            value={formData.preferredDate}
            onChange={handleChange}
            required
          />

          <input
            type="time"
            name="preferredTime"
            value={formData.preferredTime}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="location"
            placeholder="Location (e.g. Ikeja, Lagos)"
            value={formData.location}
            onChange={handleChange}
            required
          />

          <textarea
            name="additionalInfo"
            placeholder="Any additional information or preferences?"
            value={formData.additionalInfo}
            onChange={handleChange}
            rows={3}
          ></textarea>

          <button type="submit">Submit Request</button>
        </form>
      )}
    </div>
  );
};

export default RequestForm;
