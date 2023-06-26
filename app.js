// const langArr = {
//     title: {
//       en: "State-of-the-art educational game experiences that motivate children’s computational thinking development",
//       es: "Experiencias de juego de vanguardia que motivan el desarrollo de pensamiento computacional en los niños.",
//       ca: "Experiències de joc educatiu d'avantguarda que motiven el desenvolupament del pensament computacional dels nens",
//     },
//     text: {
//       en: "Kids want to play, and they want to play in today’s platforms. Minicoders offers game experiences in popular metaverses, like Roblox and Minecraft, so kids grow curious to learn about computational thinking while enjoying the platforms they love the most.",
//       es: "Los niños quieren jugar, y lo quieren hacer en las plataformas actuales. Minicoders ofrece experiencias de juego en metaversos populares, como Roblox y Minecraft, fomentando la curiosidad por aprender sobre pensamiento computacional mientras ellos disfrutan de sus plataformas favoritas.",
//       ca: "Als nens el agrada jugar i fer-ho en plataformes actuals. Minicoders ofereix experiències de joc en plataformes com Roblox y Minecraft, de manera que els estudiants desenvolupen el pensament computacional mentre gaudeixen de les plataformes que més els agraden.",
//     },
//     shps1: {
//       en: "Go see our ongoing plans for Homes",
//       es: "Conoce nuestros planes para casa",
//       ca: "Ves a veure els nostres plans actuals per a casa",
//     },
//     shps2: {
//       en: "Summer Camps 2023",
//       es: "Summer Camps 2023",
//       ca: "Summer Camps 2023",
//     },
//     shps3: {
//       en: "Minicoders for Schools",
//       es: "Minicoders para Escuelas",
//       ca: "Minicoders per a Escoles",
//     },
//     close: {
//       en: "Coming soon",
//       es: "Próximamente",
//       ca: "Pròximament",
//     },
//     link: {
//       en: "Go to site",
//       es: "Visita la web",
//       ca: "Visita la web",
//     },
//     link1: {
//       en: "Go to site",
//       es: "Visita la web",
//       ca: "Visita la web",
//     },
//   };
  



// const select = document.querySelector('select');
// const allLang = ['en', 'es', 'ca'];


// select.addEventListener('change', changeURLLanguage);


// function changeURLLanguage() {
//     let lang = select.value;
//     location.href = window.location.pathname + '#' + lang;
//     location.reload();
// }

// function changeLanguage() {
//     let hash = window.location.hash;
//     hash = hash.substr(1);
//     console.log(hash);
//     if (!allLang.includes(hash)) {
//         location.href = window.location.pathname + '#en';
//         location.reload();
//     }
//     select.value = hash;

//     document.querySelector('.navbar-text').innerHTML = langArr['text'][hash];
//     for (let key in langArr) {
//         let elem = document.querySelector('.lng-' + key);
//         if (elem) {
//             elem.innerHTML = langArr[key][hash];
//         }

//     }
// }

// changeLanguage();



// var userLang = navigator.language || navigator.userLanguage;
// if (userLang === 'en') {
//   window.location.href = 'en/index.html'; // Замените на соответствующую ссылку на английскую версию сайта
// } else if (userLang === 'es') {
//   window.location.href = 'es/index.html'; // Замените на соответствующую ссылку на испанскую версию сайта
// } else if (userLang === 'ca') {
//   window.location.href = 'ca/index.html'; // Замените на соответствующую ссылку на испанскую версию сайта  
// } else {
//   // window.location.href = window.location.origin;
//   window.location.href = '#'; // Замените на соответствующую ссылку на версию сайта по умолчанию

// }



function changeLanguage(language) {
  // Устанавливаем язык страницы
  document.documentElement.lang = language;

  // Изменяем содержимое элементов на странице в соответствии с выбранным языком
  if (language === 'en') {
      document.getElementById('heading').textContent = 'State-of-the-art educational game experiences that motivate children’s computational thinking development!';
      document.getElementById('heading2').textContent = 'Kids want to play, and they want to play in today’s platforms. Minicoders offers game experiences in popular metaverses, like   Roblox and Minecraft, so kids grow curious to learn about computational thinking while enjoying the platforms they love the most.';
      document.getElementById('shapes1').textContent = 'Go see our ongoing plans for Homes';
      document.getElementById('shapes3').textContent = 'Coming soon';
      document.getElementById('minicod_text').textContent = 'Minicoders for Schools';
      document.getElementById('linki').textContent = 'Go to site';
      document.getElementById('linki1').textContent = 'Go to site';
      document.getElementById('linki2').textContent = 'Go to site';

  } else if (language === 'es') {
      document.getElementById('heading').textContent = 'Experiencias de juego de vanguardia que motivan el desarrollo de pensamiento computacional en los niños!';
      document.getElementById('heading2').textContent = 'Los niños quieren jugar, y lo quieren hacer en las plataformas actuales. Minicoders ofrece experiencias de juego en metaversos populares, como Roblox y Minecraft, fomentando la curiosidad por aprender sobre pensamiento computacional mientras ellos disfrutan de sus plataformas favoritas.';
      document.getElementById('shapes1').textContent = 'Conoce nuestros planes para casa';
      document.getElementById('shapes3').textContent = 'Próximamente';
      document.getElementById('minicod_text').textContent = 'Minicoders para Escuelas';
      document.getElementById('linki').textContent = 'Visita la web';
      document.getElementById('linki1').textContent = 'Visita la web';
      document.getElementById('linki2').textContent = 'Visita la web';

  }  else if (language === 'ca') {
    document.getElementById('heading').textContent = "Experiències de joc educatiu d'avantguarda que motiven el desenvolupament del pensament computacional dels nens";
    document.getElementById('heading2').textContent = "Als nens el agrada jugar i fer-ho en plataformes actuals. Minicoders ofereix experiències de joc en plataformes com Roblox y Minecraft, de manera que els estudiants desenvolupen el pensament computacional mentre gaudeixen de les plataformes que més els agraden.";
    document.getElementById('shapes1').textContent = "Ves a veure els nostres plans actuals per a casa";
    document.getElementById('shapes3').textContent = "Pròximament";
    document.getElementById('minicod_text').textContent = "Minicoders per a Escoles";
    document.getElementById('linki').textContent = "Visita la web";
    document.getElementById('linki1').textContent = "Visita la web";
    document.getElementById('linki2').textContent = 'Visita la web';

}
  
}

// Получаем язык браузера пользователя
var userLanguage = navigator.language || navigator.userLanguage;

// Устанавливаем язык страницы в зависимости от языка браузера пользователя
changeLanguage(userLanguage);







function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}