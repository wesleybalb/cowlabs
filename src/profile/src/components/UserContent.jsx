import ProfilePicture from "./ProfilePicture";
import Trophies from "./Trophies";
import UserProgress from "./UserProgress";

export default function UserContent() {
  const picProfile = {
    width: "150px",
    height: "150px",
  };

  return (
    <>
      <div className="container py-4 ">
        <div className="row">
  
          <div className="col-lg-8">
            <ProfilePicture />
            <Trophies />
          </div>
  
          <div className="col-lg-4"><UserProgress/></div>
        </div> 
        
      </div>
    </>
  );
}
