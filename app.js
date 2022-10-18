const labels = document.querySelectorAll('.form-group__label');
const forms = document.querySelectorAll('.form-group');
const inputs = document.querySelectorAll('.form-group__input');
const switcher = document.querySelector('.form-group__switcher-container');
const switcherCircle = document.querySelector('.form-group__switcher-cirle');

const hireGroup = document.querySelector('.form-group__hire');
hireGroup.style.width = `${forms[0].clientWidth}px`;

switcher.addEventListener('click', () => {
  switcher.classList.toggle('form-group__switcher-container_active')
  switcherCircle.classList.toggle('form-group__switcher-cirle_active')
})


const userNameMenu = document.querySelector('.menu__name-user')
const userOccupationMenu = document.querySelector('.menu__occupation')
const nameFromPlaceholder = document.querySelector('#firstNameLabel').nextElementSibling.placeholder;
const lastNameFromPlaceholder = document.querySelector('#lastNameLabel').nextElementSibling.placeholder;
const occupationFromPlaceholder = document.querySelector('#occupationLabel').nextElementSibling.placeholder;
userNameMenu.innerText = `${nameFromPlaceholder} ${lastNameFromPlaceholder}`;
userOccupationMenu.innerText = `${occupationFromPlaceholder}`;

const nameFromInput = document.querySelector('#firstNameLabel').nextElementSibling;
const lastNameFromInput = document.querySelector('#lastNameLabel').nextElementSibling;
const occupationFromInput = document.querySelector('#occupationLabel').nextElementSibling;

nameFromInput.addEventListener('input', (event) => {
  if (nameFromInput.value) {
    userNameMenu.innerText = `${nameFromInput.value} ${userNameMenu.innerText.split(' ')[1]}`;
  } else {
    userNameMenu.innerText = `${nameFromPlaceholder} ${userNameMenu.innerText.split(' ')[1]}`;
  }
})
lastNameFromInput.addEventListener('input', (event) => {
  if (lastNameFromInput.value) {
    userNameMenu.innerText = `${userNameMenu.innerText.split(' ')[0]} ${lastNameFromInput.value}`;
  } else {
    userNameMenu.innerText = `${userNameMenu.innerText.split(' ')[0]} ${lastNameFromPlaceholder}`;
  }
})
occupationFromInput.addEventListener('input', (event) => {
  if (occupationFromInput.value) {
    userOccupationMenu.innerText = `${occupationFromInput.value}`;
  } else {
    userOccupationMenu.innerText = `${occupationFromPlaceholder}`;
  }
})


const langs = {
  "firstNameLabel": { 'en': "First&nbsp;Name", 'ru': "Имя" },
  "lastNameLabel": { 'en': "Last&nbsp;Name", 'ru': "Фамилия" },
  "userNameLabel": { 'en': "Username", 'ru': "Ник" },
  "emailLabel": { 'en': "Email&nbsp;Address", 'ru': "Эл.&nbsp;почта" },
  "cityLabel": { 'en': "City", 'ru': "Город" },
  "countryLabel": { 'en': "Country", 'ru': "Страна" },
  "occupationLabel": { 'en': "Occupation", 'ru': "Деятельность" }
}

const menuLangs = [
  { 'en': "Profile", 'ru': 'Профиль' },
  { 'en': "Plans", 'ru': 'Планы' },
  { 'en': "Billing", 'ru': 'Оплаты' },
  { 'en': "Integrations", 'ru': 'Интеграции' },
  { 'en': "Billing Tools", 'ru': 'Счета' },
  { 'en': "Purchases", 'ru': 'Покупки' },
  { 'en': "Email Settings", 'ru': 'Настройки email' },
  { 'en': "Security", 'ru': 'Безопастность' }];

const titleLangs = [
  { 'en': "Account Info", 'ru': 'Аккаунт' },
  { 'en': "Profile Info", 'ru': 'Профиль' },]

const langButton = document.querySelector('.lang');
const readyStartWork = document.querySelector(".form-group__question");
const links = document.querySelectorAll('.menu__link');
const infoTitles = document.querySelectorAll('.info__title');
const langLinks = document.querySelectorAll('.lang__link');

let currentLang = document.querySelector('.lang__link_active').innerText;

langLinks.forEach(lang => {
  lang.addEventListener('click', (e) => {
    e.preventDefault()
    langLinks.forEach(i => i.classList.toggle('lang__link_active'));
    if (currentLang == 'en') {
      for (let i in langs) {
        let label = document.querySelector(`#${i}`)
        label.innerHTML = langs[i]['ru']
      }
      readyStartWork.innerHTML = "Готовы принимать заказы?"
      currentLang = 'ru'
      infoTitles.forEach((title, index) => title.innerHTML = titleLangs[index][currentLang])
      for (let i = 0; i < links.length; i++) {
        const menuLink = links[i];
        menuLink.innerHTML = `${menuLink.querySelector('img').outerHTML}${menuLangs[i][currentLang]}`;
      }
    } else {
      for (let i in langs) {
        let label = document.querySelector(`#${i}`)
        label.innerHTML = langs[i]['en']
      }
      readyStartWork.innerHTML = "Available for Hire?"
      currentLang = 'en'
      infoTitles.forEach((title, index) => title.innerHTML = titleLangs[index][currentLang])
      for (let i = 0; i < links.length; i++) {
        const menuLink = links[i];
        menuLink.innerHTML = `${menuLink.querySelector('img').outerHTML}${menuLangs[i][currentLang]}`;
      }
    }
  });
})


// const langButton = document.querySelector('.button');
// const readyStartWork = document.querySelector(".form-group__question")
// const links = document.querySelectorAll('.menu__link');

// let currentLang = 'en'
// langButton.addEventListener('click', () => {
//   if (currentLang == 'en') {
//     for (let i in langs) {
//       let label = document.querySelector(`#${i}`)
//       label.innerHTML = langs[i]['ru']
//     }
//     readyStartWork.innerHTML = "Готовы принимать заказы?"
//     currentLang = 'ru'
//     for (let i = 0; i < links.length; i++) {
//       const menuLink = links[i];
//       menuLink.innerHTML = `${menuLink.querySelector('img').outerHTML}${menuLangs[i][currentLang]}`;
//     }
//   } else {
//     for (let i in langs) {
//       let label = document.querySelector(`#${i}`)
//       label.innerHTML = langs[i]['en']
//     }
//     readyStartWork.innerHTML = "Available for Hire?"
//     currentLang = 'en'
//     for (let i = 0; i < links.length; i++) {
//       const menuLink = links[i];
//       menuLink.innerHTML = `${menuLink.querySelector('img').outerHTML}${menuLangs[i][currentLang]}`;
//     }
//   }
// });

