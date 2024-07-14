
document.addEventListener('DOMContentLoaded', function(){
  const hamburger = document.getElementById('hamburger');
  const underlay = document.getElementById('underlay');


  function toggleunderlayColor(){
          underlay.classList.toggle('open');

          
  };

  hamburger.addEventListener('click', toggleunderlayColor);

});

const underlay = document.getElementById('underlay');

function myunderlay(){
        underlay.classList.toggle('open');
};

const  input = document.getElementById('input');

input.addEventListener('click', () => {
        menu.classList.toggle('active');
})


document.getElementById('homeBar').addEventListener('click', () => {
  window.location.href = 'landingPage.html';
  return;
});

document.getElementById('startBar').addEventListener('click', () => {
  window.location.href = 'login.html';
  return;
});

document.getElementById('LoginBar').addEventListener('click', () => {
  window.location.href = 'login.html';
  return;
});

document.getElementById('LogOUtBar').addEventListener('click', () => {
  window.location.href = 'signup.html';
  return;
});


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
