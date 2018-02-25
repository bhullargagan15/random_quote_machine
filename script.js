let button = document.getElementById('randomizer');
let colors = ['#007bff', '#28a745', '#17a2b8', '#dc3545', '#950740', '#1565c0', '#ef6c00', '#c2185b'];
let body = document.querySelector('body');
let quoteArea = document.getElementById('quote');
let characterArea = document.getElementById('character');


function randomize() {
  const html = new XMLHttpRequest();
  html.open('GET', 'https://got-quotes.herokuapp.com/quotes', true);
  html.send();
  html.onreadystatechange = function() {
    if (html.readyState === 4 && html.status === 200) {
      let quote = JSON.parse(html.response);
      quoteArea.innerHTML = quote.quote;
      characterArea.innerHTML = `~${quote.character}`;
    }
  }

  const randomNumber = Math.round(Math.random() * (colors.length-1));
  const randomColor = colors[randomNumber];
  body.style.backgroundColor = `${randomColor}`;
  button.style.backgroundColor = `${randomColor}`;
}


button.addEventListener('click', randomize);
