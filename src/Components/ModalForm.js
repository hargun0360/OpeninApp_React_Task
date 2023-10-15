import React, { useState } from "react";

// Functional component to display a modal form with two tabs: Basic and Social.
const ModalForm = ({ closeModal, saveData }) => {
  // State hook to manage form data.
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    instagram: "",
    youtube: "",
  });

  // State hook to manage the active tab: Basic or Social.
  const [activeTab, setActiveTab] = useState("Basic");
  
  // State hook to manage validation errors.
  const [validationErrors, setValidationErrors] = useState({});

  // Regular expression patterns for email and phone validation.
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  const phonePattern = /^\d{10}$/;

  // Function to handle form input changes and update state.
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Function to prevent modal close when the modal itself is clicked.
  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  // Function to validate form data before submission.
  const validateForm = () => {
    let errors = {};

    // Validate email format.
    if (!emailPattern.test(formData.email)) {
      errors.email = "Invalid email address.";
    }
    
    // Validate phone format.
    if (!phonePattern.test(formData.phone)) {
      errors.phone = "Invalid phone number.";
    }

    // Ensure name is provided.
    if (formData.name === "" || formData.name === undefined) {
      errors.name = "Name requiired";
    }
    
    // Update state with any validation errors.
    setValidationErrors(errors);
    
    // If no errors, form is valid.
    return Object.keys(errors).length === 0;
  };
  
  // Function to handle form submission.
  const handleSubmit = () => {
    // Only proceed if form is valid.
    if (validateForm()) {
      // Send data to parent and close modal.
      saveData(formData);
      closeModal();
    }
  };

  // Render the modal form with tabs and input fields.
  return (
    <>
      <div className="modal-container" onClick={closeModal}>
        <div className="modal-backdrop"></div>
        <div className="modal-form" onClick={handleModalClick}>
          <div className="modal-header">
            <h4>Add New Profile</h4>
            <button className="close-button" onClick={closeModal}>
              X
            </button>
          </div>
          {/* Tab navigation */}
          <div className="tabs">
            {/* Basic Info Tab */}
            <button
              className={activeTab === "Basic" ? "active" : ""}
              onClick={() => setActiveTab("Basic")}
              style={{ backgroundColor: "white" }}
            >
              Basic
            </button>
            {/* Social Info Tab */}
            <button
              className={activeTab === "Social" ? "active" : ""}
              onClick={() => setActiveTab("Social")}
              style={{ backgroundColor: "white" }}
            >
              Social
            </button>
          </div>
          {/* Basic Info Form Section */}
          {activeTab === "Basic" && (
            <div className="basic-form">
              {/* Each input wrapper contains a label, an input field, and a possible error message */}
              {/* Name Field */}
              <div className="input-wrapper">
                <label>Name*</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Eg. John Doe"
                  required
                />
                {validationErrors.name && <p className="error-text">{validationErrors.name}</p>}
              </div>
              {/* Email Field */}
              <div className="input-wrapper">
                <label>Email*</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Eg. John@xyz.com"
                  required
                />
                 {validationErrors.email && <p className="error-text">{validationErrors.email}</p>}
              </div>
              {/* Phone Field */}
              <div className="input-wrapper">
                <label>Phone*</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Eg. 9123456789"
                  required
                />
                {validationErrors.phone && <p className="error-text">{validationErrors.phone}</p>}
              </div>
            </div>
          )}
          {/* Social Info Form Section */}
          {activeTab === "Social" && (
            <div className="social-form">
              {/* Instagram Field */}
              <div className="input-wrapper">
                <label>Instagram Link (Optional)</label>
                <input
                  type="text"
                  name="instagram"
                  value={formData.instagram}
                  onChange={handleChange}
                  placeholder="Eg. ..instagram.com/username"
                />
              </div>
              {/* YouTube Field */}
              <div className="input-wrapper">
                <label>YouTube Link (Optional)</label>
                <input
                  type="text"
                  name="youtube"
                  value={formData.youtube}
                  onChange={handleChange}
                  placeholder="Eg. ..youtube.com/username"
                />
              </div>
            </div>
          )}
          {/* Form Footer with Back and Done buttons */}
          <div className="modal-footer">
            <button
              className="back-button"
              onClick={() => setActiveTab("Basic")}
            >
              Back
            </button>
            <button className="done-button" onClick={handleSubmit}>
              Done
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalForm;
