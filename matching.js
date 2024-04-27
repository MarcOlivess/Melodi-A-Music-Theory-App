"use strict";
// ----------------------------------------------------------JS Code for matching.html Begins---------------------------------------------------------------------
let progressBarFunc = function (className, i, scoresArr) {
  var progressBar = document.querySelector(className);
  var progressValue = scoresArr[i];
  if (progressBar) {
    progressBar.style.width = progressValue + "%";
  }
};

// Event handler When the match page is loaded.
document.addEventListener("DOMContentLoaded", function () {
  // Retrieve the user object from localStorage
  var currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if (currentUser) {
    let scoresArr = currentUser.matchScore;

    // Set the value of each quiz to whatever is currently saved in the user data from server.
    // console.log(scoresArr[0]);

    let oneScoreElement = document.querySelector(".match-onescore");
    let twoScoreElement = document.querySelector(".match-twoscore");

    if (oneScoreElement) {
      oneScoreElement.textContent = scoresArr[0];
      progressBarFunc(".match-one", 0, scoresArr);
    }

    if (twoScoreElement) {
      twoScoreElement.textContent = scoresArr[1];
      progressBarFunc(".match-two", 1, scoresArr);
    }
  } else {
    // User not logged in, redirect to the login page
    window.location.href = "login.html";
  }
});
// ----------------------------------------------------------JS Code for matching.html Ends---------------------------------------------------------------------

// ----------------------------------------------------------JS Code for matchGame1.html Begins---------------------------------------------------------------------
let totalScore = 0;
document.addEventListener("DOMContentLoaded", function () {
  const leftItems = document.querySelectorAll("#leftItems li");
  const rightItems = document.querySelectorAll("#rightItems li");

  leftItems.forEach(function (item) {
    item.addEventListener("dragstart", function (e) {
      e.dataTransfer.setData("text/plain", e.target.dataset.match);
    });
  });

  //   let baseRightText = "";

  rightItems.forEach(function (item) {
    item.addEventListener("dragover", function (e) {
      e.preventDefault();
    });

    item.addEventListener("drop", function (e) {
      e.preventDefault();
      const data = e.dataTransfer.getData("text/plain");
      const rightMatch = e.target.dataset.match;
      const leftItem = document.querySelector(
        `#leftItems [data-match="${data}"]`
      );
      //   console.log(rightMatch);
      const rightTemp = document.querySelector(
        `#rightItems [data-match="${data}"]`
      );
      const leftText = leftItem.textContent;
      if (data === rightMatch) {
        // rightTemp =

        let finalData = rightTemp.getAttribute("data-final");
        e.target.textContent = finalData;
        e.target.style.backgroundColor = "#b3ffb3";
        leftItem.textContent = ""; // Clear the left text content
        leftItem.draggable = false; // Make the left item undraggable
        totalScore += 1;
        document.querySelector(".total-score").textContent = totalScore;
      } else {
        const rightText = e.target.textContent; // Get the text content of the right match
        if (!rightText.includes("Correct")) {
          if (!rightText.includes("does not match")) {
            // Check if mismatch message already exists
            // baseRightText = rightText;
            // console.log(baseRightText);
            e.target.textContent = leftText + " does not match " + rightText; // Display mismatch message
          } else {
            e.target.textContent = leftText + " does not match " + rightMatch; // Replace existing mismatch message
          }
          e.target.style.backgroundColor = "#ff9999";
        }
      }
    });
  });
});

let matchSubButton = document.querySelector(".match-submit");
if (matchSubButton) {
  matchSubButton.addEventListener("click", function () {
    var currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const curr_user = currentUser.username;
    const new_prog = totalScore * 20;

    updateMatchGameScore(curr_user, 0, new_prog);
    window.location.href = "matching.html"; // Go back to mathcing.html
  });
}
