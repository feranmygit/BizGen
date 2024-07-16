const inputIcon = document.getElementById('inputIcon');

function myBtnProfile(){
  inputIcon.classList.toggle('show');
}

function goBack(){
  window.location.href = 'dashboard.html';
}

const username = localStorage.getItem('loggedInUser');

document.getElementById('usernameDisplay4').innerText = username;



// To input a New entry code here

document.getElementById('inputDataContainer1').addEventListener('submit', function(event) {
  event.preventDefault();

  const DataInfoOne = document.getElementById('DataInfoOne').value;


  if (!DataInfoOne) {
    alert('Please fill the field.');    
    return;
  }

  let info = JSON.parse(localStorage.getItem('info')) || [];
  const username = localStorage.getItem('loggedInUser');
  if (info.some(user => user.DataInfoOne === DataInfoOne)) {
    info.push({ DataInfoOne, username});
    localStorage.setItem('info', JSON.stringify(info));
    localStorage.setItem('userInfoOne', DataInfoOne);
    alert('changed!.');
    return;
  }

  info.push({ DataInfoOne, username});
  localStorage.setItem('info', JSON.stringify(info));
  localStorage.setItem('userInfoOne', DataInfoOne);
  alert('Input Received');

});

document.getElementById('inputDataContainer3').addEventListener('submit', function(event) {
  event.preventDefault();

  const DataInfoThree = document.getElementById('DataInfoThree').value;


  if (!DataInfoThree) {
    alert('Please fill the field.');    
    return;
  }

  let info = JSON.parse(localStorage.getItem('info')) || [];
  const username = localStorage.getItem('loggedInUser');
  if (info.some(user => user.DataInfoThree === DataInfoThree)) {
    info.push({ DataInfoThree, username});
    localStorage.setItem('info', JSON.stringify(info));
    localStorage.setItem('userInfoThree', DataInfoThree);
    alert('changed!.');
    return;
  }

  info.push({ DataInfoThree, username});
  localStorage.setItem('info', JSON.stringify(info));
  localStorage.setItem('userInfoThree', DataInfoThree);
  alert('Input Received');

});

document.getElementById('inputDataContainer4').addEventListener('submit', function(event) {
  event.preventDefault();

  const DataInfoFour = document.getElementById('DataInfoFour').value;


  if (!DataInfoFour) {
    alert('Please fill the field.');    
    return;
  }

  let info = JSON.parse(localStorage.getItem('info')) || [];
  const username = localStorage.getItem('loggedInUser');
  if (info.some(user => user.DataInfoFour === DataInfoFour)) {
    info.push({ DataInfoFour, username});
    localStorage.setItem('info', JSON.stringify(info));
    localStorage.setItem('userInfoFour', DataInfoFour);
    alert('changed!.');
    return;
  }

  info.push({ DataInfoFour, username});
  localStorage.setItem('info', JSON.stringify(info));
  localStorage.setItem('userInfoFour', DataInfoFour);
  alert('Input Received');

});

document.getElementById('inputDataContainer5').addEventListener('submit', function(event) {
  event.preventDefault();

  const DataInfoFive = document.getElementById('DataInfoFive').value;


  if (!DataInfoFive) {
    alert('Please fill the field.');    
    return;
  }

  let info = JSON.parse(localStorage.getItem('info')) || [];
  const username = localStorage.getItem('loggedInUser');
  if (info.some(user => user.DataInfoFive === DataInfoFive)) {
    info.push({DataInfoFive, username});
    localStorage.setItem('info', JSON.stringify(info));
    localStorage.setItem('userInfoFive', DataInfoFive);
    alert('changed!.');
    return;
  }

  info.push({DataInfoFive, username});
  localStorage.setItem('info', JSON.stringify(info));
  localStorage.setItem('userInfoFive', DataInfoFive);
  alert('Input Received');

});

document.getElementById('inputDataContainer6').addEventListener('submit', function(event) {
  event.preventDefault();

  const DataInfoSix = document.getElementById('DataInfoSix').value;


  if (!DataInfoSix) {
    alert('Please fill the field.');    
    return;
  }

  let info = JSON.parse(localStorage.getItem('info')) || [];
  const username = localStorage.getItem('loggedInUser');
  if (info.some(user => user.DataInfoSix === DataInfoSix)) {
    alert('already exists.');
    return;
  }

  info.push({DataInfoSix, username});
  localStorage.setItem('info', JSON.stringify(info));
  localStorage.setItem('userInfoSix', DataInfoSix);
  alert('Input Received');

});



document.addEventListener('DOMContentLoaded', function(){


const DataInfoOne = localStorage.getItem('userInfoOne');
document.getElementById('usernameDisplay3').innerHTML= DataInfoOne;

const DataInfoThree = localStorage.getItem('userInfoThree');
document.getElementById('usernameDisplay5').innerHTML= DataInfoThree;

const DataInfoFour = localStorage.getItem('userInfoFour');
document.getElementById('usernameDisplay6').innerHTML= DataInfoFour;

const DataInfoFive = localStorage.getItem('userInfoFive');
document.getElementById('usernameDisplay7').innerHTML= DataInfoFive;

const DataInfoSix = localStorage.getItem('userInfoSix');
document.getElementById('usernameDisplay8').innerHTML= DataInfoSix;
})




const inputDataContainer1 = document.getElementById('inputDataContainer1');
const removePen1 = document.getElementById('removePen1');
const detailCont1 = document.getElementById('detailCont1');

const inputDataContainer3 = document.getElementById('inputDataContainer3');
const removePen3 = document.getElementById('removePen3');
const detailCont3 = document.getElementById('detailCont3');

const inputDataContainer4 = document.getElementById('inputDataContainer4');
const removePen4 = document.getElementById('removePen4');
const detailCont4 = document.getElementById('detailCont4');

const inputDataContainer5 = document.getElementById('inputDataContainer5');
const removePen5 = document.getElementById('removePen5');
const detailCont5 = document.getElementById('detailCont5');

const inputDataContainer6 = document.getElementById('inputDataContainer6');
const removePen6 = document.getElementById('removePen6');
const detailCont6 = document.getElementById('detailCont6');

function removeSaveDataOne(){
  inputDataContainer1.style.display = 'none';
  detailCont1.style.display = 'block';
}
function removePenOne(){
  inputDataContainer1.style.display = 'block';
  detailCont1.style.display = 'none';
}

function removeSaveDataThree(){
  inputDataContainer3.style.display = 'none';
  detailCont3.style.display = 'block';
}
function removePenThree(){
  inputDataContainer3.style.display = 'block';
  detailCont3.style.display = 'none';
}

function removeSaveDataFour(){
  inputDataContainer4.style.display = 'none';
  detailCont4.style.display = 'block';
}
function removePenFour(){
  inputDataContainer4.style.display = 'block';
  detailCont4.style.display = 'none';
}

function removeSaveDataFive(){
  inputDataContainer5.style.display = 'none';
  detailCont5.style.display = 'block';
}
function removePenFive(){
  inputDataContainer5.style.display = 'block';
  detailCont5.style.display = 'none';
}

function removeSaveDataSix(){
  inputDataContainer6.style.display = 'none';
  detailCont6.style.display = 'block';
}
function removePenSix(){
  inputDataContainer6.style.display = 'block';
  detailCont6.style.display = 'none';
}
