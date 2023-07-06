const baseURL = "https://camwp.github.io/wdd230/";
const linksURL = "https://camwp.github.io/wdd230/data/links.json";

async function getLinks(links) {
  try {
    const response = await fetch(links);
    if (!response.ok) {
      throw new Error('Failed to fetch links data');
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

getLinks(linksURL);
