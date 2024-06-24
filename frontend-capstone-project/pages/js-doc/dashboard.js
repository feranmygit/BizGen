document.addEventListener('DOMContentLoaded', function(){
    const hamburger = document.getElementById('hamburger');
    const coverColor = document.getElementById('coverColor');
    const searcBtn = document.getElementById('searcBtn');
    const overlay = document.getElementById('overlay');
    const menuList = document.getElementById('menuList');
    const dotHamburger = document.getElementById('dotHamburger');

    function togglecoverColor(){
            coverColor.classList.toggle('open');
            
    };
    function myinputIcon(){
        overlay.classList.toggle('propmt');
    };
    function myDot(){
        menuList.classList.toggle('active');
    };
    
    dotHamburger.addEventListener('click', myDot);
    searcBtn.addEventListener('click', myinputIcon);
    hamburger.addEventListener('click', togglecoverColor);


    const username = localStorage.getItem('loggedInUser');
    if (!username) {
      window.location.href = 'login.html';
      return;
    };

    document.getElementById('usernameDisplay1').innerText = username;
    document.getElementById('usernameDisplay').innerText = username;
    document.getElementById('logoutButton').addEventListener('click', function() {
      localStorage.removeItem('loggedInUser');
      window.location.href = './login.html';
    });
});













function myFunction(){
    coverColor.classList.toggle('open');
}

const inputIcon = document.getElementById('inputIcon');
const overlay = document.getElementById('overlay');

function myBtn(){
    inputIcon.classList.toggle('show');
} 
// function myinputIcon(){
//     overlay.classList.toggle('propmt')
// }






