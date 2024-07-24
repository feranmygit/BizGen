// creating businesses and storing to saveToLocalStorage


let businesses = JSON.parse(localStorage.getItem('businesses')) || [];
let editingPlanIndex = null;

function saveToLocalStorage() {
  localStorage.setItem('businesses', JSON.stringify(businesses));
}

// Data Creation 

function createBusiness() {
  const name = document.getElementById('business-name').value;
  const type = document.getElementById('business-type').value;
  const description = document.getElementById('business-description').value;
  const visibility = document.querySelector('input[name="visibility"]:checked').value;
  const username = localStorage.getItem('loggedInUser');
  
  if (name && description && type) {
    const business = { name, type, description, visibility, username };
    if (editingPlanIndex !== null) {
      businesses[editingPlanIndex] = business;
      editingPlanIndex = null;
      document.getElementById('create-business-button').innerText = 'Create Business';
      alert('Business updated successfully!');
    } else {
      businesses.push(business);
      alert('Business created successfully!');
    }
    saveToLocalStorage();
    cancelCreateBusiness();
    loadBusinesses();
  } else {
    alert('Please fill in all fields.');
  }
}

// Data Display or Visualization 

function loadBusinesses() {
  const username = localStorage.getItem('loggedInUser');
  const businessCards = document.getElementById('business-cards');
  const businessList = document.getElementById('business-list');
  businessCards.innerHTML = '';
  businessList.innerHTML = '';
  businesses.forEach((b, index) => {
    if (b.visibility === 'public' || b.username === username) {
      businessCards.innerHTML += `
         <div class="cardEdit">
              <div class="cardContTitle">
                  <h3>${b.name}</h3>
                  <div class="dropdown">
                    <button class="dropbtn" onclick="toggleMenu(${index})">⋮</button>
                    <div id="dropdown-content-${index}" class="dropdown-content">
                      <button onclick="viewBusiness(${index})">View business</button>
                      <button onclick="editBusiness(${index})">Edit</button>
                      <button onclick="deleteBusiness(${index})">Delete</button>
                      <button onclick="printBusiness(${index})">Print</button>
                      <button onclick="downloadBusiness(${index})">Download</button>
                      <button onclick="copyLink(${index})">Copy Link</button>
                      <button onclick="shareLink(${index})">Share Link</button>
                    </div>
                  </div>
              </div>
          <p class="dashPar">${b.description}</p>
        </div>
      `;
      businessList.innerHTML += `
        <tr>
          <td class="dataEntry">${b.name}</td>
          <td class="dataEntry">${b.description}</td>
          <td class="dataEntry">${b.type}</td>
          <td class="dataEntry">${b.visibility}</td>
          <td><button onclick="editBusiness(${index})">Edit</button></td>
          <td><button onclick="deleteBusiness(${index})">Delete</button></td>
          <td><button class="btnPrint" onclick="printBusiness(${index})">Print</button></td>
          <td><button class="btnDownload" onclick="downloadBusiness(${index})">Download</button></td>
        </tr>
      `;
    }
  });
}

function viewBusiness(index) {
  const business = businesses[index];
  let viewBusiness = document.getElementById('viewBusiness');
  viewBusiness.innerHTML = `
          <div class="goBackContainer" onclick="goBack()">
                <div class="goBack-icon" id="goBack">
                    <i class="fa-solid  fa-arrow-left"></i>
                </div>
          </div>
          <div class="viewData">
            <h3 class="viewName">${business.name}</h3>
            <p><h4>Type:</h4> ${business.type}</p>
            <p class="viewDescription"><h4>Description:</h4> ${business.description}</p>
            <p><h4>Visibility:</h4> ${business.visibility}</p>
          </div>
  `;
      document.getElementById('viewBusiness').style.display = 'block';

}


function editBusiness(index) {
  const business = businesses[index];
  document.getElementById('business-name').value = business.name;
  document.getElementById('business-type').value = business.type;
  document.getElementById('business-description').value = business.description;
  document.querySelector(`input[name="visibility"][value="${business.visibility}"]`).checked = true;
  editingPlanIndex = index; 
  document.getElementById('Dash_section1').style.display = 'none';
  document.getElementById('mainCard-content').style.display = 'none';
  document.getElementById('Dash_section2').style.display = 'block';
  document.getElementById('showHomePage').style.display = 'block';
  document.getElementById('all-businesses').style.display = 'none';
  document.getElementById('Dash_section5').style.display = 'none';
  document.getElementById('mainWrapper1').style.display = 'block';  
  document.getElementById('create-business-button').innerText = 'Update Business';
  document.getElementById('bizGenerate').innerText = 'Edit Business Created';

}

function deleteBusiness(index) {
  if (confirm('Are you sure you want to delete this business?')) {
    businesses.splice(index, 1);
    saveToLocalStorage();
    loadBusinesses();
  }
}

function printBusiness(index) {
  const business = businesses[index];
  const printContent = `
    <h3>${business.name}</h3>
    <p>Type: ${business.type}</p>
    <p>Description: ${business.description}</p>
    <p>Visibility: ${business.visibility}</p>
  `;
  const printWindow = window.open('', '', 'width=600,height=400');
  printWindow.document.write('<html><head><title>Print Business</title></head><body>');
  printWindow.document.write(printContent);
  printWindow.document.write('</body></html>');
  printWindow.document.close();
  printWindow.print();
}

function downloadBusiness(index) {
  const business = businesses[index];
  const businessData = `
    Name: ${business.name}\n
    Type: ${business.type}\n
    Description: ${business.description}\n
    Visibility: ${business.visibility}
  `;
  const blob = new Blob([businessData], { type: 'text/plain' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `${business.name}.txt`;
  link.click();
}

function copyLink(index) {
  const business = businesses[index];
  const url = `${window.location.href}?business=${index}`;
  navigator.clipboard.writeText(url).then(() => {
    alert('Link copied to clipboard');
  });
}

function shareLink(index) {
  const business = businesses[index];
  const url = `${window.location.href}?business=${index}`;
  if (navigator.share) {
    navigator.share({
      title: business.name,
      text: `Check out this business: ${business.name}`,
      url: url,
    })
    .then(() => console.log('Share successful'))
    .catch(error => console.log('Share failed', error));
  } else {
    alert('Web Share API is not supported in your browser.');
  }
}

function cancelCreateBusiness() {
  document.getElementById('business-name').value = '';
  document.getElementById('business-type').value = '';
  document.getElementById('business-description').value = '';
  document.querySelector(`input[name="visibility"][value="public"]`).checked = true;
  editingPlanIndex = null;
  document.getElementById('create-business-button').innerText = 'Create Business';
}

loadBusinesses();



  // To show up a container if no businesses created yet 

function showIfNothing(){
  let businesses = JSON.parse(localStorage.getItem('businesses')) || [];
  const username = localStorage.getItem('loggedInUser');
  const Dash = document.getElementById('Dash_section5');
  const DashNew = document.getElementById('Dash_sectionNew');
  const tableContainer = document.getElementById('tableContainer');
  const createMore = document.getElementById('createMore');
  businesses.forEach(b => {
    if(!b.name || !b.description || !b.type || b.visibility === 'public' || b.username === username){
      Dash.style.display = 'block';
      DashNew.style.display = 'block';
      tableContainer.style.display = 'none';
      createMore.style.display = 'none';

    }
  })
}
showIfNothing();


  // To hide a container if atleast a business is created  

function showIfSomething(){
  let businesses = JSON.parse(localStorage.getItem('businesses')) || [];
  const username = localStorage.getItem('loggedInUser');
  const Dash = document.getElementById('Dash_section5');
  const DashNew = document.getElementById('Dash_sectionNew');
  const tableContainer = document.getElementById('tableContainer');
  const createMore = document.getElementById('createMore');
  businesses.forEach(b => {
    if(b.name, b.description, b.type, b.visibility === 'public' || b.username === username){
      Dash.style.display = 'none';
      DashNew.style.display = 'none';
      tableContainer.style.display = 'block';
      createMore.style.display = 'block';
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
    document.getElementById('mainWrapper1').style.display = 'block';
  };
  
  function cancelCreateBusiness() {
    window.location.href = 'dashboard.html';
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
  function viewbizContainer(){
    window.location.href = 'businessDetails.html';
  }
  function goBack(){
    window.location.href = 'dashboard.html';
  }

// Toggling the visibility of some underlay color containers inside DOMContentLoaded

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
      if(confirm((`${username}, You are about to Logout!`))){
          localStorage.removeItem('loggedInUser');
          window.location.href = 'landingPage.html';
    }
});

    document.getElementById('logoutButton2').addEventListener('click', function() {
      if(confirm((`${username}, You are about to Logout!`))){
          localStorage.removeItem('loggedInUser');
          window.location.href = 'landingPage.html';
    }
});


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


const user = getUser(username);
if (user && user.avatar) {
  document.getElementById('userAvatar').src = user.avatar;
}

});

function getUser(username) {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  return users.find(user => user.username === username);
}



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

function toggleMenu(index) {
  const menu = document.getElementById(`dropdown-content-${index}`);
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'block';
  }
}








