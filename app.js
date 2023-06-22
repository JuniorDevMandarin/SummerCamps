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

var userLang = navigator.language || navigator.userLanguage;
if (userLang === 'en') {
  window.location.href = 'en/index.html'; // Замените на соответствующую ссылку на английскую версию сайта
} else if (userLang === 'es') {
  window.location.href = 'es/index.html'; // Замените на соответствующую ссылку на испанскую версию сайта
} else {
  // window.location.href = window.location.origin;
  window.location.href = 'https://juniordevmandarin.github.io/SummerCamps/#'; // Замените на соответствующую ссылку на версию сайта по умолчанию

}