const _logUsers = {
    card1: `Login to Your Account`,
    card2: `Have an account, please enter your login details `,
    card3: `Or`,
    card4: `Login with Facebook`,
    card5: `Login with Google`,
    card6: `Remember Me`,
    card7: `Forgot Password?`,
};
document.getElementById('logTitle').innerHTML = _logUsers.card1;
document.getElementById('logPar').innerHTML = _logUsers.card2;
// document.getElementById('logPar1').innerHTML = _logUsers.card3;
// document.getElementById('faCont').innerHTML = _logUsers.card4;
// document.getElementById('faCont1').innerHTML = _logUsers.card5;
document.getElementById('checkMe1').innerHTML = _logUsers.card6;
document.getElementById('forpass1').innerHTML = _logUsers.card7;


// To Login to your account code here

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    let users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.username === username && user.password === password);
  
    if (user) {
      localStorage.setItem('loggedInUser', username);
      window.location.href = 'dashboard.html';
    } else {
      alert('Invalid username or password.');
    }
  });