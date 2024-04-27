document.addEventListener("DOMContentLoaded", function () {
  //Back button Functionality
  document.querySelector(".back-button").addEventListener("click", function () {
    window.location.href = "quiz.html"; // Go back to quiz.html
  });

  // ----------------------------------------------------------JS Code for Quiz 1.html Starts---------------------------------------------------------------------
  // Submit button functionality For first Quiz
  let submitOne = document.querySelector(".submit-button");
  if (submitOne) {
    submitOne.addEventListener("click", function () {
      // Get all question containers
      let questionContainers = document.querySelectorAll(".question");
      // Initialize total score
      let totalScore = 0;
      let i = 0;

      questionContainers.forEach(function (questionContainer) {
        let selectedAnswer = questionContainer.querySelector(
          'input[type="radio"]:checked'
        );
        let radioButtons = questionContainer.querySelectorAll(
          'input[type="radio"]'
        );

        // Get the correct answer for the current question
        let correctAnswer = questionContainer.querySelector(
          'input[type="radio"][data-correct="true"]'
        );

        // Check if selected answer matches the correct answer
        if (selectedAnswer && selectedAnswer === correctAnswer) {
          // Increment total score if answer is correct
          totalScore++;
          questionContainers[i].querySelector(".wrong-answer").style.display =
            "none";
        } else {
          questionContainers[i].querySelector(".wrong-answer").style.display =
            "inline";
        }

        var currentUser = JSON.parse(localStorage.getItem("currentUser"));
        const curr_user = currentUser.username;
        const new_prog = totalScore * 20;

        updateQuizScore(curr_user, 0, new_prog);
        i++;
      });

      document.querySelector(".score").textContent = totalScore; //Update quiz score
      document.querySelector(".score").style.display = "inline"; // Display quiz score
    });
  }
  // ----------------------------------------------------------JS Code for Quiz 1.html Ends---------------------------------------------------------------------

  // ----------------------------------------------------------JS Code for Quiz 2.html Starts---------------------------------------------------------------------
  let submitTwo = document.querySelector(".submit2-button");
  if (submitTwo) {
    submitTwo.addEventListener("click", function () {
      // Get all question containers
      let questionContainers = document.querySelectorAll(".question");
      // Initialize total score
      let totalScore1 = 0;
      let i = 0;

      questionContainers.forEach(function (questionContainer) {
        let selectedAnswer = questionContainer.querySelector(
          'input[type="radio"]:checked'
        );
        let radioButtons = questionContainer.querySelectorAll(
          'input[type="radio"]'
        );

        // Get the correct answer for the current question
        let correctAnswer = questionContainer.querySelector(
          'input[type="radio"][data-correct="true"]'
        );

        // Check if selected answer matches the correct answer
        if (selectedAnswer && selectedAnswer === correctAnswer) {
          // Increment total score if answer is correct
          totalScore1++;
          questionContainers[i].querySelector(".wrong-answer").style.display =
            "none";
        } else {
          questionContainers[i].querySelector(".wrong-answer").style.display =
            "inline";
        }

        var currentUser = JSON.parse(localStorage.getItem("currentUser"));
        const curr_user = currentUser.username;
        const new_prog = totalScore1 * 20;

        updateQuizScore(curr_user, 1, new_prog);
        i++;
      });

      document.querySelector(".score2").textContent = totalScore1; //Update quiz score
      document.querySelector(".score2").style.display = "inline"; // Display quiz score
    });
  }
  // ----------------------------------------------------------JS Code for Quiz 2.html Ends---------------------------------------------------------------------

  // ----------------------------------------------------------JS Code for Quiz 3.html Starts---------------------------------------------------------------------
  let submitThree = document.querySelector(".submit3-button");
  if (submitThree) {
    submitThree.addEventListener("click", function () {
      // Get all question containers
      let questionContainers = document.querySelectorAll(".question");
      // Initialize total score
      let totalScore2 = 0;
      let i = 0;

      questionContainers.forEach(function (questionContainer) {
        let selectedAnswer = questionContainer.querySelector(
          'input[type="radio"]:checked'
        );
        let radioButtons = questionContainer.querySelectorAll(
          'input[type="radio"]'
        );

        // Get the correct answer for the current question
        let correctAnswer = questionContainer.querySelector(
          'input[type="radio"][data-correct="true"]'
        );

        // Check if selected answer matches the correct answer
        if (selectedAnswer && selectedAnswer === correctAnswer) {
          // Increment total score if answer is correct
          totalScore2++;
          questionContainers[i].querySelector(".wrong-answer").style.display =
            "none";
        } else {
          questionContainers[i].querySelector(".wrong-answer").style.display =
            "inline";
        }

        var currentUser = JSON.parse(localStorage.getItem("currentUser"));
        const curr_user = currentUser.username;
        const new_prog = totalScore2 * 20;

        updateQuizScore(curr_user, 2, new_prog);
        i++;
      });

      document.querySelector(".score3").textContent = totalScore2; //Update quiz score
      document.querySelector(".score3").style.display = "inline"; // Display quiz score
    });
  }

  // ----------------------------------------------------------JS Code for Quiz 3.html Ends---------------------------------------------------------------------
  // ----------------------------------------------------------JS Code for Quiz 4.html Starts---------------------------------------------------------------------
  let submitFour = document.querySelector(".submit4-button");
  if (submitFour) {
    submitFour.addEventListener("click", function () {
      // Get all question containers
      let questionContainers = document.querySelectorAll(".question");
      // Initialize total score
      let totalScore3 = 0;
      let i = 0;

      questionContainers.forEach(function (questionContainer) {
        let selectedAnswer = questionContainer.querySelector(
          'input[type="radio"]:checked'
        );
        let radioButtons = questionContainer.querySelectorAll(
          'input[type="radio"]'
        );

        // Get the correct answer for the current question
        let correctAnswer = questionContainer.querySelector(
          'input[type="radio"][data-correct="true"]'
        );

        // Check if selected answer matches the correct answer
        if (selectedAnswer && selectedAnswer === correctAnswer) {
          // Increment total score if answer is correct
          totalScore3++;
          questionContainers[i].querySelector(".wrong-answer").style.display =
            "none";
        } else {
          questionContainers[i].querySelector(".wrong-answer").style.display =
            "inline";
        }

        var currentUser = JSON.parse(localStorage.getItem("currentUser"));
        const curr_user = currentUser.username;
        const new_prog = totalScore3 * 20;

        updateQuizScore(curr_user, 3, new_prog);
        i++;
      });

      document.querySelector(".score4").textContent = totalScore3; //Update quiz score
      document.querySelector(".score4").style.display = "inline"; // Display quiz score
    });
  }
  // ----------------------------------------------------------JS Code for Quiz 4.html Ends---------------------------------------------------------------------
});
