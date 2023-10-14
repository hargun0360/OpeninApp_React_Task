import React, { useState } from "react";

const ModalForm = ({ closeModal, saveData }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    instagram: "",
    youtube: "",
  });

  const [activeTab, setActiveTab] = useState("Basic");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  const handleSubmit = () => {
    saveData(formData);
    closeModal();
  };

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
          <div className="tabs">
            <button
              className={activeTab === "Basic" ? "active" : ""}
              onClick={() => setActiveTab("Basic")}
              style={{ backgroundColor: "white" }}
            >
              Basic
            </button>
            <button
              className={activeTab === "Social" ? "active" : ""}
              onClick={() => setActiveTab("Social")}
              style={{ backgroundColor: "white" }}
            >
              Social
            </button>
          </div>
          {activeTab === "Basic" && (
            <div className="basic-form">
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
              </div>
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
              </div>

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
              </div>
            </div>
          )}
          {activeTab === "Social" && (
            <div className="social-form">
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
