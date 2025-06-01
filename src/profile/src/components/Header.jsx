import LoginOrProfile from "./LoginOrProfile";
import NavLink from "./NavLink";


export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-md bg-primary navbar-dark absolute-top py-3">
        <div className="container" id="cabecalho">
          <a
            className="navbar-brand fw-bold text-light d-flex align-items-center"
            href="https://cowlabs.com.br/src/home/index.htm"
          >
            CowLabs
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScrollSpy"
            aria-controls="navbarScrollSpy"
            aria-expanded="false"
            aria-label="Alternar navegação"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarScrollSpy"
          >
            <ul className="navbar-nav mx-auto mb-2 mb-md-0">
              
              <NavLink href="/src/faq/index.html">
                FAQs
              </NavLink>
              <NavLink href="/src/sobre/index.html">
                Sobre 
              </NavLink><NavLink href="/src/talkUs/index.html">
                Fale Conosco 
              </NavLink>

            </ul>

              <LoginOrProfile />
            
          </div>
        </div>
      </nav>
    </>
  );
}

// function profileConstructor(){
//     const user = JSON.parse(localStorage.getItem("LogedUser"))

//     const loginOrLoged = document.querySelector("#loginOrLoged")

//     if(!user){
//         loginOrLoged.innerHTML = `
//             <a type="button" href="../login/index.html" class="btn personal_btn me-2">
//                 Login
//             </a>
        
//         `
//     }else{
//         loginOrLoged.innerHTML = `
//             <button type="button" class="btn personal_btn me-2" onclick="logout()">
//                 Sair
//             </button>
//         `
//     }
// }
// profileConstructor();