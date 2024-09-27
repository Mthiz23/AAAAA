// script.js
const closeBtn = document.querySelector('.close-btn');

closeBtn.addEventListener('click', () => {
    const userProfile = document.querySelector('.user-profile');
    userProfile.style.display = 'none';
});