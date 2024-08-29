document.getElementById('profile-button').addEventListener('click', function() {
    var popup = document.getElementById('profile-popup');
    popup.style.display = (popup.style.display === 'none' || popup.style.display === '') ? 'block' : 'none';
  });
  
  document.getElementById('logout-button').addEventListener('click', function() {
    // Add your logout logic here
    alert('Logged out');
  });
  