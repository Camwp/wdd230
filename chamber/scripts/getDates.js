window.addEventListener('DOMContentLoaded', function() {
  var lastModifiedElement = document.getElementById('lastModified');
  
  lastModifiedElement.textContent = 'Last Modified: ' + document.lastModified;
});