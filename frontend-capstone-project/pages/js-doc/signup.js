const _logUsers = {
    card1: `Register a New Account`,
    card2: `Create an Account`,
    card3: `, Or register with`,
    card4: `Sign Up with Facebook`,
    card5: `Sign Up with Google`,
    card6: `Remember Me`,
    card7: `Forgot Password?`,
};
document.getElementById('logTitle2').innerHTML = _logUsers.card1;
document.getElementById('logPar2').innerHTML = _logUsers.card2;
// document.getElementById('logPar3').innerHTML = _logUsers.card3;
// document.getElementById('faCont2').innerHTML = _logUsers.card4;
// document.getElementById('faCont3').innerHTML = _logUsers.card5;
document.getElementById('checkMe2').innerHTML = _logUsers.card6;
document.getElementById('forpass2').innerHTML = _logUsers.card7;


document.getElementById('signUpForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if (!username || !password) {
      alert('Please fill in all fields.');
      return;
    }
  
    let users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.some(user => user.username === username)) {
      alert('Username already exists.');
      return;
    }
  
    users.push({ username, password, avatar: '' });
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('loggedInUser', username);
  
    window.location.href = 'dashboard.html';
  });