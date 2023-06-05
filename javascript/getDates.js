window.addEventListener('DOMContentLoaded', function() {
  var currentYearElement = document.getElementById('currentYear');
  var lastModifiedElement = document.getElementById('lastModified');
  
  var currentYear = new Date().getFullYear();
  
  currentYearElement.textContent = '©' + currentYear;
  lastModifiedElement.textContent = 'Last Modified: ' + document.lastModified;
});