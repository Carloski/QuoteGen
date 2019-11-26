// project 1 - A Random Quote Generator

// array of objects containing the information to print to the screen
let quotes = [
  {
    quote: "I’m just always looking forward. I spend very little time, looking backward",
    source: '"Gary Vaynerchuk"'
  },
  {
    quote: "Success is a lousy teacher. It seduces smart people into thinking they can’t lose.",
    source: "Bill Gates"
  },
  {
    quote: "If you are born poor it’s not your mistake, but if you die poor it’s your mistake",
    source: "Bill Gates"
  },
  {
    quote: "Be nice to nerds. Chances are you’ll end up working for one.",
    source: "Bill Gates"
  },
  {
    quote: "Most people fail in life because they major in minor things.",
    source: "Tony Robbins"
  },
  {
    quote: "The only thing that’s keeping you from getting what you want is the story you keep telling yourself.",
    source: "Tony Robbins"
  },
  {
    quote: "Success in life is the result of good judgment. Good judgment is usually the result of experience. Experience is usually the result of bad judgment.",
    source: "Tony Robbins"
  },
  {
    quote: "Anybody can make history. Only a great man can write it.",
    source: "Oscar Wilde",
    citation: "The Critic as Artist, Part I, p. 49",
    year: 1891
  },
  {
    quote: "Great men are not born great, they grow great . . .",
    source: "Mario Puzo",
    citation: "The Godfather"
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    source: "Oscar Wilde",
    year: 1954
  },
  {
    quote: "Prayer must never be answered: if it is, it ceases to be prayer and becomes correspondence.",
    source: "Oscar Wilde",
    citation: "Quoted by Alvin Redman in The Epigrams of Oscar Wilde",
    year: 1952
  }
];

// function to generate and return a random quote from the array
function getRandomQuote() {
  var num1 = Math.floor(Math.random() * quotes.length);
  return quotes[num1];
}

// this calls on the previous function to select the randomly selected quote, check if there is a citation and/or year
// and include that in the message that will be displayed
function printQuote() {
  let getQuote = getRandomQuote();
  let message = "";
  message +=
    '<p class="quote">' +
    getQuote.quote +
    "</p>" +
    '<p class="source">' +
    getQuote.source;

  if (getQuote.citation) {
    message += '<span class="citation">' + getQuote.citation + "</span>";
  }
  if (getQuote.year) {
    message += '<span class="citation">' + getQuote.year + "</span>";
  }
  message += "</p>";

  // declared variables using math method to pick a random color and set it as the background
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  var bg = "background: rgb(" + red + "," + green + "," + blue + ");";
  var element = document.getElementById("body");
  element.style = bg;

  // display the quotes on the page in the quote-box div
  document.getElementById("quote-box").innerHTML = message;
}

// method to run printQuote function evey 3 seconds
setInterval(printQuote, 3000);

/*** Event listener for the print quote button***/
document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
