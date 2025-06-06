import ProfileImage from "./ProfileImage";
import {useState} from "react"

export default function ProfilePicture() {
  
  const userChecker = JSON.parse(localStorage.getItem("LogedUser"));
  const user = userChecker[0];
  
  const [nota, setNota] = useState(0)
  const [stars, setStars] = useState([0,0,0,0,0])

  

  function avaliar(e){
    const value = e.target.dataset.value
    setNota(value)
    const newStars = stars.map((v,i)=>i<value?0:1)
    console.log(newStars)
    setStars(newStars)


  }


  return (
    <>
          <div className="col-lg-8">
            <div className="card card-custom p-4">
              <div className="d-flex align-items-center gap-3">
                <div className="position-relative">
                  <ProfileImage />
                </div>
                <div>
                  <h3 className="mb-0">{user.name}</h3>
                  <p className="mb-1 text-muted">{user.tipo}</p>
                  <div className="d-flex align-items-center gap-2">
                    <div className="container mt-5">
                      <h5>Avalie este perfil:</h5>
                      <div id="rating" className="d-flex gap-2 fs-3">
                        <i className={`bi ${stars[0]?"bi-star":"bi-star-fill"}`} data-value="1" onClick={avaliar}></i>
                        <i className={`bi ${stars[1]?"bi-star":"bi-star-fill"}`} data-value="2"  onClick={avaliar}></i>
                        <i className={`bi ${stars[2]?"bi-star":"bi-star-fill"}`} data-value="3" onClick={avaliar}></i>
                        <i className={`bi ${stars[3]?"bi-star":"bi-star-fill"}`} data-value="4" onClick={avaliar}></i>
                        <i className={`bi ${stars[4]?"bi-star":"bi-star-fill"}`} data-value="5" onClick={avaliar}></i>
                      </div>
                      <p className="mt-2" id="rating-value">
                        Nota: {nota}
                      </p>
                    </div>
                    <img
                      src="https://flagcdn.com/br.svg"
                      width="20"
                      alt="Brasil"
                    />
                  </div>
                  <p className="mt-2">Perfil Público</p>
                </div>
              </div>
            </div>
          </div>
      
    </>
  );
}
