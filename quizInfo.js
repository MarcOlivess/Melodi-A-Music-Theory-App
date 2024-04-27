"use strict";

// ----------------------------------------------------------JS Code for Quiz.html begins---------------------------------------------------------------------
// This function is used to set the css value for the progress bar that indicates current's user best quiz score attempt.
let progressBarFunc = function (className, i, scoresArr) {
  var progressBar = document.querySelector(className);
  var progressValue = scoresArr[i];
  progressBar.style.width = progressValue + "%";
  //   console.log(progressBar.style.width);
};

// Event handler When the quiz page is loaded.
document.addEventListener("DOMContentLoaded", function () {
  // Retrieve the user object from localStorage
  var currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if (currentUser) {
    let scoresArr = currentUser.quizScore;

    // Set the value of each quiz to whatever is currently saved in the user data from server.
    // console.log(scoresArr[0]);

    document.querySelector(".q-onescore").textContent = scoresArr[0];
    document.querySelector(".q-twoscore").textContent = scoresArr[1];
    document.querySelector(".q-threescore").textContent = scoresArr[2];
    document.querySelector(".q-fourscore").textContent = scoresArr[3];

    // Set each css value here.
    progressBarFunc(".progress-one", 0, scoresArr);
    progressBarFunc(".progress-two", 1, scoresArr);
    progressBarFunc(".progress-three", 2, scoresArr);
    progressBarFunc(".progress-four", 3, scoresArr);
  } else {
    // User not logged in, redirect to the login page
    window.location.href = "login.html";
  }
});
// ----------------------------------------------------------JS Code for Quiz.html Ends---------------------------------------------------------------------
