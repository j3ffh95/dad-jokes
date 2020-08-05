// DOM Elements
const jokeEl = document.querySelector("#joke");
const get_joke = document.querySelector("#get_joke");

// Add event listeners to the button to get joke
get_joke.addEventListener("click", generateJoke);

generateJoke();

async function generateJoke() {
  // call the icanhaz API
  const jokeRes = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });

  const joke = await jokeRes.json();
  // console.log(joke);
  // set the new joke
  jokeEl.innerHTML = joke.joke;
}
