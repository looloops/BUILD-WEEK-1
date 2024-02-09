// QUESTIONS
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
            "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#39;t get modified?",
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
function createTimerSVG() {
    const timerContainer = document.getElementById("timer-container");
    timerContainer.innerHTML = `
    <svg id="timer-svg" width="100" height="100">
        <circle id="timer-svg" r="45" cx="50" cy="50" fill="none"
        stroke="#96689b"
        stroke-width="10"
        stroke-dasharray="282.743"
        stroke-dashoffset="0" transform="rotate(-90 50 50)"></circle>
        <circle id="timer-circle" r="45" cx="50" cy="50" fill="transparent"
            stroke="#0FF" stroke-width="10"
            stroke-dasharray="282.743" stroke-dashoffset="0"
            transform="rotate(-90 50 50)">
        </circle>
        <text x="50%" y="35%" alignment-baseline="after-edge" text-anchor="middle" fill="#fff" font-size="8" class="small-text">
            SECONDS
        </text>
        <text id="timer-text" x="50%" y="50%" alignment-baseline="central" text-anchor="middle" font-size="30" fill="#fff">
            60
        </text>
        <text x="50%" y="75%" text-anchor="middle" fill="#fff" font-size="8" class="small-text">
            REMAINING
        </text>
    </svg>
        `;
}

// aspetto il caricamento del DOM per far partire lo script
document.addEventListener("DOMContentLoaded", (event) => {
    createTimerSVG();
    let questionNumber = 0;
    let score = 0;
    let timer;
    let timeLeft = 60;
    let selectedAnswer = null;
    const totalDuration = timeLeft;

    const questionEl = document.getElementById("question");
    const answerListEl = document.getElementById("answer-list");
    const timerTextEl = document.getElementById("timer-text");
    const circumference = 2 * Math.PI * 45;
    const timerCircleEl = document.getElementById("timer-circle");

    // aggiornamento display del timer
    function updateTimerDisplay() {
        timerTextEl.textContent = timeLeft;
        let dashoffset = circumference + (circumference * timeLeft) / totalDuration;
        timerCircleEl.style.strokeDashoffset = dashoffset.toFixed(2);
    }

    function startTimer() {
        timeLeft = 60; // così si resetta il tempo ogni volta che inizia una domanda
        // richiamo funzione per aggiornare display del timer
        updateTimerDisplay();
        // Inizia il timer
        timer = setInterval(() => {
            timeLeft--;
            updateTimerDisplay();
            if (timeLeft <= 0) {
                clearInterval(timer);
                goToNextQuestion();
            }
        }, 1000);
    }

    //Funzione per randomizzare array con return di array nuovo randomizzato
    const randomArr = function (arr) {
        let arrIndex = [];
        const mixedArray = [];
        while (arr.length > 0) {
            const randomIndex = Math.floor(Math.random() * arr.length);
            mixedArray.push(arr[randomIndex]);
            arr.splice(randomIndex, 1);
        }
        return mixedArray;
    };

    // Funzione per mostrare la domanda
    function renderQuestion() {
        if (questionNumber >= questions.length) {
            endQuiz();
            return;
        }
        const question = questions[questionNumber];
        questionEl.innerHTML = question.question;
        answerListEl.innerHTML = "";

        const countAnswers = document.createElement("span");
        countAnswers.className = "countAnswers";
        const questionText = document.createElement("span");
        questionText.innerText = `QUESTION ${questionNumber + 1}`;
        const totalQuestionsText = document.createElement("span");
        totalQuestionsText.style.color = "#af0087";
        totalQuestionsText.innerText = `/${questions.length}`;

        // randomizzazione ordine risposte
        const allAnswers = [...question.incorrect_answers, question.correct_answer].sort(() => Math.random() - 0.5);

        // creo un div per ogni gruppo di risposte
        for (let i = 0; i < allAnswers.length; i += 2) {
            const answerGroup = document.createElement("div");
            answerGroup.className = "answer-group";

            // Aggiungi due risposte per gruppo
            for (let j = i; j < i + 2 && j < allAnswers.length; j++) {
                const answer = allAnswers[j];
                const inputR = document.createElement("input");
                inputR.type = "radio";
                inputR.id = "answer_" + j;
                inputR.name = "answer";
                inputR.value = answer;
                const label = document.createElement("label");
                label.htmlFor = inputR.id;
                label.textContent = answer;
                label.className = "radio";

                nextButton = document.createElement("button");
                nextButton.className = "nextButton";
                nextButton.innerText = "Next";
                nextButton.style.display = "none";

                inputR.addEventListener("click", () => {
                    selectedAnswer = answer; // Aggiorna la risposta selezionata
                    nextButton.style.display = "inline";
                });
                nextButton.addEventListener("click", () => {
                    if (selectedAnswer === questions[questionNumber].correct_answer) {
                        score++;
                        // console.log("score:", score);
                    }

                    highlightSelectedAnswer(selectedAnswer);
                    goToNextQuestion();
                });
                answerGroup.appendChild(inputR);
                answerGroup.appendChild(label);
            }

            answerListEl.appendChild(answerGroup);
            clearInterval(timer);
            startTimer();
        }
        countAnswers.appendChild(questionText);
        countAnswers.appendChild(totalQuestionsText);
        answerListEl.appendChild(nextButton);
        answerListEl.appendChild(countAnswers);
        //mostra su schermo tutti i contenitori
    }

    // Funzione per evidenziare la risposta selezionata
    function highlightSelectedAnswer(selectedAnswer) {
        const answerListItems = document.querySelectorAll("#answer-list label");
        answerListItems.forEach((label) => {
            if (label.textContent === selectedAnswer) {
                label.classList.add("selected");
            }
        });
    }
    // Funzione per passare alla prossima domanda
    function goToNextQuestion() {
        questionNumber++;
        renderQuestion();
    }

    // Funzione per terminare il quiz
    function endQuiz() {
        const totalQuestions = questions.length;
        const percentCorrect = (score / totalQuestions) * 100;
        const percentIncorrect = 100 - percentCorrect;

        //punteggio minimo per passare il quiz
        const passingScore = 60;

        // calcolo circonferenze per i risultati
        const radius = 80;
        const circumference = 2 * Math.PI * radius;
        // const correctOffset = circumference * (percentCorrect / 100);
        const incorrectOffset = circumference * (percentIncorrect / 100);

        // Nascondi il quiz container e mostra i risultati
        document.getElementById("quiz-container").style.display = "none";
        document.getElementById("timer-container").style.display = "none";
        const resultsScreen = document.getElementById("results-screen");
        resultsScreen.style.display = "flex";
        resultsScreen.innerHTML = `
            <h1>Results</h1>
            <h2>The summary of your answers:</h2>
            <div id="details-container" class="details-container">
                <div class="result correct">
                    <h3 class='correctH'>Correct</h3>
                    <p class='correctP'>${percentCorrect.toFixed(1)}%</p>
                    <p class='correctP2'>${score}/${totalQuestions} questions</p>
                </div>
                <svg id="mycircle" width="300" height="300" viewBox="0 0 200 200"> 
                <circle id="incorrect-circle" r="80" cx="100" cy="100" fill="transparent" stroke="#00ffff" stroke-width="30" 
                stroke-dasharray="${circumference}" stroke-dashoffset="0" 
                transform="rotate(-90 100 100)" /> 
            <circle id="correct-circle" r="80" cx="100" cy="100" fill="transparent" stroke="#d20094" stroke-width="30" 
                stroke-dasharray="${circumference}" stroke-dashoffset="${circumference - incorrectOffset}" 
                transform="rotate(-90 100 100)" /> 
                    <text x="50%" y="45%" alignment-baseline="middle" text-anchor="middle" font-size="16px" fill="#fff"> 
                        ${
                            percentCorrect >= passingScore
                                ? `<tspan class="winH" x="50%" dy="-1.2em">Congratulations!</tspan> 
                        <tspan class="winP" x="50%" dy="1.2em">You passed the exam.</tspan> 
                        <tspan class="secondP" x="50%" dy="1.7em">We'll send you the certificate</tspan> 
                        <tspan class="secondP" x="50%" dy="1.2em">in a few minutes.</tspan> 
                        <tspan class="thirdP" x="50%" dy="1.2em">Check your email (including </tspan> 
                        <tspan class="thirdP" x="50%" dy="1.2em"> spam promotions /folder)</tspan> `
                                : `<tspan class="loseH" x="50%" dy="-0.6em">Sorry</tspan> 
                        <tspan class="loseP" x="50%" dy="1.5em">You didn't pass.</tspan> 
                        <tspan class="secondP" x="50%" dy="1.8em">Try again next time!</tspan>`
                        } 
                    </text> 
                </svg>
                <div class="result wrong">
                    <h3 class='incorrectH'>Wrong</h3>
                    <p class='incorrectP'>${percentIncorrect.toFixed(1)}%</p>
                    <p class='incorrectP2'>${totalQuestions - score}/${totalQuestions} questions</p>
                </div>
            </div>
            <form action="./feedback.html">
                <button class="btn a-btn" id="proceed" type="submit">RATE US</button>
            </form>
    `;
    }
    // Inizia a rendirizzare domande e risposte
    renderQuestion();
});
