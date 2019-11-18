/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
 *  * Objects in array include additional properties, such as categorization tags
 * Additional properties are displayed on screen when present in quote object.
***/

/***
 * `getRandomQuote` function
 * Function is named getRandomQuote and returns a random object from the quotes array.
 * 
***/
  // generate a radom number between 0 and the last index of the array
  // use number and box notation to grab a random item from the array
  // return the random item

  /***
 * `printQuote` function
 * Quotes change automatically after a certain amount of time passes.
Background color changes each time the quote changes.
***/

// create a variable that calls the getRandomQuote function
// create a variable that initiates your HTML string
// using the template in the project instructions, add the two default quote properties, quote and source. 
// if theres a quote.citation property, add it to the string, 
// if theres a quote.year property add it to the string
// close the string with the neccessary HTML closing Tags
// set the innerHTML of the quote.box to the complete HTML string.

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE OF CODE BELOW!!
***/

// document.getElementById('load-quote').addEventListener("click", printQuote, false);

let quotes = [

  {
      phrase: 'I’m just always looking forward. I spend very little time, looking backward',
      source: '"Gary Vaynerchuk"'
  },
  {
      phrase: 'Success is a lousy teacher. It seduces smart people into thinking they can’t lose.',
      source: 'Bill Gates'
  },
  {
      phrase: 'If you are born poor it’s not your mistake, but if you die poor it’s your mistake',
      source: 'Bill Gates'
  },
  {
      phrase: 'Be nice to nerds. Chances are you’ll end up working for one.',
      source: 'Bill Gates'
  },
  {
      phrase: 'Most people fail in life because they major in minor things.',
      source: 'Tony Robbins'
  },
  {
      phrase: 'The only thing that’s keeping you from getting what you want is the story you keep telling yourself.',
      source: 'Tony Robbins'
  },
  {
      phrase: 'Success in life is the result of good judgment. Good judgment is usually the result of experience. Experience is usually the result of bad judgment.',
      source: 'Tony Robbins'
  },
  {
      phrase: 'Anybody can make history. Only a great man can write it.',
      source: 'Oscar Wilde',
      citation: 'The Critic as Artist, Part I, p. 49',
      year: 1891
  },

  {
      phrase: 'Great men are not born great, they grow great . . .',
      source: 'Mario Puzo, The Godfather'
  },
  {
      phrase: 'Be yourself; everyone else is already taken.',
      source: 'Oscar Wilde',
      year: 1954
  },

  {
      phrase: 'Prayer must never be answered: if it is, it ceases to be prayer and becomes correspondence.',
      source: 'Oscar Wilde',
      citation: 'Quoted by Alvin Redman in The Epigrams of Oscar Wilde',
      year: 1952
  }
];

function getRandomQuote () {
  var num1 = Math.floor( Math.random() * 10 ) + 1;
  return(quotes[num1]);
}
// console.log(getRandomQuote());

setInterval(function printQuote() {
  let callRandom = getRandomQuote();
  const markup =  
    "<p class='quote'>" + callRandom.phrase  + "</p>" + "<p class='source'>" + callRandom.source
    "<span class='citation'>" + callRandom.citation + "</span>" +
    "<span class='year'>" + callRandom.year + "</span>"
    "</p>"
  ;
  document.getElementById('quote-box').innerHTML = markup;
}, 5000);

document.getElementById('load-quote').addEventListener("click", printQuote, false);