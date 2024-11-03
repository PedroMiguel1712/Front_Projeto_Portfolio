// Navegação suave para links de âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// Função para alternar entre os modos claro e escuro
function toggleTheme() {
  const checkbox = document.getElementById('theme-toggle');
  if (checkbox.checked) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
  } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
  }
}

// Animação para elementos com a classe 'hidden'
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll('.hidden');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show'); 
      } else {
        entry.target.classList.remove('show'); 
      }
    });
  }, {
    threshold: 0.1 
  });

  elements.forEach(element => observer.observe(element));
});

// Carrossel de imagens e links
const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');
const sliderLink = document.getElementById('slider-link');
const sliderText = document.getElementById('slider-text');

let currentSlide = 0;

// Dados do carrossel: links e textos dos projetos
const sliderData = [
  {
    text: "Project 1: Dream Açaí Website",
    link: "https://pedromiguel1712.github.io/dreamacai/"
  },
  {
    text: "Project 2: Photography Portfolio",
    link: "https://pedromiguelelitphoto.netlify.app/?authuser=2"
  },
  {
    text: "Project 3: Personal Portfolio",
    link: ""
  }
];

function hideSlider() {
  slider.forEach(item => item.classList.remove('on'));
}

function showSlider() {
  slider[currentSlide].classList.add('on');
  updateSliderLink();
}

function updateSliderLink() {
  // Atualiza o link e o texto com base no slide atual
  sliderLink.setAttribute('href', sliderData[currentSlide].link);
  sliderText.textContent = sliderData[currentSlide].text;
}

function nextSlider() {
  hideSlider();
  currentSlide = (currentSlide + 1) % slider.length;
  showSlider();
}

function prevSlider() {
  hideSlider();
  currentSlide = (currentSlide - 1 + slider.length) % slider.length;
  showSlider();
}

btnNext.addEventListener('click', nextSlider);
btnPrev.addEventListener('click', prevSlider);

// Inicializa o carrossel com o primeiro slide
showSlider();
