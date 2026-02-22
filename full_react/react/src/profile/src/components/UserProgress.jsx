export default function UserProgress() {
    const styleProgress = {
        height: "6px",
    };

    const styleProgressBar = {
        width: "68%",
    };

    const FutureFeature = {
        textAlign: "center",
        color: "red",
        fontSize: "0.8rem",
        fontStyle: "italic",
        marginTop: "10px",
    };
  
  
    return (
    <>
      <div className="">
        <div className="card card-custom p-3 m">
          <h5>Preenchimento do perfil</h5>
          <h2 className="text-success">68%</h2>
          <div className="progress mb-2" style={styleProgress}>
            <div className="progress-bar" style={styleProgressBar}></div>
          </div>
          <p className="text-danger">Seu perfil está incompleto</p>
          <ul className="list-unstyled small">
            <li>
              Insira um texto que melhor apresente você{" "}
              <span className="text-success">+20%</span>
            </li>
            <li>
              Informe trabalhos concluídos{" "}
              <span className="text-success">+12%</span>
            </li>
          </ul>
          <hr />
          <p className="mb-1">
            <strong>Atividade</strong>
          </p>
          <ul className="list-unstyled small">
            <li>Projetos realizados: 0</li>
            <li>Projetos em execução: 0</li>
            <li>Horas trabalhadas: 0</li>
            <li>
              Limite de projetos: 1 <i className="bi bi-info-circle"></i>
            </li>
          </ul>
          <hr />
          <p className="mb-1">
            <strong>Informação</strong>
          </p>
          <ul className="list-unstyled small">
            <li>Classificações dos clientes: 0</li>
            <li>Violações: 0</li>
            <li>Certificações: 0</li>
            <li>Último login: há 41 minutos</li>
            <li>Ingressou: há 2 anos</li>
          </ul>
          <p style={FutureFeature}>Este feature está em desenvolvimento. É apenas um exemplo do que esperamos</p>
        </div>
      </div>
    </>
  );
}
