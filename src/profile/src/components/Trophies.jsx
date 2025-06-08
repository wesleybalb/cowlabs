export default function Trophies() {
    // SUGESTÃO DE TROFÉUS CRIADA PELA AJUDA DO REACT AI - NÃO IMPLEMENTADA  
    //   const trophies = [
  //     { name: "Novato", description: "Complete your first task", image: "/src/assets/img/trophies/novato.png" },
  //     { name: "Veterano", description: "Complete 10 tasks", image: "/src/assets/img/trophies/veterano.png" },
  //     { name: "Mestre", description: "Complete 50 tasks", image: "/src/assets/img/trophies/mestre.png" },
  //     { name: "Lenda", description: "Complete 100 tasks", image: "/src/assets/img/trophies/lenda.png" }
  //   ];

  return (
    <>
      <div className="pb-4">
        <div className="card card-custom p-3 mt-4">
          <div className="d-flex align-items-center">
            <div className="text-warning fs-3">
              <i className="bi bi-award"></i>
            </div>
            <div>
              <strong>Exibição de troféus</strong>
              <p className="mb-0">
                Mostre seus melhores reconhecimentos e conquistas aqui!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>

    // Exemplo de como exibir os troféus, mas não implementado (SUGESTÃO DE TROFÉUS CRIADA PELA AJUDA DO REACT AI)
    // <div className="container py-5">
    //   <h2 className="text-center mb-4">Trophies</h2>
    //   <div className="row">
    //     {trophies.map((trophy, index) => (
    //       <div key={index} className="col-md-3 mb-4">
    //         <div className="card text-center">
    //           <img src={trophy.image} alt={trophy.name} className="card-img-top" />
    //           <div className="card-body">
    //             <h5 className="card-title">{trophy.name}</h5>
    //             <p className="card-text">{trophy.description}</p>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
}
