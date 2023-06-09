/*
=============== 
TOGGLE Navbar
===============
*/

const btnLinks = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
btnLinks.addEventListener("click", function () {
  let element = document.getElementsByClassName("links");
  console.log(links.classList);
  links.classList.toggle("show-links");
});

// TOGGLE GENERAL QUESTIONS
questions = document.querySelectorAll(".question");
questions.forEach(function (question) {
  //console.log(e);
  const btn = question.querySelector(".question-btn");
  btn.addEventListener("click", function () {
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });
});

// REVIEWS(COMENTÁRIOS)

const reviews = [
  {
    id: 1,
    name: "Isabela",
    job: "Profissão",
    img: "imagens/cop.ico",
    text: "Iniciar a terapia não foi uma decisão fácil. Sempre tive muito receio, pois não tinha condições no meu atual momento de vida, e o deslocamento até uma clínica não era uma opção pra mim. Até que conheci a Mayara, e nunca me senti tão acolhida por alguém em toda minha vida. No conforto da minha casa, sempre que eu preciso, ela está lá. Com a terapia e a ajuda da Mayara, estou me tornando uma mulher mais forte, amadurecida e muito mais feliz! Aprendi sobre meu autoconhecimento e sobre a ver a vida sobre duas visões! Sem dúvidas, deveria ter começado antes e estou longe de acabar, mas certa de que, o nosso caminho está sendo lindo! Obrigada May, por todo o carinho! Sem dúvidas, uma psicóloga que ama o que faz e que nos ajuda com muito carinho! Assinado, Isabela.",
  },
  {
    id: 1,
    name: "Gabriella",
    job: "Profissão",
    img: "https://media.istockphoto.com/id/639468584/pt/foto/head-and-shoulders-portrait-of-young-white-businesswoman.jpg?s=1024x1024&w=is&k=20&c=r3MGsEHdoMYcZZQdhovPmPDk0-MzK5NTyMjnVxG7F5M=",
    text: "Desde que começamos as sessões sinto que tenho o dever de pensar mais em mim e faço isso com tranquilidade. Consigo pensar mais no 'por que? Pra que? Como?' As estratégias de controle de ansiedade, de autocuidado, tudo faz diferença. Sempre lembro quando você me pergunta sobre os sentimentos da semana, isso faz com que eu consigo ter mais controles sobre meus sentimentos porque sei que você me perguntaria kkkk então respiro fundo. Muito bom poder compartilhar isso com você, ser ouvida e entendida ♥️",
  },
  {
    id: 2,
    name: "Simone",
    job: "marketing",
    img: "",
    text: "Minha querida passando aqui para te agradecer por ser uma grande profissional,  no momento que eu achava que para mim não existia mas saída, conheci vc no Instagram. E cada atendimento era uma evolução,  graças a Deus e a vc hoje estou de pé firme e forte. E estou aqui para te agradecer. Gratidão. Deus te abençoe",
  },
  {
    id: 3,
    name: "Sônia Regina da Silva",
    job: "psichology",
    img: "",
    text: "Uhulll, super recomendo. Me ajudou muito. vale muito a pena",
  },
];

//select items
const prevBtn = document.querySelector(".prev-button");
const nextBtn = document.querySelector(".next-button");

comentarios = document.querySelector(".review");

//set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  comentarios.querySelector("#person-img").src = reviews[currentItem].img;
  comentarios.querySelector("#author").innerText = reviews[currentItem].name;
  comentarios.querySelector("#job").innerText = reviews[currentItem].job;
  comentarios.querySelector("#info").innerText = reviews[currentItem].text;
});

// show person based on item
function showPerson() {
  comentarios.querySelector("#person-img").src = reviews[currentItem].img;
  comentarios.querySelector("#author").innerText = reviews[currentItem].name;
  comentarios.querySelector("#job").innerText = reviews[currentItem].job;
  comentarios.querySelector("#info").innerText = reviews[currentItem].text;
}

// show next person

nextBtn.addEventListener("click", function () {
  currentItem++;

  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson();
});

// show previous person

prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson();
});

// const btns = document.querySelectorAll(".question-btn");
// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle("show-text");
//   });
// });
