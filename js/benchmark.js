const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: ["Central Process Unit", "Computer Personal Unit", "Central Processor Unit"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: ["Counter Strike: Source", "Corrective Style Sheet", "Computer Style Sheet"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

const question = document.getElementById("question");
const questionsBox = document.getElementById("questions-box");
const qArray = [...questions];
const allOptions = [];
console.log(qArray);

const randomI = function (arrRandom) {
  const randomIndex = Math.floor(Math.random() * arrRandom.length);
  return randomIndex;
};

const randomQuestion = function (arrQuestion) {
  const randomIndex = randomI(arrQuestion);
  question.innerText = arrQuestion[randomIndex].question;
  allOptions.push(arrQuestion[randomIndex].correct_answer);
  for (let i = 0; i < arrQuestion[randomIndex].incorrect_answers.length; i++) {
    allOptions.push(arrQuestion[randomIndex].incorrect_answers[i]);
  }

  console.log(allOptions);
  const indexOption = randomI(allOptions);

  if (arrQuestion[randomIndex].type === "multiple") {
    // creazione button per le opzioni
    const q1 = document.createElement("div");
    const q2 = document.createElement("div");
    const q3 = document.createElement("div");
    const q4 = document.createElement("div");
    const btn1 = document.createElement("button");
    const btn2 = document.createElement("button");
    const btn3 = document.createElement("button");
    const btn4 = document.createElement("button");
    questionsBox.appendChild(q1).appendChild(btn1).innerText = allOptions[indexOption];
    questionsBox.appendChild(q2).appendChild(btn2);
    questionsBox.appendChild(q3).appendChild(btn3);
    questionsBox.appendChild(q4).appendChild(btn4);
  } else {
    const q1 = document.createElement("div");
    const q2 = document.createElement("div");
    const btn1 = document.createElement("button");
    const btn2 = document.createElement("button");
    questionsBox.appendChild(q1).appendChild(btn1);
    questionsBox.appendChild(q2).appendChild(btn2);
  }

  const qqArray = arrQuestion.splice([randomIndex], 1)[0];
  return qqArray;
};

const assignOption = function () {};

console.log(randomQuestion(qArray).question);

// domani, giovedì, NON demoralizziamoci! Aggiungere splice per le opzioni risposte

//creare con la funzione math.random un array di i_random per le opzioni risposte, basandoci sulla length di all options
//assegnare allOptions[i_random] agli innerTexts
//snellire il codice usando il for per la creazione degli elementi div e button
//pensare all'eventualità di passare da bottone a radio