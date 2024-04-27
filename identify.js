// Array of clef image file paths
const clefs = ['Notes/treble.png', 'Notes/bass.png', 'Notes/alto.png'];

// Array of note names
const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

// Array of note positions on the staff
const positions = ['line1', 'space1', 'line2', 'space2', 'line3', 'space3', 'line4', 'space4', 'line5'];

// Object defining difficulty levels and their corresponding clefs and positions
const difficultyLevels = {
  easy: { clefs: ['Notes/treble.png'], positions: 3 },
  medium: { clefs: ['Notes/treble.png', 'Notes/bass.png'], positions: 5 },
  hard: { clefs: ['Notes/treble.png', 'Notes/bass.png', 'Notes/alto.png'], positions: 7 }
};

const treblePositionNotes = {
    'line1': ['E'],
    'space1': ['F'],
    'line2': ['G'],
    'space2': ['A'],
    'line3': ['B'],
    'space3': ['C'],
    'line4': ['D'],
    'space4': ['E'],
    'line5': ['F']
  };
  
  const bassPositionNotes = {
    'line1': ['G'],
    'space1': ['A'],
    'line2': ['B'],
    'space2': ['C'],
    'line3': ['D'],
    'space3': ['E'],
    'line4': ['F'],
    'space4': ['G'],
    'line5': ['A']
  };

  const altoPositionNotes = {
    'line1': ['F'],
    'space1': ['G'],
    'line2': ['A'],
    'space2': ['B'],
    'line3': ['C'],
    'space3': ['D'],
    'line4': ['E'],
    'space4': ['F'],
    'line5': ['G']
  };

// Variables to store the current clef, note, position, and score
let currentClef;
let currentNote;
let currentPosition;
let score = 0;

// Get DOM elements
const startBtn = document.getElementById('start-btn');
const difficultySelect = document.getElementById('difficulty');
const gameContainer = document.getElementById('game-container');
const clefElement = document.getElementById('clef');
const noteElement = document.getElementById('note');
const optionsElement = document.getElementById('options');
const scoreElement = document.getElementById('score');

// Add event listener to the start button
startBtn.addEventListener('click', startGame);

// Function to start the game
function startGame() {
  score = 0; // Reset the score
  gameContainer.style.display = 'block'; // Show the game container
  generateQuestion(); // Generate the first question
}

// Function to generate a new question
function generateQuestion() {
    const difficulty = difficultySelect.value; // Get the selected difficulty level
    const { clefs, positions: numPositions } = difficultyLevels[difficulty]; // Get the clefs and number of positions for the selected difficulty
  
    currentClef = clefs[Math.floor(Math.random() * clefs.length)]; // Randomly select a clef
    currentPosition = positions[Math.floor(Math.random() * positions.length)]; // Randomly select a position
  
    // Determine the appropriate mapping based on the current clef
    let positionNotes;
    switch (currentClef) {
      case 'Notes/treble.png':
        positionNotes = treblePositionNotes;
        break;
      case 'Notes/bass.png':
        positionNotes = bassPositionNotes;
        break;
      case 'Notes/alto.png':
        positionNotes = altoPositionNotes;
        break;
    }
  
    currentNote = positionNotes[currentPosition][Math.floor(Math.random() * positionNotes[currentPosition].length)];
  
    clefElement.src = currentClef; // Set the clef image
    noteElement.className = currentPosition; // Set the note position class
  
    const options = generateOptions(numPositions); // Generate answer options based on the number of positions
    optionsElement.innerHTML = ''; // Clear previous options
  
    // Create button elements for each option and add event listeners
    options.forEach(option => {
      const button = document.createElement('button');
      button.textContent = option;
      button.addEventListener('click', checkAnswer);
      optionsElement.appendChild(button);
    });
  
    scoreElement.textContent = `Score: ${score}`; // Update the score display
  }

// Function to generate answer options
function generateOptions(numPositions) {
    const options = [];
    
    // Add the correct answer to the options array
    options.push(`${currentNote}`);
    
    // Generate additional random options
    while (options.length < numPositions) {
      const note = notes[Math.floor(Math.random() * notes.length)];
      const option = `${note}`;
      
      // Add the option if it's not already present in the array
      if (!options.includes(option)) {
        options.push(option);
      }
    }
    
    return shuffle(options); // Shuffle the options randomly
  }

// Function to check the selected answer
function checkAnswer(event) {
  const selectedOption = event.target.textContent;
  
  // Check if the selected note and position match the current question
  if (selectedOption === currentNote) {
    score++; // Increment the score if the answer is correct
  }
  
  generateQuestion(); // Generate a new question
}

// Function to shuffle an array randomly
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}