import footer from "../script/footerModule.js";

const imageInput = document.getElementById('image-input');
const profileImage = document.getElementById('profile-image');

// imageInput.addEventListener('change', function () {
//   const file = this.files[0];
//   if (file) {
//     const reader = new FileReader();
//     reader.onload = function (e) {
//       profileImage.src = e.target.result;
//     };
//     reader.readAsDataURL(file);
//   }
// });

const stars = document.querySelectorAll('#rating i');
  const ratingValue = document.getElementById('rating-value');
  let currentRating = 0;

  function updateStars(rating) {
    stars.forEach(star => {
      const value = parseInt(star.getAttribute('data-value'));
      if (value <= rating) {
        star.classList.remove('bi-star');
        star.classList.add('bi-star-fill', 'text-warning');
      } else {
        star.classList.add('bi-star');
        star.classList.remove('bi-star-fill', 'text-warning');
      }
    });
  }

  stars.forEach(star => {
    star.addEventListener('click', () => {
      currentRating = parseInt(star.getAttribute('data-value'));
      ratingValue.textContent = `Nota: ${currentRating}`;
      updateStars(currentRating);
    });

    star.addEventListener('mouseover', () => {
      const hoverRating = parseInt(star.getAttribute('data-value'));
      updateStars(hoverRating);
    });

    star.addEventListener('mouseout', () => {
      updateStars(currentRating);
    });
  });


// este trecho deverá ser ajustado em breve para interagir com o banco através da API.
// Sugiro que ele busque as informações ao acessar a página através de fetch, para não salvar as informações do usuário em cache.

// Busca do localStorage user[0] para montar o perfil. 
const user = JSON.parse(localStorage.getItem("LogedUser"))[0]

// função pura apenas para buscar e retornar um objeto pela ID. útil em razão da repetição
function selectID(id){
  const local = document.querySelector(id)
  return local
}


// esta função tem o escopo de atribuir as informações do usuário carregadas no localstorage aos campos do front. 
// Ela passa para as divs que recebem o nome de usuário e o seu tipo de acordo com as informações carregadas no localstorage o que deverá ser adaptado com a integração com o backend
function profileLoad(){
  const name = selectID("#userName")
  name.innerHTML = user.name

  const role = selectID("#Role")
  role.innerHTML = user.tipo
}

// chama a função para carregar as informações.
profileLoad()

// comentário final. seria possível construir a busca pela imagem do usuário. Porém, neste momento, manteremos apenas a vaquinha dançando já que será utilizada integração com o backend para isso futuramente. Esta é uma condição provisória.

// este é um exemplo de modularização sugerida para a construção do footer. Como é uma repetição padrão, constuí o modulo e importei aqui. Ele funcionará em qq página que precisar do footer.
footer()