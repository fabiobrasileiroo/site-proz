const questions = [
    {
        question: "O que é o Git?",
        options: {
            A: "Um sistema de controle de versão",
            B: "Um navegador da web",
            C: "Um processador de texto",
        },
        correctAnswer: "A",
    },
    // Adicione mais perguntas aqui...
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const questionElement = document.getElementById("question");
    const optionA = document.getElementById("optionA");
    const optionB = document.getElementById("optionB");
    const optionC = document.getElementById("optionC");

    questionElement.textContent = `Pergunta ${currentQuestionIndex + 1}: ${questions[currentQuestionIndex].question}`;
    optionA.textContent = `A. ${questions[currentQuestionIndex].options.A}`;
    optionB.textContent = `B. ${questions[currentQuestionIndex].options.B}`;
    optionC.textContent = `C. ${questions[currentQuestionIndex].options.C}`;
}

function checkAnswer(selectedOption) {
    if (selectedOption === questions[currentQuestionIndex].correctAnswer) {
        score++;
        document.getElementById("result").textContent = "Resposta correta!";
    } else {
        document.getElementById("result").textContent = "Resposta incorreta!";
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        endGame();
    }

    document.getElementById("score").textContent = score;
}

function endGame() {
    const container = document.querySelector(".container");
    container.innerHTML = `<h1>Parabéns! Você marcou ${score} ponto(s).</h1>`;
}

displayQuestion();
