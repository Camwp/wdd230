window.addEventListener('DOMContentLoaded', function() {
  var currentYearElement = document.getElementById('current-year');
  var lastModifiedElement = document.getElementById('last-modified');
  
  var currentYear = new Date().getFullYear();
  
  currentYearElement.textContent = '©' + currentYear;
  lastModifiedElement.textContent = 'Last Modified: ' + document.lastModified;
});