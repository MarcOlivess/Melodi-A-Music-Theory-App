// profile.js

document.addEventListener('DOMContentLoaded', function() {
  // Retrieve the user object from localStorage
  var currentUser = JSON.parse(localStorage.getItem('currentUser'));

  if (currentUser) {
    // Display user-specific data
    document.getElementById('username').textContent = currentUser.username;
    document.getElementById('profilePic').src = currentUser.profilePic;
    document.getElementById('goal').textContent = currentUser.goal;
    document.getElementById('topRank').textContent = currentUser.topRank;

    // Update lesson progress bar
    var lessonProgress = currentUser.lessonProgress;
    var progressPercentage = (lessonProgress / 4) * 100;
    document.getElementById('lessonProgress').style.width = progressPercentage + '%';
  } else {
    // User not logged in, redirect to the login page
    window.location.href = 'login.html';
  }

  // Logout functionality
  document.getElementById('logoutBtn').addEventListener('click', function() {
    localStorage.removeItem('currentUser');
    window.location.href = 'login.html'; // Redirect to the login page
  });
});