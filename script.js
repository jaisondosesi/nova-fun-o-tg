const setaBtn = document.getElementById('setaBtn');
const messageText = document.getElementById('messageText');
const langBtn = document.getElementById('langBtn');
const langMenu = document.getElementById('langMenu');
const langOptions = langMenu.querySelectorAll('div');

const translations = {
  pt: 'Obrigado por assistir!',
  en: 'Thank you for watching!',
  de: 'Danke fürs Zuschauen!',
  fr: 'Merci de regarder !',
  es: '¡Gracias por ver!',
  ru: 'Спасибо за просмотр!',
  default: 'Дякую за перегляд!'
};

setaBtn.addEventListener('click', function () {
  if (messageText.style.display === 'none' || messageText.style.display === '') {
    messageText.style.display = 'block';
  } else {
    messageText.style.display = 'none';
  }
});

langBtn.addEventListener('click', function () {
  langMenu.style.display = langMenu.style.display === 'none' || langMenu.style.display === '' ? 'block' : 'none';
});

langOptions.forEach(option => {
  option.addEventListener('click', () => {
    const lang = option.getAttribute('data-lang');
    messageText.innerText = translations[lang] || translations.default;
    langMenu.style.display = 'none';
  });
});

document.addEventListener('click', function (event) {
  if (!langBtn.contains(event.target) && !langMenu.contains(event.target)) {
    langMenu.style.display = 'none';
  }
});
