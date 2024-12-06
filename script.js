const questions = [
  {
    question: "True or False: The ocean absorbs more CO2 than forests.",
    options: ["True", "False"],
    answer: "True",
    explanation: "The ocean absorbs about 30% of the CO2 we emit.",
  },
  {
    question:
      "True or False: The Great Barrier Reef is the largest living structure on Earth.",
    options: ["True", "False"],
    answer: "True",
    explanation:
      "The Great Barrier Reef is the largest living structure, spanning over 2,300 kilometers.",
  },
  {
    question:
      "Multiple Choice: What is the primary source of oxygen in the ocean?",
    options: ["Phytoplankton", "Fish", "Coral reefs", "Seaweed"],
    answer: "Phytoplankton",
    explanation:
      "Phytoplankton are tiny marine plants that produce oxygen through photosynthesis.",
  },
  {
    question: "True or False: CO2 emissions lead to ocean acidification.",
    options: ["True", "False"],
    answer: "True",
    explanation:
      "When CO2 is absorbed by the ocean, it reacts with water to form carbonic acid, which makes the ocean more acidic.",
  },
  {
    question:
      "Multiple Choice: Which of these is a consequence of ocean acidification?",
    options: [
      "Damage to coral reefs",
      "More fish species",
      "Improved water quality",
      "Higher oxygen levels",
    ],
    answer: "Damage to coral reefs",
    explanation:
      "Ocean acidification weakens coral skeletons, making them more vulnerable to destruction.",
  },
  {
    question:
      "Multiple Choice: What percentage of the Earth's oxygen is produced by the ocean?",
    options: ["10%", "30%", "50%", "70%"],
    answer: "50%",
    explanation:
      "The ocean, through marine plants like phytoplankton, is responsible for producing around 50% of the Earth's oxygen.",
  },
  {
    question:
      "True or False: Marine life is not affected by rising CO2 levels in the atmosphere.",
    options: ["True", "False"],
    answer: "False",
    explanation:
      "Higher CO2 levels can cause warming waters and acidification, which harm marine life, especially coral reefs and shellfish.",
  },
  {
    question:
      "Multiple Choice: Which of the following is a major cause of ocean pollution?",
    options: [
      "Plastic waste",
      "Solar energy",
      "Marine protected areas",
      "Wind energy",
    ],
    answer: "Plastic waste",
    explanation:
      "Plastic waste, especially microplastics, is a major pollutant that harms marine life and ecosystems.",
  },
  {
    question:
      "Multiple Choice: Which of these ocean regions is most affected by plastic pollution?",
    options: [
      "Pacific Garbage Patch",
      "Arctic Ocean",
      "Indian Ocean",
      "Atlantic Ocean",
    ],
    answer: "Pacific Garbage Patch",
    explanation:
      "The Pacific Garbage Patch is a large area of the Pacific Ocean where plastic waste accumulates due to ocean currents.",
  },
  {
    question:
      "True or False: The ocean regulates the Earth's climate by absorbing heat from the sun.",
    options: ["True", "False"],
    answer: "True",
    explanation:
      "The ocean plays a critical role in regulating the Earth's climate by absorbing and redistributing heat from the sun.",
  },
  {
    question: "Multiple Choice: How does deforestation affect the ocean?",
    options: [
      "Increases CO2 in the atmosphere",
      "Reduces marine biodiversity",
      "Improves water quality",
      "Reduces ocean temperatures",
    ],
    answer: "Increases CO2 in the atmosphere",
    explanation:
      "Deforestation leads to higher CO2 levels in the atmosphere, which in turn contributes to ocean acidification and global warming.",
  },
  {
    question: "True or False: The ocean is the largest carbon sink on Earth.",
    options: ["True", "False"],
    answer: "True",
    explanation:
      "The ocean is the largest carbon sink, absorbing about 25-30% of the carbon dioxide emissions from human activity.",
  },
  {
    question:
      "Multiple Choice: What is the impact of overfishing on the ocean?",
    options: [
      "Reduced fish populations",
      "Better water quality",
      "Increased biodiversity",
      "Healthier coral reefs",
    ],
    answer: "Reduced fish populations",
    explanation:
      "Overfishing depletes fish populations, disrupts marine food webs, and harms ecosystems.",
  },
  {
    question: "Multiple Choice: Which of these is a threat to coral reefs?",
    options: [
      "Ocean acidification",
      "Overfishing",
      "Pollution",
      "All of the above",
    ],
    answer: "All of the above",
    explanation:
      "Coral reefs face multiple threats including acidification, overfishing, and pollution, which degrade their health and biodiversity.",
  },
  {
    question:
      "True or False: The ocean is a limitless resource and cannot be overexploited.",
    options: ["True", "False"],
    answer: "False",
    explanation:
      "The ocean is not limitless. Overfishing, pollution, and climate change have serious impacts on ocean health and biodiversity.",
  },
  {
    question:
      "Multiple Choice: What is a major contributor to rising ocean temperatures?",
    options: [
      "Deforestation",
      "Plastic waste",
      "Burning fossil fuels",
      "Marine protected areas",
    ],
    answer: "Burning fossil fuels",
    explanation:
      "Burning fossil fuels increases greenhouse gases in the atmosphere, which causes global warming and rising ocean temperatures.",
  },


];
let currentQuestion = 0;
let score = 0;

function startQuiz() {
  const quizContainer = document.getElementById("quiz-container");

  quizContainer.classList.add("fade-out");

  setTimeout(() => {
    quizContainer.innerHTML = `
      <h2>${questions[currentQuestion].question}</h2>
      <div class="options-container">
        ${questions[currentQuestion].options
          .map(
            (opt, index) =>
              `<button class="option" onclick="checkAnswer(${index})">${opt}</button>`
          )
          .join("")}
      </div>
    `;
    
    quizContainer.classList.remove("fade-out");
    quizContainer.classList.add("fade-in");
  }, 300); 
}

function checkAnswer(selectedIndex) {
  const selectedOption = questions[currentQuestion].options[selectedIndex];
  const correct = selectedOption === questions[currentQuestion].answer;
  if (correct) score++;

  const quizContainer = document.getElementById("quiz-container");
  quizContainer.classList.add("fade-out");

  setTimeout(() => {
    alert(
      correct ? "Correct!" : `Wrong! ${questions[currentQuestion].explanation}`
    );

    currentQuestion++;

    if (currentQuestion < questions.length) {
      startQuiz();
    } else {
      quizContainer.innerHTML = `
        <h2>Quiz Complete!</h2>
        <p>Your score: ${score}/${questions.length}</p>
        <button onclick="restartQuiz()">Start Quiz Again</button>
      `;
    }
  }, 500); 
}


function restartQuiz() {
  score = 0;
  currentQuestion = 0;
  startQuiz(); 
}
