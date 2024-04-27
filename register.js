// register.js

document.getElementById('registrationForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form submission

  // Get the entered values
  var username = document.getElementById('username').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirmPassword').value;
  var profilePic = document.getElementById('profilePic').value;
  var goal = document.getElementById('goal').value;

  // Perform validation
  if (password !== confirmPassword) {
    alert('Passwords do not match. Please try again.');
    return;
  }

  // Create user data object
  var userData = {
    username: username,
    email: email,
    password: password,
    profilePic: profilePic,
    lessonProgress: 0,
    topRank: 0,
    goal: goal
  };

  // Read existing user data from users.json
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'users.json', true);
  xhr.onload = function() {
    if (xhr.status === 200) {
      var users = JSON.parse(xhr.responseText);

      // Check if the username already exists
      var userExists = users.some(function(user) {
        return user.username === userData.username;
      });

      if (userExists) {
        // Registration failed
        alert('Username already exists. Please choose a different username.');
      } else {
        // Add the new user to the array
        users.push(userData);

        // Save the updated user data to users.json
        var jsonData = JSON.stringify(users, null, 2);
        var blob = new Blob([jsonData], { type: 'application/json' });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'users.json';
        a.click();

        // Registration successful
        alert('Registration successful! You can now log in.');
        window.location.href = 'login.html'; // Redirect to the login page
      }
    }
  };
  xhr.send();
});