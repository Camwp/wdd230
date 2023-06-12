const toggleButton = document.getElementById('toggleButton');
const navElement = document.getElementById('navElement');
const iconElement = toggleButton.querySelector('i');

toggleButton.addEventListener('click', () => {

  navElement.classList.toggle('hidden');

  if (navElement.classList.contains('hidden')) {
    iconElement.classList.remove('fa-times');
    iconElement.classList.add('fa-bars');
  } else {
    iconElement.classList.remove('fa-bars');
    iconElement.classList.add('fa-times');
  }
});
