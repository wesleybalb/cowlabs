import { useState } from "react";
import NavUserImg from "./NavUserImg.jsx";
import LogoutDialog from "./LogoutDialog.jsx";

export default function LoginOrProfile() {
  const user = JSON.parse(localStorage.getItem("LogedUser"));
  const [User, setUser] = useState(user);
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);

  const handleLogout = () => {
    setShowLogoutDialog(true);

    // Espera um pouco para mostrar o diálogo antes de sair
    setTimeout(() => {
      localStorage.removeItem("LogedUser");
      setUser(null);
      window.location.href = "/src/login/index.html";
    }, 2000); // Exibe o diálogo por 2 segundos
  };

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
              <NavUserImg userType={`${user[0].tipo}`} />
            </a>
            <ul className="dropdown-menu">
              <div id="profile_list"></div>
              <li>
                <a
                  className="dropdown-item text-end"
                  href="../demandas/index.html"
                >
                  Ver Demandas
                </a>
              </li>
              <li>
                <a className="dropdown-item text-end" href="#">
                  {user[0].name}
                </a>
              </li>
              <li>
                <a className="dropdown-item text-end" href="#">
                  {user[0].curso}
                </a>
              </li>
              <li>
                <a
                  className={`${user[0].tipo} dropdown-item text-end`}
                  href={
                    user[0].tipo === "Admin"
                      ? "/src/admin/index.html"
                      : "#"
                  }
                >
                  {user[0].tipo}
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <button
                  type="button"
                  className="btn personal_btn me-2"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            </ul>
          </li>
        )}
      </div>

      {/* Componente de diálogo */}
      <LogoutDialog show={showLogoutDialog} onClose={() => setShowLogoutDialog(false)} />
    </>
  );
}
