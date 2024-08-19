// creating businesses and storing to saveToLocalStorage


let businesses = JSON.parse(localStorage.getItem('businesses')) || [];
let editingPlanIndex = null;
let users = JSON.parse(localStorage.getItem('users')) || [];


// function to truncateUsername incase user input is more than expected lenght 

function truncateUsername(username, maxLength) {
  if (username.length > maxLength) {
    return username.slice(0, maxLength) + '...';
  }
  return username;
}


// Load user profile from local storage

function getUserProfile(username) {
  return JSON.parse(localStorage.getItem(`profile_${username}`)) || {};
}

function saveUserProfile(username, profile) {
  localStorage.setItem(`profile_${username}`, JSON.stringify(profile));
}

function loadUserProfile() {
  const username = localStorage.getItem('loggedInUser');
  const profile = getUserProfile(username);
  

  if (profile.picture) {
    document.getElementById('profile-picture1').src = profile.picture;
  } else {
    document.getElementById('profile-picture1').src = './assets/avaters/user avater.jpg';
  }
}
loadUserProfile();

function saveToLocalStorage() {
  localStorage.setItem('businesses', JSON.stringify(businesses));
}

// Data Creation 

function createBusiness() {
  const name = document.getElementById('business-name').value;
  const type = document.getElementById('business-type').value;
  const description = document.getElementById('business-description').value;
  const planType = document.getElementById('planType').value;
  const visibility = document.querySelector('input[name="visibility"]:checked').value;
  const username = localStorage.getItem('loggedInUser');
  
  if (name && description && type && planType) {
    const business = { name, type, description, planType, visibility, username };
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

function loadBusinesses(filteredBusinesses = businesses) {
  const username = localStorage.getItem('loggedInUser');
  const businessCards = document.getElementById('business-cards');
  const businessList = document.getElementById('business-list');
  businessCards.innerHTML = '';
  businessList.innerHTML = '';
  filteredBusinesses.forEach((b, index) => {
    if (b.visibility === 'public' || b.username === username) {
      businessCards.innerHTML += `
         <div class="cardEdit">
              <div class="cardContTitle">
                  <h3 class="">${b.name}</h3>
                  <div class="dropdown cardEdit1">
                   <div class="cardDotCont cardDotCont1">
                      <div class="threeDot dropbtn" onclick="toggleMenu(${index})">
                      </div>
                  </div>
                    <div id="dropdown-content-${index}" class="dropdown-content">
                      <a href="./viewBusiness.html?index=${index}"><button>View</button></a>     
                      <button onclick="editBusiness(${index})">Edit</button>
                      <button onclick="deleteBusiness(${index})">Delete</button>
                      <button onclick="showAllBusinesses(${index})">Show Table</button>
                      <button onclick="downloadBusiness(${index})">Download</button>
                      <button onclick="copyLink(${index})">Copy Link</button>
                    </div>
                  </div>
              </div>
          <p class="dashPar">${b.description}</p>
        </div>
      `;
      businessList.innerHTML += `
        <tr>
          <div id="dropdown-content-${index}" class="dropdown-content">
              <td class="dataEntry1">${b.name}</td>
              <td class="dataEntry">${b.type}</td>
              <td class="dataEntry">${b.planType}</td>
              <td class="dataEntry">${b.visibility}</td>
              <td> 
                <div class="cardEdit2">
                  <div class="cardDotCont cardDotCont2 " onclick="cardViewBtnContainers(${index})">
                      <div class="threeDot">
                      </div>
                  </div>
              </td>
              <div class="cardTableBtnCont" id="cardTableBtnCont${index}">
                <div class="cardTableBtn dropdowncardTableBtn">
                  <a href="./viewBusiness.html?index=${index}"><button class="viewBt">View</button></a>                <button onclick="editBusiness(${index})">Edit</button>
                  <button onclick="deleteBusiness(${index})">Delete</button>
                  <button class="btnPrint" onclick="printBusiness(${index})">Print</button>
                  <button class="btnDownload" onclick="downloadBusiness(${index})">Download</button>
                  <button onclick="shareLink(${index})">Share</button>
                </div>
              </div>
          </div>
           </div> 
        </tr>
      `;
    }
  });
}

loadBusinesses();


// toggleMenu with underlay color 1

function cardViewBtnContainers(index) {
  let menu = document.getElementById(`cardTableBtnCont${index}`);
  const tableUnderlay = document.getElementById('btnUnderlay');
  
  btnUnderlay();

  if (menu.style.display === 'block') {
    menu.style.display = 'none';
    tableUnderlay.style.display = 'none';
  } else {
    menu.style.display = 'block';
    tableUnderlay.style.display = 'block';
  }
}

function btnUnderlay() {
  const menus = document.querySelectorAll('.cardTableBtnCont');
  menus.forEach(menu => menu.style.display = 'none');
  
  const tableUnderlay = document.getElementById('btnUnderlay');
  tableUnderlay.style.display = 'none';
}

// toggleMenu with underlay color 2

function toggleMenu(index) {
  const menu = document.getElementById(`dropdown-content-${index}`);
  const viewUnderlay = document.getElementById('viewUnderlay');
  
  closeAllMenus();

  if (menu.style.display === 'block') {
    menu.style.display = 'none';
    viewUnderlay.style.display = 'none';
  } else {
    menu.style.display = 'block';
    viewUnderlay.style.display = 'block';
  }
}

function closeAllMenus() {
  const menus = document.querySelectorAll('.dropdown-content');
  menus.forEach(menu => menu.style.display = 'none');
  
  const viewUnderlay = document.getElementById('viewUnderlay');
  viewUnderlay.style.display = 'none';
}


// Data modification or restructuring 

function editBusiness(index) {
  const business = businesses[index];
  document.getElementById('business-name').value = business.name;
  document.getElementById('business-type').value = business.type;
  document.getElementById('planType').value = business.planType;
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
  document.getElementById('btnUnderlay').style.display = 'none'; 
  document.getElementById('viewUnderlay').style.display = 'none'; 
  document.getElementById('create-business-button').innerText = 'Update Business';
  document.getElementById('bizGenerate').innerText = 'Edit Business Created';

}

// Data destruction or deletion 

function deleteBusiness(index) {
  if (confirm('Are you sure you want to delete this business?')) {
    businesses.splice(index, 1);
    saveToLocalStorage();
    loadBusinesses();
  }
}

// Data printing 

function printBusiness(index) {
  const business = businesses[index];
  const printContent = `
    <h3>${business.name}</h3>
    <p>Type: ${business.type}</p>
    <p>Plan Type: ${business.planType}</p>
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

// Data collection or download 

function downloadBusiness(index) {
  const business = businesses[index];
  const businessData = `
    Name: ${business.name}\n
    Type: ${business.type}\n
    Plan Type: ${business.planType}\n
    Description: ${business.description}\n
    Visibility: ${business.visibility}
  `;
  if(confirm((`Do you want to download this business plan in a document text type?`))){
    const blob = new Blob([businessData], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${business.name}.txt`;
  link.click();
  }
}

// Data link collection or fetching 

function copyLink(index) {
  const business = businesses[index];
  const url = `${window.location.href}?business=${index}`;
  navigator.clipboard.writeText(url).then(() => {
    alert('Link copied to clipboard');
  });
}

// Data sharing functionality 

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


// To search for a name of a business by setting filteredBusinesses = businesses 

function searchByname() {
  const searchInput = document.getElementById('searchInput').value.toLowerCase();
  const filteredBusinesses = businesses.filter(business => 
    business.name.toLowerCase().includes(searchInput)
  );
  loadBusinesses(filteredBusinesses);
}




function cancelCreateBusiness() {
  document.getElementById('business-name').value = '';
  document.getElementById('business-type').value = '';
  document.getElementById('business-planType').value = '';
  document.getElementById('business-description').value = '';
  document.querySelector(`input[name="visibility"][value="public"]`).checked = true;
  editingPlanIndex = null;
  document.getElementById('create-business-button').innerText = 'Create Business';
}


  // To show up a container if no businesses created yet 

function showIfNothing(){
  let businesses = JSON.parse(localStorage.getItem('businesses')) || [];
  const username = localStorage.getItem('loggedInUser');
  const Dash = document.getElementById('Dash_section5');
  const DashNew = document.getElementById('Dash_sectionNew');
  const tableContainer = document.getElementById('tableContainer');
  const createMore = document.getElementById('createMore');
  const createMore1 = document.getElementById('createMore1');
  businesses.forEach(b => {
    if(!b.name || !b.description || !b.type || b.visibility === 'public' || b.username === username){
      Dash.style.display = 'block';
      DashNew.style.display = 'block';
      tableContainer.style.display = 'none';
      createMore.style.display = 'none';
      createMore1.style.display = 'none';

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
  const createMore1 = document.getElementById('createMore1');
  businesses.forEach(b => {
    if(b.name, b.description, b.type, b.visibility === 'public' || b.username === username){
      Dash.style.display = 'none';
      DashNew.style.display = 'none';
      tableContainer.style.display = 'block';
      createMore.style.display = 'block';
      createMore1.style.display = 'block';
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
    document.getElementById('btnUnderlay').style.display = 'none'; 
    document.getElementById('viewUnderlay').style.display = 'none'; 
  }


  // To redirect pages 
  
  function EditProfile() {
    window.location.href = 'editProfile.html';
  }
  function removeProfileEditPage() {
    window.location.href = 'profile.html';
  }
 function viewBusiness(index){
  window.location.href = 'viewBusiness.html';
 }
  function avaterBtn(){
    window.location.href = 'profile.html';
  }
  function showProfile(){
    window.location.href = 'profile.html';
  }
  function reloadDashboard(){
    window.location.href = 'dashboard.html';
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


    // function togglecoverColor1(){
    //   overlayColor1.classList.toggle('open');
    //   pBarTop.classList.toggle('open');
    // };
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

   
    // personalSetting.addEventListener('click', togglecoverColor1);
    // genSetting.addEventListener('click', togglecoverColor2);
    dotHamburger.addEventListener('click', toggleoverlayColor);
    hamburger.addEventListener('click', togglecoverColor);



    // To logout of your account inside DOMContentLoaded

    const username = localStorage.getItem('loggedInUser');
    if (!username) {
      window.location.href = 'login.html';
      return;
    };

    const themeKey = 'theme';
    document.getElementById('logoutButton').addEventListener('click', function() {
      if(confirm((`${username}, You are about to Logout!`))){
          localStorage.removeItem('loggedInUser');
          localStorage.removeItem(themeKey);
          window.location.href = 'landingPage.html';
    }
});

    document.getElementById('logoutButton2').addEventListener('click', function() {
      if(confirm((`${username}, You are about to Logout!`))){
          localStorage.removeItem('loggedInUser');
          localStorage.removeItem(themeKey);
          window.location.href = 'landingPage.html';
    }
});


    // To set the users username where needed on the website inside DOMContentLoaded

      const maxLength = 10; 
      const truncatedUsername = truncateUsername(username, maxLength);
      
      document.getElementById('usernameDisplay1').innerText = username;
    document.getElementById('usernameDisplay2').innerText = truncatedUsername;
    document.getElementById('usernameDisplay').innerText = truncatedUsername;
   


    // PDF Formatter Generation inside DOMContentLoaded

document.getElementById('generatePdf').addEventListener('click', ( ) => {
  const { jsPDF } = window.jspdf;
  let businesses = JSON.parse(localStorage.getItem('businesses')) || [];
  const doc = new jsPDF();

  const username = localStorage.getItem('loggedInUser');
  const publicBusinesses = businesses.filter(b => b.visibility === 'public' || b.username === username);
  const tableData = publicBusinesses.map(b => [b.name, b.description, b.type, b.planType, b.visibility]);
  const tableHeaders = [["Name", "Description", "Type", "Plan Type", "Visibility"]];

  doc.autoTable({
    head: tableHeaders,
    body: tableData
});


    doc.save('All_Businesses.pdf');
})

});

document.getElementById('iconTheme').addEventListener('click', () =>{
  document.getElementById('themeSelectionUnderlay').style.display = 'block';
  document.getElementById('topbottomTheme').style.height = '15rem';
  document.getElementById('topbottomTheme').style.transition = '0.3s';
})
document.getElementById('lightModeButton').addEventListener('click', () =>{
  document.getElementById('themeSelectionUnderlay').style.display = 'none';
  document.getElementById('topbottomTheme').style.height = '0';
  document.getElementById('topbottomTheme').style.transition = '0.3s';
})
document.getElementById('darkModeButton').addEventListener('click', () =>{
  document.getElementById('themeSelectionUnderlay').style.display = 'none';
  document.getElementById('topbottomTheme').style.height = '0';
  document.getElementById('topbottomTheme').style.transition = '0.3s';
})
document.getElementById('themeSelectionUnderlay').addEventListener('click', () =>{
  document.getElementById('themeSelectionUnderlay').style.display = 'none';
  document.getElementById('topbottomTheme').style.height = '0';
  document.getElementById('topbottomTheme').style.transition = '0.3s';
})

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

const themeSelection1 = document.getElementById('themeSelection');
const themeSelectionBtn = document.getElementById('themeSelectionBtn');

function myThemeSelection(){
  themeSelection1.style.display = 'none'
  themeSelectionBtn.style.display = 'none'
}
function themeChange(){
  themeSelection1.style.display = 'block'
  themeSelectionBtn.style.display = 'block'
}


const ToggleDownTheme = document.getElementById('ToggleDownTheme');
function myToggleDownTheme(){
  ToggleDownTheme.style.display = 'none'
  pBarDown.style.right = '-20rem';
}
function myToggleDown(){
  ToggleDownTheme.style.display = 'block'
    pBarDown.style.right = '0';
    pBarDown.style.transition = '0.3s';

}


const inputIcon = document.getElementById('inputIcon');

function myBtn(){
  inputIcon.classList.toggle('show');
} 



// const lightMode = document.getElementById('light-theme-btn');
// const darkMode = document.getElementById('dark-theme-btn');
// const usernameDisplay = document.getElementById('usernameDisplay');
// const themeKey = 'theme';


// if (usernameDisplay) {
//   const username = localStorage.getItem('loggedInUser');
//       usernameDisplay.textContent = users.username;
  
//       // applyTheme(localStorage.getItem(themeKey) || 'light-mode');
  
// }

// if (lightMode && darkMode) {
//   lightMode.addEventListener('click', () => {
//       applyTheme('light-mode');
//   });

//   darkMode.addEventListener('click', () => {
//       applyTheme('dark-mode');
//   });
// }

// function applyTheme(theme) {
//   document.body.className = theme;
//   localStorage.setItem(themeKey, theme);
//   // applyTheme(localStorage.getItem(themeKey) || 'light-mode');
// }
// // script.js
// // document.addEventListener('DOMContentLoaded', () => {
//   // const loggedInUser = JSON.parse(localStorage.getItem('currentUser'));

//   // if (!currentUser) {
//   //     window.location.href = 'login.html';
//   // } else {
//   //     document.getElementById('user-avatar').src = currentUser.avatar || 'default-avatar.png';
//   //     loadBusinessPlans();
//   // }

//   let loggedInUser;
//     try {
//       loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
//     } catch (error) {
//         console.error('Invalid JSON format in localStorage for currentUser:', error);
//         loggedInUser = null;
//     }

//   document.getElementById('light-theme-btn').addEventListener('click', () => setTheme('light'));
//   document.getElementById('dark-theme-btn').addEventListener('click', () => setTheme('dark'));
// });

// function setTheme(theme) {
//   document.documentElement.setAttribute('data-theme', theme);
//   let loggedInUser;
//     try {
//       loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
//     } catch (error) {
//         console.error('Invalid JSON format in localStorage for currentUser:', error);
//         return;
//     }
//   loggedInUser.theme = theme;
//   try {
//     localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
// } catch (error) {
//     console.error('Error storing theme data in localStorage:', error);
// }
// }



// if (usernameDisplay) {
//   const username = localStorage.getItem('loggedInUser');
//   if (username) {
//       applyTheme(localStorage.getItem(themeKey) || 'light');
//   }else {
//           // Handle case when no user is logged in
//           console.error('No user is logged in.');
//       }
// }

// if (lightMode && darkMode) {
//   lightMode.addEventListener('click', () => {
//       applyTheme('light');
//   });

//   darkMode.addEventListener('click', () => {
//       applyTheme('dark');
//   });
// }

// function applyTheme(theme) {
//   document.body.className = theme;
//   localStorage.setItem(themeKey, theme);
// }

// // Function to set the theme
// function setTheme(theme){
//   document.documentElement.setAttribute('data-theme', theme);
// }

// // Load the saved theme on page load
// window.onload = () => {
//   const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
//   if (loggedInUser) {
//       document.getElementById('username').innerText = loggedInUser.username;
//       const savedTheme = loggedInUser.theme || 'light';
//       setTheme(savedTheme);
//   } else {
//       // Handle case when no user is logged in
//       console.error('No user is logged in.');
//   }
// };

// // Add event listeners to theme selection buttons
// document.getElementById('light-theme-btn').addEventListener('click', () => {
//   updateUserTheme('light');
// });

// document.getElementById('dark-theme-btn').addEventListener('click', () => {
//   updateUserTheme('dark');
// });

// // Function to update user theme
// function updateUserTheme(theme) {
//   setTheme(theme);
//   let users = JSON.parse(localStorage.getItem('users')) || [];
//   let loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

//   users = users.map(user => user.username === loggedInUser.username ? { ...user, theme } : user);
//   loggedInUser = { ...loggedInUser, theme };

//   localStorage.setItem('users', JSON.stringify(users));
//   localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
// }








