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


// To Register a New account code here

document.getElementById('signUpForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if (!username || !password) {
      alert('Please fill in all fields.');
      return;
    }
  
    let users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.some(user => user.username === username && user.password === password)) {
      alert('Username already exists.');
      return;
    }
  
    users.push({ username, password, avatar: '', profile: {} });
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('loggedInUser', username);
    alert('Account created successfully, Kindly login.')
    window.location.href = 'login.html';
  });












// document.getElementById('signUpForm').addEventListener('submit', function(event) {
//     event.preventDefault();
  
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;
  
//     if (!username || !password) {
//       alert('Please fill in all fields.');
//       return;
//     }
  
//     let users = JSON.parse(localStorage.getItem('users')) || [];
//     if (users.some(user => user.username === username && user.password === password)) {
//       alert('Username already exists.');
//       return;
//     }
  
//     users.push({ username, password, avatar: ''});
//     localStorage.setItem('users', JSON.stringify(users));
//     localStorage.setItem('loggedInUser', username);
//     alert('Account created successfully, Kindly login.')
//     window.location.href = 'login.html';
//   });




  // document.getElementById('inputDataContainer1').addEventListener('submit', function(event) {
  //   event.preventDefault();
  
  //   const DataInfoOne = document.getElementById('DataInfoOne').value;
  //   const username = localStorage.getItem('loggedInUser');  
  
  // if (!DataInfoOne) {
  //     alert('Please fill the field.');    
  //     return;
  //   }
  
  //   if (!username){
  //     alert('No logged-in user found.');
  //     return;
  //   }
  
  //   let info = JSON.parse(localStorage.getItem('info')) || [];
  //     loggedInUser.DataInfoOne = DataInfoOne;
  //     users[loggedInUser.username] = loggedInUser;
  //       info.push({ DataInfoOne});
  //       localStorage.setItem(username, JSON.stringify(info));
  //       localStorage.setItem('userInfoOne', DataInfoOne);
  //         alert('Input Received');     
  //          return;
  
  //   // if (username === 'loggedInUser'){
  //   //   const username = localStorage.getItem('loggedInUser');
  //   //   let info = JSON.parse(localStorage.getItem(username)) || [];
  //   //   info.push({ DataInfoOne, username});
  //   //   localStorage.setItem(username, JSON.stringify(info));
  //   //   localStorage.setItem('userInfoOne', DataInfoOne);
  //   //     alert('Input Received');
  //   // }
  // });