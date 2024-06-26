let businesses = JSON.parse(localStorage.getItem('businesses')) || [];

// creating businesses and storing to saveToLocalStorage

function saveToLocalStorage() {
  localStorage.setItem('businesses', JSON.stringify(businesses));
};

function showCreateBusinessForm() {
  document.getElementById('Dash_section1').style.display = 'none';
  document.getElementById('mainCard-content').style.display = 'none';
  document.getElementById('Dash_section2').style.display = 'block';
  document.getElementById('all-businesses').style.display = 'none';
};

function cancelCreateBusiness() {
  document.getElementById('Dash_section1').style.display = 'block';
  document.getElementById('Dash_section2').style.display = 'none';
  document.getElementById('all-businesses').style.display = 'none';
  document.getElementById('mainCard-content').style.display = 'block';
};

function createBusiness() {
  const name = document.getElementById('business-name').value;
  const description = document.getElementById('business-description').value;
  const visibility = document.querySelector('input[name="visibility"]:checked').value;
  const username = localStorage.getItem('loggedInUser');
  if (name && description) {
    businesses.push({ name, description, visibility, username });
    saveToLocalStorage();
    alert('Business created successfully!');
    cancelCreateBusiness();
    loadBusinesses();
  } else {
    alert('Please fill in all fields.');
  }
};


function loadBusinesses() {
  const username = localStorage.getItem('loggedInUser');
  const businessCards = document.getElementById('business-cards');
  const businessList = document.getElementById('business-list');
  businessCards.innerHTML = '';
  businessList.innerHTML = '';
  businesses.forEach(b => {
    if (b.visibility === 'public' || b.username === username) {
      businessCards.innerHTML += `
        <div class="card">
          <h3>${b.name}</h3>
          <p class="dashPar">${b.description}</p>
        </div>
      `;
      businessList.innerHTML += `
        <tr>
          <td>${b.name}</td>
          <td>${b.description}</td>
          <td>${b.visibility}</td>
        </tr>
      `;
    }
  });
}
  loadBusinesses();

function showAllBusinesses() {
  document.getElementById('mainCard-content').style.display = 'none';
  document.getElementById('Dash_section1').style.display = 'none';
  document.getElementById('all-businesses').style.display = 'block';
  document.getElementById('Dash_section2').style.display = 'none';
}



// Toggling the visibility of some containers 

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


    // To logout of your account 

    const username = localStorage.getItem('loggedInUser');
    if (!username) {
      window.location.href = 'login.html';
      return;
    };
    document.getElementById('logoutButton').addEventListener('click', function() {
      localStorage.removeItem('loggedInUser');
      window.location.href = './login.html';
    });

    // document.getElementById('remve').addEventListener('click', function() {
    //   localStorage.removeItem('businesses');
    //   window.location.href = 'dashboard.html';
    // });


    // To set the users username where needed on the website

    document.getElementById('usernameDisplay1').innerText = username;
    document.getElementById('usernameDisplay2').innerText = username;
    document.getElementById('usernameDisplay').innerText = username;
   
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






