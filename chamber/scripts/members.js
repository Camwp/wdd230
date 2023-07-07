// Sample JSON data
const companies = "https://camwp.io/wdd230/chamber/members.json";
  
  // Function to create a company card
  function createCompanyCard(company) {
    const card = document.createElement("div");
    card.classList.add("company-card");
  
    const name = document.createElement("div");
    name.classList.add("company-name");
    name.textContent = company.name;
  
    const address = document.createElement("div");
    address.classList.add("company-address");
    address.textContent = company.address;
  
    const phone = document.createElement("div");
    phone.classList.add("company-phone");
    phone.textContent = company.phone;
  
    const website = document.createElement("a");
    website.classList.add("company-website");
    website.textContent = company.website;
    website.href = company.website;
  
    const image = document.createElement("img");
    image.classList.add("company-image");
    image.src = company.image;
    image.alt = company.name + " logo";
  
    const membership = document.createElement("div");
    membership.classList.add("company-membership");
    membership.textContent = "Membership Level: " + company.membership_level;
  
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);
    card.appendChild(image);
    card.appendChild(membership);
  
    return card;
  }
  
  // Function to render company cards
  function renderCompanyCards() {
    const companyCardsContainer = document.getElementById("company-cards");
  
    companies.forEach(function(company) {
      const companyCard = createCompanyCard(company);
      companyCardsContainer.appendChild(companyCard);
    });
  }
  
  // Call the function to render company cards
  renderCompanyCards();
  