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
      <div className="container py-5">
        <div className="row g-4">
          <ProfilePicture />
          <Trophies />

         
          <UserProgress/>
        </div> 
        
      </div>
    </>
  );
}
