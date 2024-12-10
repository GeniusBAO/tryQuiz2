const questions = [
{
question: "Who created the world?",
options: ["God", "Jesus", "The Holy Spirit"],
answer: 0
},
{
question: "What is the name of the first book in the Bible?",
options: ["Genesis", "Exodus", "Leviticus"],
answer: 0
},
{
question: "Who was the first man created by God?",
options: ["Adam", "Abraham", "Moses"],
answer: 0
},
{
question: "What is the name of the river where Jesus was baptized?",
options: ["Jordan River", "Nile River", "Euphrates River"],
answer: 0
},
{
question: "Who was the prophet that predicted the coming of Jesus?",
options: ["Isaiah", "Jeremiah", "Ezekiel"],
answer: 0
},
{
question: "What is the name of the mountain where Jesus gave the Sermon on the Mount?",
options: ["Mount Sinai", "Mount Olives", "Mount of Beatitudes"],
answer: 2
},
{
question: "Who was the apostle that betrayed Jesus?",
options: ["Judas Iscariot", "Peter", "John"],
answer: 0
},
{
question: "What is the name of the city where Jesus was crucified?",
options: ["Jerusalem", "Bethlehem", "Nazareth"],
answer: 0
},
{
question: "Who was the Roman governor that sentenced Jesus to death?",
options: ["Pontius Pilate", "Herod Antipas", "Caiaphas"],
answer: 0
},

{
 question: "Who created the world?",
options: ["God", "Jesus", "The Holy Spirit"],
answer: 0
    },
    
  ]
  ;

// Define URLs for audio files
const goodResponseAudioURL = "";
const badResponseAudioURL = "";
const backgroundMusicAudioURL = "https://raw.githubusercontent.com/GeniusBAO/tryQuiz/refs/heads/main/bckg5.wav";

const achievementAudioURLs = [
"https://youtu.be/0Yxl-lHsEq8?si=EU5k44ogpkyfV8g0",
"./AudioNimage/clapping.wav",
"./AudioNimage/sound3a.wav",
"./AudioNimage/sound4a.wav",
];

const achievementImageURLs = [
"./AudioNimage/one1.jpg",
"./AudioNimage/two2.jpg",
"./AudioNimage/three3.jpg",
"./AudioNimage/four4.jpg",
];

// Define sounds for good and bad responses
const goodResponseSound = new Audio(goodResponseAudioURL);
const badResponseSound = new Audio(badResponseAudioURL);

// Define background music
const backgroundMusic = new Audio(backgroundMusicAudioURL);

// Define achievement sounds and images
const achievementSounds = achievementAudioURLs.map((audioURL) => new Audio(audioURL));

// Initialize score and player name
let score = 0;
let playerName = "";
let currentQuestionIndex = 0;
let selectedOption = null;

// Function to display question and options
function displayQuestion(questionIndex) {
  const currentQuestion = questions[questionIndex];
  questionContainer.innerHTML = `<p id="question">${currentQuestion.question}</p>`;
  optionsList.innerHTML = "";
  currentQuestion.options.forEach((option, index) => {
    optionsList.innerHTML += `<li data-index="${index}" class="option">${option}</li>`;
  });
  const options = document.querySelectorAll("#options li");
  options.forEach((option) => {
    option.addEventListener("click", handleOptionSelection);
  });
}

// Function to handle option selection
function handleOptionSelection(event) {
  if (selectedOption === null) {
    const selectedOptionIndex = event.target.dataset.index;
    const currentQuestion = questions[currentQuestionIndex];
    selectedOption = event.target;
    selectedOption.classList.add("selected");
    if (selectedOptionIndex == currentQuestion.answer) {
      // Good response
      goodResponseSound.play();
      resultText.innerHTML = "Correct!";
      score++;
      checkAchievements();
    } else {
      // Bad response
      badResponseSound.play();
      resultText.innerHTML = `Sorry, ${playerName}! Victoria Banjo BELIEVES the correct answer is ${currentQuestion.options[currentQuestion.answer]}.`;
    }
    scoreText.innerHTML = `Score: ${score}`;
    resultContainer.style.display = "block";
    setTimeout(() => {
      resultContainer.style.display = "none";
      currentQuestionIndex++;
      selectedOption = null;

      if (currentQuestionIndex < questions.length) {
        displayQuestion(currentQuestionIndex);
      } else {
        // Game over
        questionContainer.innerHTML = `<p>Game is over, ${playerName}! You scored ${score} out of ${questions.length}.</p>`;
        if (score >= questions.length / 2) {
          questionContainer.innerHTML += `<p>Well done! Contact Mr. Best on 08129543613 to build your own game</p>`;
        } else {
          questionContainer.innerHTML += `<p>There is room for improvement ${playerName}!To create your own game contact Mr Best on 08129543613</p>`;
        }
        playAgainButton.style.display = "block";
      }
      
      

      
    }, 4000);
  }
}

// Function to check achievements
function checkAchievements() {
    if (score === 10) {
      playAchievementSound(achievementSounds[0]);
      displayAchievementImage(achievementImages[0]);
    } else if (score === 60) {
      playAchievementSound(achievementSounds[1]);
      displayAchievementImage(achievementImages[1]);
    } else if (score === 80) {
      playAchievementSound(achievementSounds[2]);
      displayAchievementImage(achievementImages[2]);
    } else if (score === 100) {
      playAchievementSound(achievementSounds[3]);
      displayAchievementImage(achievementImages[3]);
      displayAchievementText("Congratulations! You scored 100 points!");
    }
  }

  function displayAchievementImage(imageUrl) {
    console.log("Displaying achievement image:", imageUrl);
    document.getElementById("achievement-image").src = imageUrl;
    document.getElementById("achievement-image-container").style.display = "block";
    setTimeout(() => {
      document.getElementById("achievement-image-container").style.display = "none";
    }, 3000);
  }
    
 
// Function to display achievement sound
function playAchievementSound(sound) {
    sound.play();
    setTimeout(() => {
      sound.pause();
    }, 3000); // 3-second timeout
  }
  

// Function to display achievement text
function displayAchievementText(text) {
  achievementTextContainer.innerHTML = `<p>${text}</p>`;
  achievementTextContainer.style.display = "block";
  setTimeout(() => {
    achievementTextContainer.style.display = "none";
  }, 3000);
}

// Function to start the game
window.alert("Miss Victoria Banjo advices using earpiece on low volume for better experience.");
function startGame() {
  playerName = playerNameInput.value.trim();
  if (playerName !== "") {
    startButton.style.display = "none";
    playerNameInput.style.display = "none";
    displayQuestion(currentQuestionIndex);
    backgroundMusic.play();
  } else {
    alert("Oops! Kindly enter your name to start the quiz");
  }
}

// Get HTML elements
const playAgainButton = document.getElementById("play-again-button");

const achievementImageContainer = document.getElementById("achievement-image-container");
const questionContainer = document.getElementById("question-container");
const optionsList = document.getElementById("options");
const resultContainer = document.getElementById("result-container");
const resultText = document.getElementById("result");
const scoreText = document.getElementById("score");
const playerNameInput = document.getElementById("player-name");
const startButton = document.getElementById("start-button");
const achievementTextContainer = document.getElementById("achievement-text");

// Add event listener to start button
startButton.addEventListener("click", startGame);


playAgainButton.addEventListener("click", () => {
    score = 0;
    currentQuestionIndex = 0;
    selectedOption = null;
    playAgainButton.style.display = "none";
    startButton.style.display = "block";
    playerNameInput.style.display = "block";
  
    displayQuestion(currentQuestionIndex);
  });  

// Add event listener to player name input
playerNameInput.addEventListener("keypress", (event) => {
if (event.key === "Enter") {
startGame();
}
});

// Start background music when page loads
backgroundMusic.loop = true;
backgroundMusic.play();

// Initialize achievement containers
achievementImageContainer.style.display = "none";
achievementTextContainer.style.display = "none";
