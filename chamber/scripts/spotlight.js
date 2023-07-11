fetch('https://camwp.github.io/wdd230/chamber/members.json')
  .then(response => response.json())
  .then(data => {
    const premiumMembers = data.filter(member => member.membership_level === 'Premium');

    const randomMembers = getRandomMembers(premiumMembers, 3);

    randomMembers.forEach((member, index) => {
      loadImage(member.image, () => {
        console.log(`Image loaded for member ${member.name}`);
        updateSpotlight(member, index + 1);
      });
    });
  })
  .catch(error => console.error('Error:', error));

function loadImage(src, callback) {
  const image = new Image();
  image.onload = callback;
  image.onerror = () => {
    console.error(`Error loading image: ${src}`);
    callback();
  };
  image.src = src;
}

function updateSpotlight(member, index) {
  const spotlightElement = document.getElementById(`s${index}`);

  const imageElement = spotlightElement.querySelector('img');
  imageElement.src = member.image;
  imageElement.alt = `Spotlight ${index}`;
  

  const nameElement = spotlightElement.querySelector('h4');
  nameElement.textContent = member.name;

  const descriptionElement = spotlightElement.querySelector('p');
  descriptionElement.textContent = member.other_information;

  spotlightElement.addEventListener('click', () => {
    window.location.href = member.website;
  });

  spotlightElement.style.display = 'block';
}

function getRandomMembers(array, count) {
  const shuffled = array.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}
