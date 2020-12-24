import "constants.js";
// Unsplash API
const count = 10;
const apiURL = `https://api.unsplash.com/photos/random?client_id=${API_KEY}&count=${count}`;

// Get Photos from Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    // Catch error here
  }
}

// On Load
getPhotos();
