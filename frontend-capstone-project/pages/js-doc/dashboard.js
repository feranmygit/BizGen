// creating businesses and storing to saveToLocalStorage

let businesses = JSON.parse(localStorage.getItem('businesses')) || [];

function saveToLocalStorage() {
  localStorage.setItem('businesses', JSON.stringify(businesses));
};

// Data Creation 

function createBusiness() {
  const name = document.getElementById('business-name').value;
  const type = document.getElementById('business-type').value;
  const description = document.getElementById('business-description').value;
  const visibility = document.querySelector('input[name="visibility"]:checked').value;
  const username = localStorage.getItem('loggedInUser');
  if (name && description && type) {
    businesses.push({ name, type, description, visibility, username });
    saveToLocalStorage();
    alert('Business created successfully!');
    cancelCreateBusiness();
    loadBusinesses();
  } else {
    alert('Please fill in all fields.');
  }
};

// Data Display or Visualization 

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
          <td class="dataEntry">${b.name}</td>
          <td class="dataEntry">${b.description}</td>
          <td class="dataEntry">${b.type}</td>
          <td class="dataEntry">${b.visibility}</td>
        </tr>
      `;
    }
  });
}
  loadBusinesses();


  // To show up a container if no businesses created yet 

function showIfNothing(){
  let businesses = JSON.parse(localStorage.getItem('businesses')) || [];
  const username = localStorage.getItem('loggedInUser');
  const Dash = document.getElementById('Dash_section5');
  businesses.forEach(b => {
    if(!b.name || !b.description || !b.type || b.visibility === 'public' || b.username === username){
      Dash.style.display = 'block';
    }
  })
}
showIfNothing();


  // To hide a container if atleast a business is created  

function showIfSomething(){
  let businesses = JSON.parse(localStorage.getItem('businesses')) || [];
  const username = localStorage.getItem('loggedInUser');
  const Dash = document.getElementById('Dash_section5');
  businesses.forEach(b => {
    if(b.name, b.description, b.type, b.visibility === 'public' || b.username === username){
      Dash.style.display = 'none';
    }
  })
}
showIfSomething();

// To set display visibility of some content 

  function showCreateBusinessForm() {
    document.getElementById('Dash_section1').style.display = 'none';
    document.getElementById('mainCard-content').style.display = 'none';
    document.getElementById('Dash_section2').style.display = 'block';
    document.getElementById('showHomePage').style.display = 'block';
    document.getElementById('all-businesses').style.display = 'none';
    document.getElementById('Dash_section5').style.display = 'none';
  };
  
  function cancelCreateBusiness() {
    window.location.href = 'dashboard.html';
    // document.getElementById('Dash_section2').style.display = 'none';
    // document.getElementById('all-businesses').style.display = 'none';
    // document.getElementById('showHomePage').style.display = 'none';
    // document.getElementById('mainCard-content').style.display = 'block';
    // // document.getElementById('Dash_section5').style.display = 'block';
  };
  
  function showAllBusinesses() {
    document.getElementById('mainCard-content').style.display = 'none';
    document.getElementById('Dash_section1').style.display = 'none';
    document.getElementById('all-businesses').style.display = 'block';
    document.getElementById('showHomePage').style.display = 'block';
    document.getElementById('Dash_section2').style.display = 'none';
    document.getElementById('mainWrapper1').style.display = 'none';
    document.getElementById('Dash_section5').style.display = 'block';
  }
  
  function showProfile(){
    window.location.href = 'profile.html';
  }
  function showHomePage(){
    window.location.href = 'dashboard.html';
  }
  function displayHomePage(){
    window.location.href = 'dashboard.html';
  }
  function logoHomePage(){
    window.location.href = 'dashboard.html';
  }

// Toggling the visibility of some containers inside DOMContentLoaded

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



    // To logout of your account inside DOMContentLoaded

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


    // To set the users username where needed on the website inside DOMContentLoaded

    document.getElementById('usernameDisplay1').innerText = username;
    document.getElementById('usernameDisplay2').innerText = username;
    document.getElementById('usernameDisplay').innerText = username;
   


    // PDF Formatter Generation inside DOMContentLoaded

document.getElementById('generatePdf').addEventListener('click', ( ) => {
  const { jsPDF } = window.jspdf;
  let businesses = JSON.parse(localStorage.getItem('businesses')) || [];
  const doc = new jsPDF();

  const username = localStorage.getItem('loggedInUser');
  const publicBusinesses = businesses.filter(b => b.visibility === 'public' || b.username === username);
  const tableData = publicBusinesses.map(b => [b.name, b.description, b.type, b.visibility]);
  const tableHeaders = [["Name", "Description", "Type", "Visibility"]];

  doc.autoTable({
    head: tableHeaders,
    body: tableData
});


    doc.save('All_Businesses.pdf');
})

});

// using onclick Event on a container 

const convColor = document.getElementById('convColor');
const confirmDownload = document.getElementById('confirmDownload');
function confirmFunctionf(){
  confirmDownload.style.display = 'block';
  convColor.style.display = 'block';
}
function confirmBtn(){
  confirmDownload.style.display = 'none';
  convColor.style.display = 'none';
}
function removeConfirm(){
  confirmDownload.style.display = 'none';
  convColor.style.display = 'none';
}

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






