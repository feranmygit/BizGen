// const inputIcon = document.getElementById('inputIcon');

// function myBtnProfile(){
//   inputIcon.classList.toggle('show');
// }

function goBack(){
  window.location.href = 'dashboard.html';
}

const username = localStorage.getItem('loggedInUser');

document.getElementById('usernameDisplay4').innerText = username;




// set profile here 

function getUserProfile(username) {
  return JSON.parse(localStorage.getItem(`profile_${username}`)) || {};
}

function saveUserProfile(username, profile) {
  localStorage.setItem(`profile_${username}`, JSON.stringify(profile));
}

function changeProfilePicture(event) {
  const reader = new FileReader();
  reader.onload = function() {
    const profilePicture = reader.result;
    document.getElementById('profile-picture1').src = profilePicture;
    document.getElementById('profile-picture2').src = profilePicture;
    document.getElementById('profile-picture3').src = profilePicture;
    const username = localStorage.getItem('loggedInUser');
    const profile = getUserProfile(username);
    profile.picture = profilePicture;
    saveUserProfile(username, profile);
  };
  reader.readAsDataURL(event.target.files[0]);
}

function saveProfile() {
  const name = document.getElementById('myFullN').value;
  const gender = document.getElementById('my_Gender').value;
  const relationship = document.getElementById('Relationship').value;
  const email = document.getElementById('my_EmailAdd').value;
  const contact = document.getElementById('my_Contact').value;
  const nickname = document.getElementById('my_Nickname').value;
  const address = document.getElementById('my_Address').value;
  const username = localStorage.getItem('loggedInUser');

  const profile = {
    name,
    gender,
    relationship,
    email,
    contact,
    nickname,
    address,
    picture: document.getElementById('profile-picture1').src
  };

  saveUserProfile(username, profile);
  alert('Profile saved successfully!');
  document.getElementById('profileEditContainer').style.display = 'none';
}

function loadUserProfile() {
  const username = localStorage.getItem('loggedInUser');
  const profile = getUserProfile(username);

  if (profile.picture) {
    document.getElementById('profile-picture1').src = profile.picture;
    document.getElementById('profile-picture2').src = profile.picture;
    document.getElementById('profile-picture3').src = profile.picture;
  } else {
    document.getElementById('profile-picture1').src = './assets/avaters/images1.png';
    document.getElementById('profile-picture2').src = './assets/avaters/images1.png';
    document.getElementById('profile-picture3').src = './assets/avaters/images1.png';
  }
  document.getElementById('myFullN').innerText = profile.name || 'Edit Profile';
  document.getElementById('myFullNProfile').innerText = profile.name || '';
  document.getElementById('my_Gender').innerText = profile.gender || 'Select';
  document.getElementById('Relationship').innerText = profile.relationship || '';
  document.getElementById('my_EmailAdd').innerText =  profile.email || '';
  document.getElementById('my_Contact').innerText = profile.contact || '';
  document.getElementById('my_Nickname').innerText = profile.nickname || '';
  document.getElementById('my_Address').innerText = profile.address || '';
}

// Initial load
loadUserProfile();


function EditProfile() {
  document.getElementById('profileEditContainer').style.display = 'block';
}
function removeProfileEditPage() {
  document.getElementById('profileEditContainer').style.display = 'none';
}
function myToggleDown() {
  document.getElementById('viewProfilePics').style.display = 'none';
  document.getElementById('overColor').style.display = 'none';
}
function profileZoomOut() {
  document.getElementById('viewProfilePics').style.display = 'block';
  document.getElementById('overColor').style.display = 'block';
}




