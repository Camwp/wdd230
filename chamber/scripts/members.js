const url = 'https://camwp.github.io/wdd230/chamber/members.json';
const cards = document.querySelector('#company-cards');
const viewTypeSelect = document.querySelector('#view-type');

let currentViewType = 'gridC';

async function getCompanyData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch company data');
    }
    const data = await response.json();
    displayCompanies(data);
  } catch (error) {
    console.error(error);
  }
}

getCompanyData(url);

const displayCompanies = (companies) => {
  companies.forEach((company) => {
    // Create elements to add to the div.cards element
    let card = document.createElement('section');
    let name = document.createElement('h2');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let website = document.createElement('a');
    let image = document.createElement('img');
    let membership = document.createElement('p');

    // Build the h2 element to display the company name
    name.textContent = company.name;

    // Build the address element
    address.textContent = `Address: ${company.address}`;

    // Build the phone element
    phone.textContent = `Phone: ${company.phone}`;

    // Build the website link element
    website.textContent = "Website";
    website.setAttribute('href', company.website);

    // Build the image element
    image.setAttribute('src', company.image);
    image.setAttribute('alt', `Logo of ${company.name}`);
    image.setAttribute('loading', 'lazy');
    image.setAttribute('width', '200');
    image.setAttribute('height', '200');

    // Build the membership element
    membership.textContent = `Membership Level: ${company.membership_level}`;

    // Append the card section with the created elements
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);
    card.appendChild(image);
    card.appendChild(membership);
    card.setAttribute('background-color', '#37505C')

    cards.appendChild(card);
  });
}

function updateViewType(viewType) {
    currentViewType = viewType;
  
    const companyCards = document.querySelectorAll('#company-cards');
  
    companyCards.forEach((card) => {
      card.classList.remove('list', 'gridC');
      card.classList.add(currentViewType);
    });
  }
  
  viewTypeSelect.addEventListener('change', (event) => {
    const viewType = event.target.value;
    updateViewType(viewType);
  });
