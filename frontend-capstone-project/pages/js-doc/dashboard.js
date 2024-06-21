document.addEventListener('DOMContentLoaded', function(){
    const hamburger = document.getElementById('hamburger');
    const coverColor = document.getElementById('coverColor');

    function togglecoverColor(){
            coverColor.classList.toggle('open');
            
    };
    hamburger.addEventListener('click', togglecoverColor);

});

function myFunction(){
    coverColor.classList.toggle('open');
}