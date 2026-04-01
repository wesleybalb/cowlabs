const imageInput = document.getElementById('image-input');
const profileImage = document.getElementById('profile-image');

imageInput.addEventListener('change', function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      profileImage.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});

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