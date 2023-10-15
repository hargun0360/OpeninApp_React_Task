import addProfile from "../Assets/addprofile.svg";
import mail from "../Assets/mail.svg";
import youtube from "../Assets/youtube.svg";
import insta from "../Assets/insta.svg";
import phone from "../Assets/phone.jpg";
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
    console.log(data);
  };

  return (
    <div className="profilecard">
      <div className="profilecard-container">
        {!profileData && !(profileData?.name !== undefined && profileData.name !== null) ? <div className="addprofile">
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
        </div> : <div className="userinfo">
            <div className="userinfo-name">{profileData?.name}</div>
            <div className="userinfo-data">
              <div className="userinfo-left">
                <div>
                  <img
                    src={phone}
                    alt="phone icon"
                    className="userinfo-data-img"
                  />

                  <a
                    href={`tel:${profileData?.phone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="userinfo-data-text">{profileData?.phone}</p>
                  </a>
                </div>
                <div>
                  <img
                    src={mail}
                    className="userinfo-data-img"
                    style={{ backgroundColor: "rgba(255, 233, 236, 1)" }}
                    alt="mail icon"
                  />
                  <a
                    href={"mailto:" + profileData?.email}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="userinfo-data-text">{profileData?.email}</p>
                  </a>
                </div>
              </div>
              <div className="userinfo-right">
                <div>
                  <img
                    src={insta}
                    alt="insta icon"
                    className="userinfo-data-img"
                    style={{
                      backgroundColor: "rgba(255, 233, 236, 1)",
                    }}
                  />

                  <a
                    href={`https://instagram.com/${
                      profileData?.instagram?.split("/")[
                        profileData?.instagram?.split("/").length - 1
                      ]
                    }`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="userinfo-data-text">
                      {
                        profileData?.instagram ?
                        profileData?.instagram?.split("/")[
                          profileData?.instagram?.split("/").length - 1
                        ] : "NA"
                      }
                    </p>
                  </a>
                </div>
                <div>
                  <img
                    src={youtube}
                    alt=""
                    className="userinfo-data-img"
                    style={{
                      backgroundColor: "rgba(255, 233, 236, 1)",
                    }}
                  />

                  <a
                    href={profileData?.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="userinfo-data-text">
                      {
                        profileData?.youtube ? 
                        profileData?.youtube?.split("/")[
                          profileData?.youtube?.split("/").length - 1
                        ] : "NA"
                      }
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
