import addProfile from "../Assets/addprofile.svg";
import mail from "../Assets/addprofile.svg";
import youtube from "../Assets/addprofile.svg";
import insta from "../Assets/addprofile.svg";
import phone from "../Assets/addprofile.svg";
import React , {useState} from "react";
import ModalForm from "./ModalForm";

const ProfileSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [profileData, setProfileData] = useState(null);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleDataSave = (data) => {
    setProfileData(data);
  };

  return (
    <div className="profilecard">
      <div className="profilecard-container">
        <div className="addprofile">
          <div
            className="addprofile-button"
            onClick={() => {
              toggleModal();
            }}
          >
            <img src={addProfile} alt="add profile icon" />
            <span>Add Profile</span>
            
            {showModal && <ModalForm closeModal={toggleModal} saveData={handleDataSave} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
