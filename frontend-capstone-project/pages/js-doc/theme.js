document.addEventListener('DOMContentLoaded', function() {
    // Function to apply the theme
    function applyTheme(theme) {
      const root = document.documentElement;
      if (theme === 'dark') {
        root.style.setProperty('--primary_dashboardbackground_greyish_color', '#222127');
        root.style.setProperty('--primary_light_greyish_color', '#222127');
        root.style.setProperty('--primary_allBiz_color', '#fff');
        root.style.setProperty('--primary_black_color', '#d6d6d5');
        root.style.setProperty('--primary_setting_color', '#0083ca');
        root.style.setProperty('--primary_white_color', 'rgb(240, 240, 240)');
        root.style.setProperty('--primary_whiteMenu_color', '#2d323a');
        root.style.setProperty('--primary_whitePage_color', '#fff');
        root.style.setProperty('--paragraph_greyHeader_color', 'rgb(240, 240, 240)');
        root.style.setProperty('--primary_whiteMainDash_color', '#26252c');
        root.style.setProperty('--primary_deepblue_color', '#064247');
        root.style.setProperty('--primary_overlaybtn_color', 'rgb(247, 237, 237, 0.178)');
        root.style.setProperty('--main_primaryGenBtn_color', 'rgb(0,78, 152, 255)');
        root.style.setProperty('--primary_blackDonload_color', 'rgb(8, 8, 8)');
        root.style.setProperty('--primary_sidebar_color', '#f6f6f6');
        root.style.setProperty('--primary_searchArea_color', '#202328');
        root.style.setProperty('--primary_textArea_color', '#9fa0a1');
        root.style.setProperty('--primary_textAreaBoxShadow_color', 'hsl(0, 0%, 25%)');
        root.style.setProperty('--primary_light_grey_color', 'hsl(228, 12%, 20%)');
        // Add other properties for dark mode
      } else {
        root.style.setProperty('--primary_dashboardbackground_greyish_color', 'hsl(0, 0%, 92%)');
        root.style.setProperty('--primary_light_greyish_color', 'hsl(0, 0%, 95%)');
        root.style.setProperty('--primary_allBiz_color', 'hsl(0, 0%, 95%)');
        root.style.setProperty('--primary_black_color', 'rgb(8, 8, 8)');
        root.style.setProperty('--primary_setting_color', '#126415ab');
        root.style.setProperty('--primary_white_color', 'rgb(8, 8, 8)');
        root.style.setProperty('--primary_whiteMenu_color', '#fff');
        root.style.setProperty('--primary_whitePage_color', 'rgb(8, 8, 8)');
        root.style.setProperty('--paragraph_greyHeader_color', 'hsl(0, 0%, 49%');
        root.style.setProperty('--primary_whiteMainDash_color', '#fff');
        root.style.setProperty('--primary_deepblue_color', 'hsl(0, 0%, 92%)');
        root.style.setProperty('--primary_overlaybtn_color', 'rgb(0, 0, 0, 0.1)');
        root.style.setProperty('--main_primaryGenBtn_color', 'hsl(0, 0%, 95%)');
        root.style.setProperty('--primary_blackDonload_color', '#fff');
        root.style.setProperty('--primary_sidebar_color', 'hsl(0, 0%, 40%)');
        root.style.setProperty('--primary_searchArea_color', '#fff');
        root.style.setProperty('--primary_textArea_color', 'hsl(0, 0%, 40%)');
        root.style.setProperty('--primary_textAreaBoxShadow_color', 'rgba(0, 0, 0, 0.2)');
        root.style.setProperty('--primary_light_grey_color', 'hsl(228, 12%, 90%)');
        // Add other properties for light mode
      }
    }


    // Function to save the theme to the user's profile
    function saveThemeToUserProfile(theme) {
      const loggedInUser = localStorage.getItem('loggedInUser');
      if (loggedInUser) {
        let users = JSON.parse(localStorage.getItem('users')) || [];
        const userIndex = users.findIndex(user => user.username === loggedInUser);
        if (userIndex !== -1) {
          users[userIndex].profile.theme = theme;
          localStorage.setItem('users', JSON.stringify(users));
        }
      }
    }
  
    // Function to load the user's theme
    function loadUserTheme() {
      const loggedInUser = localStorage.getItem('loggedInUser');
      if (loggedInUser) {
        let users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.username === loggedInUser);
        if (user && user.profile.theme) {
          applyTheme(user.profile.theme);
        } else {
          applyTheme('light'); // Default to light theme
        }
      }
    }
  
    // Event listeners for the buttons
    document.getElementById('lightModeButton').addEventListener('click', function() {
      applyTheme('light');
      saveThemeToUserProfile('light');
    });
  
    document.getElementById('darkModeButton').addEventListener('click', function() {
      applyTheme('dark');
      saveThemeToUserProfile('dark');
    });
  
    // Load the user's theme when the page loads
    loadUserTheme();
  });
  