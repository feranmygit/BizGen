function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`),
          results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }
  
  function loadBusinessDetails() {
    const index = getParameterByName('index');
    if (index === null) {
      alert('Business not found');
      return;
    }
  
    const businesses = JSON.parse(localStorage.getItem('businesses')) || [];
    const business = businesses[index];
  
    if (!business) {
      alert('Business not found');
      return;
    }
  
    const viewBusiness = document.getElementById('viewBusiness');
    viewBusiness.innerHTML = `
                <div class="goBackContainer" onclick="goBack()">
                      <div class="goBack-icon" id="goBack">
                          <i class="fa-solid  fa-arrow-left"></i>
                      </div>
                </div>
                <div class="viewData">
                  <h3 class="viewName">${business.name}</h3>
                  <p><h4>Business Type:</h4> ${business.type}</p>
                  <p><h4>Plan Type:</h4> ${business.planType}</p>
                  <p class="viewDescription"><h4>Description:</h4> ${business.description}</p>
                  <p><h4>Visibility:</h4> ${business.visibility}</p>
                </div>
    `;
  }
  
  loadBusinessDetails();
  

  function goBack(){
    window.location.href = './dashboard.html';
  }