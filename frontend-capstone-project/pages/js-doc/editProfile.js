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
      document.getElementById('profile-picture2').src = profile.picture;
    } else {
      document.getElementById('profile-picture2').src = './assets/avaters/images1.png';
    }
    document.getElementById('myFullN').value = profile.name || '';
    document.getElementById('my_Gender').value = profile.gender || 'Select';
    document.getElementById('Relationship').value = profile.relationship || '';
    document.getElementById('my_EmailAdd').value =  profile.email || '';
    document.getElementById('my_Contact').value = profile.contact || '';
    document.getElementById('my_Nickname').value = profile.nickname || '';
    document.getElementById('my_Address').value = profile.address || '';
  }

  // Profile functions

function changeProfilePicture(event) {
    const reader = new FileReader();
    reader.onload = function() {
      const profilePicture = reader.result;
      document.getElementById('profile-picture2').src = profilePicture;
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
      picture: document.getElementById('profile-picture2').src
    };
  
  
    saveUserProfile(username, profile);
    alert('Profile saved successfully!');
    window.location.href = 'Profile.html';
  }
  
  // Initial load
  loadUserProfile();
  
  function removeProfileEditPage() {
    window.location.href = 'Profile.html';
  }