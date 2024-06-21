document.addEventListener('DOMContentLoaded', function(){
    const hamburger = document.getElementById('hamburger');
    const coverColor = document.getElementById('coverColor');
    const searcBtn = document.getElementById('searcBtn');
    const overlay = document.getElementById('overlay');

    function togglecoverColor(){
            coverColor.classList.toggle('open');
            
    };
    function myinputIcon(){
        overlay.classList.toggle('propmt');
    };
    searcBtn.addEventListener('click', myinputIcon);
    hamburger.addEventListener('click', togglecoverColor);

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
