const inputIcon = document.getElementById('inputIcon');

function myBtnProfile(){
  inputIcon.classList.toggle('show');
}

function goBack(){
  window.location.href = 'dashboard.html';
}

const username = localStorage.getItem('loggedInUser');

document.getElementById('usernameDisplay1').innerText = username;
