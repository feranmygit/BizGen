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

function showAllBusinesses() {
  document.getElementById('mainCard-content').style.display = 'none';
  document.getElementById('Dash_section1').style.display = 'none';
  document.getElementById('all-businesses').style.display = 'block';
  document.getElementById('Dash_section2').style.display = 'none';
}

function showProfile(){
  window.location.href = 'profile.html';
}

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


// Toggling the visibility of some containers 

document.addEventListener('DOMContentLoaded', function(){
    const hamburger = document.getElementById('hamburger');
    const coverColor = document.getElementById('coverColor');
    const overlayColor = document.getElementById('overlayColor');
    const overlayColor1 = document.getElementById('overlayColor1');
    const overlayColor2 = document.getElementById('overlayColor2');
    const dotHamburger = document.getElementById('dotHamburger');
    const menuList = document.getElementById('menuList');
    const personalSetting = document.getElementById('personalSetting');
    const pBarTop = document.getElementById('pBarTop');
    const genSetting = document.getElementById('genSetting');
    const pBarDown = document.getElementById('pBarDown');


    function togglecoverColor1(){
      overlayColor1.classList.toggle('open');
      pBarTop.classList.toggle('open');
    };
    function togglecoverColor2(){
      overlayColor2.classList.toggle('open');
      pBarDown.classList.toggle('open');
    };
    function togglecoverColor(){
            coverColor.classList.toggle('open');
    };
    function toggleoverlayColor(){
            overlayColor.classList.toggle('open');
            menuList.classList.toggle('open');
    };

   
    personalSetting.addEventListener('click', togglecoverColor1);
    genSetting.addEventListener('click', togglecoverColor2);
    dotHamburger.addEventListener('click', toggleoverlayColor);
    hamburger.addEventListener('click', togglecoverColor);


    // To logout of your account 

    const username = localStorage.getItem('loggedInUser');
    if (!username) {
      window.location.href = 'login.html';
      return;
    };

    document.getElementById('logoutButton').addEventListener('click', function() {
      if(this.click){
        alert(`${username}, You are about to Logout!`);
      }
        alert.click;
          localStorage.removeItem('loggedInUser');
          window.location.href = 'landingPage.html';{
            alert('Return to Homepage?')
          }
    });

    document.getElementById('logoutButton2').addEventListener('click', function() {

      if(this.click){
        alert(`${username}, You are about to Logout!`);
      }
        alert.click;
          localStorage.removeItem('loggedInUser');
          window.location.href = 'landingPage.html';{
            alert('Return to Homepage?')
          }
      
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

// using onclick Event on a container 

function myFunction(){
    coverColor.classList.toggle('open');
}
function myToggle(){
    overlayColor.classList.toggle('open');
    menuList.classList.toggle('open');
}
function myToggleTop(){
    overlayColor1.classList.toggle('open');
    pBarTop.classList.toggle('open');
}
function myToggleDown(){
    overlayColor2.classList.toggle('open');
    pBarDown.classList.toggle('open');
}

const inputIcon = document.getElementById('inputIcon');

function myBtn(){
  inputIcon.classList.toggle('show');
} 


// using MouseEvent instead of clicking Event 
// function showSetting(){
//   pBarDown.classList.toggle('open');
//   overlayColor2.classList.toggle('open');
// }
// function showSetting1(){
//   overlayColor1.classList.toggle('open');
//   pBarTop.classList.toggle('open');
// }






