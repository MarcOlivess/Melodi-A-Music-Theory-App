// server.js

// Simulated user data
var users = [
  {
    username: "user1",
    password: "password1",
    profilePic: "Profile pics/profile-pic-1.jpg",
    lessonProgress: 1,
    score: 100,
    quizScore: [0, 0, 0, 0],
    matchScore: [0, 0],
    topRank: 1,
    goal: "I want to learn as much as I can!",
  },
  {
    username: "user2",
    password: "password2",
    profilePic: "Profile pics/profile-pic-2.jpg",
    lessonProgress: 2,
    score: 100,
    quizScore: [0, 0, 0, 0],
    matchScore: [0, 0],
    topRank: 1,
    goal: "I want to improve my sight reading skills!",
  },
  {
    username: "user3",
    password: "password3",
    profilePic: "path/to/user3-profile-pic.jpg",
    lessonProgress: 3,
    score: 100,
    quizScore: [0, 0, 0, 0],
    matchScore: [0, 0],
    topRank: 1,
    goal: "I just want to dip my toes in music theory!",
  },
  {
    username: "user4",
    password: "password4",
    profilePic: "path/to/user4-profile-pic.jpg",
    lessonProgress: 4,
    score: 100,
    quizScore: [0, 0, 0, 0],
    matchScore: [0, 0],
    topRank: 1,
    goal: "I want to get number 1 on the leaderboard!",
  },
  {
    username: "user5",
    password: "password5",
    profilePic: "path/to/user5-profile-pic.jpg",
    lessonProgress: 0,
    score: 100,
    quizScore: [0, 0, 0, 0],
    matchScore: [0, 0],
    topRank: 1,
    goal: "I want to get help and feedback with my music composition!",
  },
];

//Function to update Users current quiz score
function updateQuizScore(username, index, newScore) {
  var currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if (currentUser && currentUser.username === username) {
    if (newScore > currentUser.quizScore[index]) {
      currentUser.quizScore[index] = newScore;
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
    }
  }
}

//Function to update Users current match game score
function updateMatchGameScore(username, index, newScore) {
  var currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if (currentUser && currentUser.username === username) {
    if (newScore > currentUser.matchScore[index]) {
      currentUser.matchScore[index] = newScore;
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
    }
  }
}

// Function to validate login credentials
function validateLogin(username, password) {
  for (var i = 0; i < users.length; i++) {
    if (users[i].username === username && users[i].password === password) {
      return users[i];
    }
  }
  return null;
}

// Function to handle login request
function handleLoginRequest(username, password, callback) {
  // Simulating server-side validation with a delay
  setTimeout(function () {
    var user = validateLogin(username, password);
    callback(user);
  }, 1000);
}

// Function to handle user registration
function handleRegistrationRequest(userData, callback) {
  // Simulating server-side registration with a delay
  setTimeout(function () {
    // Check if the username already exists
    var userExists = users.some(function (user) {
      return user.username === userData.username;
    });

    if (userExists) {
      callback(false);
    } else {
      users.push(userData);
      callback(true);
    }
  }, 1000);
}

// Export the functions
window.handleLoginRequest = handleLoginRequest;
window.handleRegistrationRequest = handleRegistrationRequest;
window.updateQuizScore = updateQuizScore;
window.updateMatchGameScore = updateMatchGameScore;
