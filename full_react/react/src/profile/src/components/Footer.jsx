export default function Footer() {

    const LogoStyle = {
        
    }
  return (
    <>
      <footer id="rodape" className="pt-3 pb-3 bg-primary sticky">
        <div className="container align-middle">
          <div className="d-flex align-middle flex-wrap justify-content-between align-items-center border-bottom">
            <div className="col-md-4 d-flex text-light align-items-center align-middle">
              <a
                className="navbar-brand align-middle d-flex align-items-center"
                href="https://cowlabs.com.br/src/home/index.htm"
                style={{ fontWeight: "bold", color: "white" }} 
              >
                CowLabs
              </a>
            </div>

            <ul className="list-unstyled pt-3 align-middle d-flex">
              <li className="ms-3">
                <a className="link-body-emphasis" href="#">
                  <i className="bi align-middle text-light bi-twitter-x"></i>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-body-emphasis" href="#">
                  <i className="bi align-middle text-light bi-instagram"></i>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-body-emphasis" href="#">
                  <i className="bi align-middle text-light bi-facebook"></i>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-body-emphasis" href="#">
                  <i className="bi align-middle text-light bi-linkedin"></i>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-body-emphasis" href="#">
                  <i className="bi align-middle text-light bi-whatsapp"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="container">
          <div className="d-flex flex-wrap justify-content-between align-items-center my-4">
            <div className=" col-md-4 mb-0 text-body-secondary">
              <p className="">&copy; 2025 cowlabs , Todos direitos reservados.</p>
            </div>
            <div className="nav col-md-5 justify-content-end">
              <p className="mt-1 ms-2 bi bi-geo-alt text-body-secondary align-items-center align-middle pt-3">
                Rua da Criatividade, nº 42 – Bairro das Ideias, Universo Web –
                BR
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
