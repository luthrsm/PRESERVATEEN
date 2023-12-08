const quizData = [
  {
    question: "Qual é a principal função de um preservativo?",
    answers: [
      { id: 1, label: "a. Prevenir a transmissão de IST'S", correct: true },
      { id: 2, label: "b. Para prevenir a gravidez", correct: false },
      { id: 3, label: "c. Para aumentar o prazer sexual", correct: false },
      { id: 4, label: "d. Para prevenir a ejeção", correct: false }
    ]
  },
  {
    question: "Quais são os tipos de preservativos disponíveis",
    answers: [
      { id: 1, label: "a. Preservativos masculinos", correct: false },
      { id: 2, label: "b. Preservativos masculinos e femininos", correct: true },
      { id: 3, label: "c. Preservativos femininos", correct: false },
      { id: 4, label: "d. Preservativos unissex", correct: false }
    ]
  },
  {
    question: "Como deve-se usar um preservativo durante o sexo?",
    answers: [
      { id: 1, label: "a. Deve-se colocar o preservativo antes do contato entre o pênis e a vagina", correct: true },
      { id: 2, label: "b. Deve-se colocar o preservativo imediatamente antes da penetração", correct: false },
      { id: 3, label: "c. Deve-se colocar o preservativo durante a penetração", correct: false },
      { id: 4, label: "d. Deve-se colocar o preservativo após a penetração", correct: false }
    ]
  },
  {
    question: "Qual é a melhor maneira de armazenar preservativos?",
    answers: [
      { id: 1, label: "a. Em um lugar fresco e seco", correct: true },
      { id: 2, label: "b. Em um lugar frio e úmido", correct: false },
      { id: 3, label: "c. Em um lugar quente e úmido", correct: false },
      { id: 4, label: "d. Em um lugar frio e seco", correct: false }
    ]
  },
  {
    question: "Como os preservativos são feitos e quais são os materiais usados para a sua confecção?",
    answers: [
      { id: 1, label: "a. Os preservativos são feitos exclusivamente de látex de borracha natural.", correct: false },
      { id: 2, label: "b. Todos os preservativos são feitos de poliuretano para atender às necessidades de pessoas alérgicas ao látex.", correct: false },
      { id: 3, label: "c. O poliisopreno é um material plástico usado na maioria dos preservativos.", correct: false },
      { id: 4, label: "d. Os preservativos podem ser feitos de látex de borracha natural, poliuretano ou poliisopreno, dependendo das necessidades e preferências do usuário.", correct: true }
    ]
  },
  {
    question: "Como identificar se um preservativo está vencido ou danificado?",
    answers: [
      { id: 1, label: "a. Se estiver frio e duro", correct: false },
      { id: 2, label: "b. Se estiver mole e quente", correct: false },
      { id: 3, label: "c. Se estiver com bolhas", correct: false },
      { id: 4, label: "d. Se estiver com fendas", correct: true }
    ]
  },
  {
    question: "Qual a forma correta de abrir um preservativo?",
    answers: [
      { id: 1, label: "a. Com os dentes", correct: false },
      { id: 2, label: "b. Com uma tesoura", correct: false },
      { id: 3, label: "c. Com uma faca", correct: false },
      { id: 4, label: "d. Com a mão", correct: true }
    ]
  },
  {
    question: "Por que não pode usar lubrificantes que não sejam à base de água junto dos preservativos?",
    answers: [
      { id: 1, label: "a. Porque eles são grudentos", correct: false },
      { id: 2, label: "b. Porque eles tem um mal cheiro", correct: false },
      { id: 3, label: "c. Porque o preservativo já tem lubrificante", correct: false },
      { id: 4, label: "d. Porque causam rachaduras na camisinha e faz com que elas rompam.", correct: true }
    ]
  },
  {
    question: "Qual é a diferença entre um preservativo masculino e feminino?",
    answers: [
      { id: 1, label: "a. O preservativo masculino é maior e o feminino é menor", correct: false },
      { id: 2, label: "b. O preservativo masculino é menor e feito de látex e o feminino é maior e feito de poliuretano", correct: true },
      { id: 3, label: "c. O preservativo masculino é feito de poliuretano e é maior e o feminino é menor e feito de látex", correct: false },
      { id: 4, label: "d. O preservativo masculino é menor e o feminino é maior", correct: false }
    ]
  }

];

const quizFormElem = document.getElementById("quiz-form");
const quizContainerElem = document.getElementById("quiz-container");
const quizTimerElem = document.getElementById("quiz-timer");
const quizStartBtn = document.getElementById("quiz-start-btn");
const quizRestartBtn = document.getElementById("quiz-restart-btn");

let quizTime = 0;
let quizIndex = 0;
let quizScore = 0;
let intervalId = null;

quizFormElem.addEventListener("submit", (e) => {
  e.preventDefault();

  const quizInputsElems = document.querySelectorAll("input[name='answer']");
  const correctAnswer = findCorrectAnswer(quizInputsElems);
  quizIndex++;

  if (quizIndex >= quizData.length) {
    clearInterval(intervalId);
    intervalId = null;

    quizContainerElem.innerHTML = evaluateScore(quizScore, quizData.length);
  } else {
    renderQuiz(quizData[quizIndex], quizIndex);
  }
});

quizStartBtn.addEventListener("click", (e) => {
  e.target.classList.add("hide");
  quizFormElem.classList.remove("hide");

  setTimer();

  renderQuiz(quizData[quizIndex], quizIndex);
});

quizRestartBtn.addEventListener("click", () => {
  quizIndex = 0;
  quizScore = 0;

  clearInterval(intervalId);
  intervalId = null;
  setTimer();

  renderQuiz(quizData[quizIndex], quizIndex);
});

function renderQuiz(data, index) {
  if (!data) return;

  const output = `<h3 class="quiz__question"><span class="quiz__number">${index + 1
    }.</span> ${data.question}</h3>
      <div class="quiz__answers">
        ${renderQuizAnswers(data.answers)}
      </div>`;

  quizContainerElem.innerHTML = output;
}

function renderQuizAnswers(answers) {
  let output = "";

  answers.forEach((answer) => {
    output += `<div class="quiz__answer">
        <input type="radio" id="answer${answer.id}" name="answer" data-correct="${answer.correct}" required />
        <label for="answer${answer.id}">${answer.label}</label>
      </div>`;
  });

  return output;
}

function findCorrectAnswer(quizInputs) {
  for (let i = 0, l = quizInputs.length; i < l; i++) {
    // If answer is correct
    if (quizInputs[i].checked && quizInputs[i].dataset.correct === "true") {
      quizScore++;
      return quizInputs[i];
    }
  }

  return null;
}

function evaluateScore(correctAnswers, questions) {
  const scoreInPercent = Math.floor((correctAnswers / questions) * 100);

  let message;

  if (scoreInPercent < 30) {
    message = `<h3>Ah não!</h3>
                   <p>Você acertou apenas  ${scoreInPercent}%. Continue tentando!</p>`;
  } else if (scoreInPercent <= 50) {
    message = `<h3>Bom trabalho!</h3>
                   <p>Você acertou${scoreInPercent}%. Continue melhorando!</p>`;
  } else if (scoreInPercent > 70) {
    message = `<h3>Parabéns!</h3>
                   <p>Você acertou impressionates ${scoreInPercent}%. Bom trabalho!</p>`;
  } else {
    message = `<h3>Boa tentativa!</h3>
                   <p>Você acertou ${scoreInPercent}%. Continue tentando!</p>`;
  }

  return message;
}

function setTimer() {
  const formatTime = (num, str = "0") => num.toString().padStart(2, str);

  let seconds = 0;
  let minutes = 0;

  if (!intervalId) {
    intervalId = setInterval(() => {
      if (seconds == 60) {
        seconds = 0;
        minutes++;
      }

      quizTimerElem.innerHTML = `${formatTime(minutes)}:${formatTime(seconds)}`;
      seconds++;
    }, 1000); // 1000ms = 1s
  }
}