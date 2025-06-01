import { useState } from "react";

export default function LoginOrProfile() {
  const user = JSON.parse(localStorage.getItem("LogedUser"));

  const [User, setUser] = useState(user);

  return (
    <>
      <div className="d-flex" id="loginOrLoged">
        {!User ? (
          <a
            type="button"
            href="/src/login/index.html"
            className="btn personal_btn me-2"
          >
            Login
          </a>
        ) : (
           <li className="nav-item dropdown list-unstyled">
          <a
            className="nav-link dropdown-toggle btn profile_img"
            data-bs-toggle="dropdown"
            role="button"
            aria-expanded="false"
            id="profile_img"
          >
            <img src="/assets/img/ImagemUser.jpg" alt="" />
          </a>
          <ul className="dropdown-menu ">
            <div id="profile_list"></div>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
                <button
                    type="button"
                    className="btn personal_btn me-2"
                    onClick={() => {
                    localStorage.removeItem("LogedUser");
                    setUser(null);
                    window.location.href = "/src/login/index.html";
                    }}
                >
                    Logout
                </button>
              {/* <button
                className="dropdown-item"
                role="button"
                id="logout"
                onclick="logout()"
              >
                Logout
              </button> */}
            </li>
          </ul>
        </li>
          
          
        )}


       
      </div>
    </>
  );
}
