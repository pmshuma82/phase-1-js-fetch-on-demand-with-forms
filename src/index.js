// index.js

// Define the init function
const init = () => {
    // Select the form element
    const inputForm = document.querySelector("form");
  
    // Add event listener to the form
    inputForm.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent default form submission behavior
  
      // Get the input value
      const input = document.querySelector("input#searchByID");
  
      // Fetch data based on user input
      fetch(`http://localhost:3000/movies/${input.value}`)
        .then((response) => response.json()) // Parse the JSON response
        .then((data) => {
          // Access DOM elements to display fetched data
          const title = document.querySelector("section#movieDetails h4");
          const summary = document.querySelector("section#movieDetails p");
  
          // Update DOM with fetched data
          title.innerText = data.title;
          summary.innerText = data.summary;
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    });
  };
  
  // Call init function when the DOM content is loaded
  document.addEventListener("DOMContentLoaded", init);