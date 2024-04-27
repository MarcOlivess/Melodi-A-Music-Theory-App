// login.js

document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form submission

  // Get the entered username and password
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Read user data from users.json
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'users.json', true);
  xhr.onload = function() {
    if (xhr.status === 200) {
      var users = JSON.parse(xhr.responseText);

      // Find the user with matching username and password
      var user = users.find(function(user) {
        return user.username === username && user.password === password;
      });

      if (user) {
        // Login successful
        alert('Login successful!');
        localStorage.setItem('currentUser', JSON.stringify(user));
        window.location.href = 'profile.html'; // Redirect to the profile page
      } else {
        // Login failed
        alert('Invalid username or password. Please try again.');
      }
    }
  };
  xhr.send();
});