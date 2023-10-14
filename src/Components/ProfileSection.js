import  addProfile  from "../Assets/addprofile.svg";
import  mail  from "../Assets/addprofile.svg";
import  youtube  from "../Assets/addprofile.svg";
import  insta  from "../Assets/addprofile.svg";
import  phone from "../Assets/addprofile.svg";

const ProfileSection = ({ modalOpen, userData }) => {
  return (
    <div className="profilecard">
      <div className="profilecard-container">
        {!userData?.name ? (
          <div className="addprofile">
            <div
              className="addprofile-button"
              onClick={() => {
                modalOpen(true);
              }}
            >
              <img src={addProfile} alt="add profile icon" />
              <span>Add Profile</span>
            </div>
          </div>
        ) : (
          <div className="userinfo">
            <div className="userinfo-name">{userData.name}</div>
            <div className="userinfo-data">
              <div className="userinfo-left">
                <div>
                  <img
                    src={phone}
                    alt="phone icon"
                    className="userinfo-data-img"
                  />

                  <a
                    href={`tel:${userData.number}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="userinfo-data-text">+{userData.number}</p>
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
                    href={"mailto:" + userData.email}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="userinfo-data-text">{userData.email}</p>
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
                      userData.insta.split("/")[
                        userData.insta.split("/").length - 1
                      ]
                    }`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="userinfo-data-text">
                      {
                        userData.insta.split("/")[
                          userData.insta.split("/").length - 1
                        ]
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
                    href={userData.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="userinfo-data-text">
                      {
                        userData.youtube.split("/")[
                          userData.youtube.split("/").length - 1
                        ]
                      }
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileSection;
