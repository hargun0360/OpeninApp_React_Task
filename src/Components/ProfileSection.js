import React, { useState } from "react";
import addProfile from "../Assets/addprofile.svg";
import mail from "../Assets/mail.svg";
import youtube from "../Assets/youtube.svg";
import insta from "../Assets/insta.svg";
import phone from "../Assets/phone.jpg";
import ModalForm from "./ModalForm";

const ProfileSection = () => {
  // State to manage the visibility of modal
  const [showModal, setShowModal] = useState(false);
  // State to manage the profile data
  const [profileData, setProfileData] = useState(null);

  // Function to toggle modal visibility
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  // Function to handle saved data from modal
  const handleDataSave = (data) => {
    setProfileData(data);
    console.log(data);
  };

  return (
    <div className="profilecard">
      <div className="profilecard-container">
        {/* Check if profileData is null or name is empty and display add profile section */}
        {!profileData && !(profileData?.name !== undefined && profileData.name !== null) ? 
          <div className="addprofile">
            {/* Button to open the modal form */}
            <div className="addprofile-button" onClick={toggleModal}>
              <img src={addProfile} alt="add profile icon" />
              <span>Add Profile</span>
              {/* Conditional rendering of ModalForm */}
              {showModal && <ModalForm closeModal={toggleModal} saveData={handleDataSave} />}
            </div>
          </div>
        : 
          <div className="userinfo">
            {/* Display user name */}
            <div className="userinfo-name">{profileData?.name}</div>
            <div className="userinfo-data">
              {/* Display contact details: phone and email */}
              <div className="userinfo-left">
                <div>
                  <img src={phone} alt="phone icon" className="userinfo-data-img" />
                  {/* Clicking phone number will open phone call */}
                  <a href={`tel:${profileData?.phone}`} target="_blank" rel="noopener noreferrer">
                    <p className="userinfo-data-text">{profileData?.phone}</p>
                  </a>
                </div>
                <div>
                  <img src={mail} className="userinfo-data-img" style={{ backgroundColor: "rgba(255, 233, 236, 1)" }} alt="mail icon" />
                  {/* Clicking email will open email client */}
                  <a href={"mailto:" + profileData?.email} target="_blank" rel="noopener noreferrer">
                    <p className="userinfo-data-text">{profileData?.email}</p>
                  </a>
                </div>
              </div>
              {/* Display social media details: Instagram and Youtube */}
              <div className="userinfo-right">
                <div>
                  <img src={insta} alt="insta icon" className="userinfo-data-img" style={{ backgroundColor: "rgba(255, 233, 236, 1)" }} />
                  {/* Clicking Instagram username will redirect to Instagram page */}
                  <a href={`https://instagram.com/${profileData?.instagram?.split("/")[profileData?.instagram?.split("/").length - 1]}`}
                    target="_blank" rel="noopener noreferrer">
                    <p className="userinfo-data-text">
                      {profileData?.instagram ? profileData?.instagram?.split("/")[profileData?.instagram?.split("/").length - 1] : "NA"}
                    </p>
                  </a>
                </div>
                <div>
                  <img src={youtube} alt="youtube icon" className="userinfo-data-img" style={{ backgroundColor: "rgba(255, 233, 236, 1)" }} />
                  {/* Clicking Youtube username will redirect to Youtube page */}
                  <a href={profileData?.youtube} target="_blank" rel="noopener noreferrer">
                    <p className="userinfo-data-text">
                      {profileData?.youtube ? profileData?.youtube?.split("/")[profileData?.youtube?.split("/").length - 1] : "NA"}
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>}
      </div>
    </div>
  );
};

export default ProfileSection;
