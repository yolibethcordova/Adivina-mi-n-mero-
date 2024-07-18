// Declare random number variable
const guess = Math.trunc(Math.random() * 100) + 1;

// Declare random number function
const guessNumber = () => {
    return Math.trunc(Math.random() * 100) + 1;
};
// =================== Start ===================
document.querySelector('.start').addEventListener('click', function () {
    document.querySelector('.guess').textContent = guessNumber();
    document.querySelector('h1').style.marginBottom = '3rem';
    document.querySelector('img').style.filter = 'none';
    displayMessage('¿Miri es este el número?');
});

// =================== Incorrect ===================

// Array with incorrect message options
const incorrectOptions = [
  "Miri piensa en un número.",
  "Hmm, déjame intentarlo de nuevo.",
  "¿Estás haciendo trampa?",
  "¡No lo cambies!",
  "Solo un intento más"
];

// Declare array number
let arrayNum = 0;

// Declare display message function
const displayMessage = (message) => {
    document.querySelector('.message').textContent= message;
};



document.querySelector('.incorrect').addEventListener('click', function () {
    document.querySelector('.guess').textContent = guessNumber();
    if (arrayNum === 4) {
        arrayNum = 0;
    } else {
        arrayNum++;
    }
    document.querySelector('h1').style.marginBottom = '3rem';
    document.querySelector('img').style.filter = 'invert(15%) sepia(92%) saturate(7105%) hue-rotate(358deg) brightness(94%) contrast(116%)';
    displayMessage(incorrectOptions[arrayNum]);
});

document.querySelector('.incorrect').addEventListener('click', function () {
  const guess = guessNumber();
  if (arrayNum === 4) {
      arrayNum = 0;
  } else {
      arrayNum++;
  }
  document.querySelector('.guess').textContent = guess;
  document.querySelector('h1').style.marginBottom = '3rem';
  
  // Aplicar clase para el efecto de fuego
  document.querySelector('img').classList.add('img-fire'); 
  displayMessage(incorrectOptions[arrayNum]);
  
  // Retirar clase después de un tiempo para detener la animación de fuego
  setTimeout(() => {
      document.querySelector('img').classList.remove('img-fire');
  }, 1000); // Duración de la animación en milisegundos
});


// =================== Correct ===================
document.querySelector('.correct').addEventListener('click', function () {
    displayMessage("¡Puedo leer tu mente!");
    document.querySelector('.start').textContent = 'Again';
    document.querySelector('h1').style.marginBottom = '3rem';
    document.querySelector('img').style.filter = 'invert(10%) sepia(80%) saturate(120%) hue-rotate(190deg) brightness(90%) contrast(90%)';

});

// Función para mostrar efecto de confeti
const showConfettiEffect = () => {
  const confettiContainer = document.createElement('div');
  confettiContainer.classList.add('confetti-container');
  document.body.appendChild(confettiContainer);

  // Crear confetis
  for (let i = 0; i < 10; i++) {
      const confetti = document.createElement('div');
      confetti.classList.add('confetti');
      confetti.style.background = getRandomColor();
      confetti.style.left = `${Math.random() * 100}vw`;
      confetti.style.animationDuration = `${Math.random() * 2 + 1}s`;
      confettiContainer.appendChild(confetti);
  }

  // Eliminar confetis después de la animación
  setTimeout(() => {
      confettiContainer.remove();
  }, 3000); // 3000 ms = 3 segundos
};

// Función para obtener un color aleatorio
const getRandomColor = () => {
  const colors = ['#f44336', '#9c27b0', '#3f51b5', '#e91e63', '#673ab7', '#2196f3', '#ff5722', '#00bcd4', '#4caf50', '#ffc107'];
  return colors[Math.floor(Math.random() * colors.length)];
};

// Correct guess
document.querySelector('.correct').addEventListener('click', function () {
  displayMessage("¡Puedo leer tu mente!");
  document.querySelector('.start').textContent = 'Otra Vez';
  document.querySelector('h1').style.marginBottom = '3rem';

  // Llamar función para mostrar confeti
  showConfettiEffect();
});
