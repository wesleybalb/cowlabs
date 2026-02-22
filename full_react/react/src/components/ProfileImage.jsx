import { useState } from "react";

export default function ProfileImage() {
    const picProfile = {
        width: "150px",
        height: "150px",
    };

    const userChecker = JSON.parse(localStorage.getItem("LogedUser"));
    const user = userChecker[0];

    let ProfileImg = '/src/assets/img/ImagemUser.jpg';

    if (user.tipo == "Admin") {
        ProfileImg = '/src/assets/img/profile_img/Admin.png';

    } else {
        if (user.tipo == "Professor") {
            ProfileImg = '/src/assets/img/profile_img/Professor.png';

        } else {
            switch (user.curso) {
                case "Sistemas de Informação":
                    ProfileImg = '/src/assets/img/profile_img/SI.png'
                    break;
                case "Administração":
                    ProfileImg = '/src/assets/img/profile_img/administration.png'
                    break;
                case "Ciências Biológicas":
                    ProfileImg = '/src/assets/img/profile_img/biological.png'
                    break;
                case "Ciências Contábeis":
                    ProfileImg = '/src/assets/img/profile_img/accounting.png'
                    break;
                case "Direito":
                    ProfileImg = '/src/assets/img/profile_img/Direito.png'
                    break;
                case "Design":
                    ProfileImg = '/src/assets/img/profile_img/Design.png'
                    break;
                case "Educação Física":
                    ProfileImg = '/src/assets/img/profile_img/educacao_fisica.png'
                    break;
                case "Engenharia ABI":
                    ProfileImg = '/src/assets/img/profile_img/Engenharia.png'
                    break;
                case "Engenharia Ambiental":
                    ProfileImg = '/src/assets/img/profile_img/Engenharia_Ambiental.png'
                    break;
                case "Engenharia Civil":
                    ProfileImg = '/src/assets/img/profile_img/Engenharia_Civil.png'
                    break;
                case "Engenharia de Produção":
                    ProfileImg = '/src/assets/img/profile_img/Engenharia_de_Producao.png'
                    break;
                case "Engenharia Elétrica":
                    ProfileImg = '/src/assets/img/profile_img/Engenharia_Eletrica.png'
                    break;
                case "Engenharia Mecânica":
                    ProfileImg = '/src/assets/img/profile_img/Engenharia_Mecanica.png'
                    break;
                case "Enfermagem":
                    ProfileImg = '/src/assets/img/profile_img/Enfermagem.png'
                    break;
                case "Medicina":
                    ProfileImg = '/src/assets/img/profile_img/Medicina.png'
                    break;
                case "Nutrição":
                    ProfileImg = '/src/assets/img/profile_img/Nutricao.png'
                    break;
                case "Odontologia":
                    ProfileImg = '/src/assets/img/profile_img/Odonto.png'
                    break;
                case "Publicidade e Propaganda":
                    ProfileImg = '/src/assets/img/profile_img/Publicidade_e_Propaganda.png'
                    break;
                case "Serviço Social":
                    ProfileImg = '/src/assets/img/profile_img/Servico_Social.png'
                    break;
                case "Técnico em Enfermagem":
                    ProfileImg = '/src/assets/img/profile_img/Tecnico_em_Enfermagem.png'
                    break;
                default:
                    text = "I'm a Cow in a Lab Cowlaborating with my fellow cows to create the best milk products in the world!";
            }
        }

    }


    return (
        <>
            <div
                className="profile-picture rounded-circle border border-3 border-primary overflow-hidden"
                style={picProfile}
            >
                <img
                    src={ProfileImg}
                    className="w-100 h-100 object-fit-cover"
                />
                <div
                    className="overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-50"
                // onClick="document.getElementById('image-input').click()"
                >
                    <i className="bi bi-camera-fill text-white fs-4"></i>
                </div>
                <input
                    type="file"
                    id="image-input"
                    className="d-none"
                // onchange="handleFileUpload(event)"
                />
            </div>
        </>
    );
}
