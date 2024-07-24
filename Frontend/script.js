document.addEventListener('DOMContentLoaded', () => {
    const titleElement = document.getElementById('title');
    const contentElement = document.getElementById('content');
    const newJokeButton = document.getElementById('newJokeButton');
  
    async function fetchJoke() {
      try {
        const response = await fetch('https://chipper-cuchufli-b79721.netlify.app/.netlify/functions/api/jokes');
        const joke = await response.json();
        titleElement.textContent = joke.title;
        contentElement.textContent = joke.content;
      } catch (error) {
        titleElement.textContent = 'Oops, something went wrong.';
        contentElement.textContent = '';
      }
    }
  
    newJokeButton.addEventListener('click', fetchJoke);
  
    // Fetch a joke when the page loads
    fetchJoke();
  });
  