import "./profile.css";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import EditIcon from "@material-ui/icons/Edit";
export default function Profile() {
  return (
    <>
      <div className="profile">
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="assets/post/8.jpeg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="assets/person/6.jpeg"
                alt=""
              />
              <ul className="profileRightItem">
                <EditIcon className="profileRightIcon" />
                <span className="profileRightIconText">Edit</span>
              </ul>
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">
                Addis Ababa Institute of Technology
              </h4>
              <span className="profileInfoDesc">
                Seek Wisdom, Elevate Your Intellect and Serve Humanity.
              </span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar />
          </div>
        </div>
      </div>
    </>
  );
}
