import ProfileImage from "./ProfileImage";

export default function ProfilePicture() {
  


  const userChecker = JSON.parse(localStorage.getItem("LogedUser"));
  const user = userChecker[0];
  

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
                        <i className="bi bi-star" data-value="1"></i>
                        <i className="bi bi-star" data-value="2"></i>
                        <i className="bi bi-star" data-value="3"></i>
                        <i className="bi bi-star" data-value="4"></i>
                        <i className="bi bi-star" data-value="5"></i>
                      </div>
                      <p className="mt-2" id="rating-value">
                        Nota: 0
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
