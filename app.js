const jokeContainer = document.querySelector('#jokeContainer');
const jokeText = document.querySelector('#jokes');
const btn = document.querySelector('#btn');

  function getJoke(e) {
    e.preventDefault();
    fetch('https://api.chucknorris.io/jokes/random')
      .then(response => response.json())
      .then(data => {
          jokeText.textContent = data.value;
          
      })
      .catch(error => {
          console.error('Error:', error);
          jokeText.textContent = "Failed to load joke";
          
      });
}

btn.addEventListener('click', getJoke);
