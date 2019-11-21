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
        quote: 'I’m just always looking forward. I spend very little time, looking backward',
        source: '"Gary Vaynerchuk"'
    },
    {
        quote: 'Success is a lousy teacher. It seduces smart people into thinking they can’t lose.',
        source: 'Bill Gates'
    },
    {
        quote: 'If you are born poor it’s not your mistake, but if you die poor it’s your mistake',
        source: 'Bill Gates'
    },
    {
        quote: 'Be nice to nerds. Chances are you’ll end up working for one.',
        source: 'Bill Gates'
    },
    {
        quote: 'Most people fail in life because they major in minor things.',
        source: 'Tony Robbins'
    },
    {
        quote: 'The only thing that’s keeping you from getting what you want is the story you keep telling yourself.',
        source: 'Tony Robbins'
    },
    {
        quote: 'Success in life is the result of good judgment. Good judgment is usually the result of experience. Experience is usually the result of bad judgment.',
        source: 'Tony Robbins'
    },
    {
        quote: 'Anybody can make history. Only a great man can write it.',
        source: 'Oscar Wilde',
        citation: 'The Critic as Artist, Part I, p. 49',
        year: 1891
    },

    {
        quote: 'Great men are not born great, they grow great . . .',
        source: 'Mario Puzo', 
        citation: 'The Godfather'
    },
    {
        quote: 'Be yourself; everyone else is already taken.',
        source: 'Oscar Wilde',
        year: 1954
    },

    {
        quote: 'Prayer must never be answered: if it is, it ceases to be prayer and becomes correspondence.',
        source: 'Oscar Wilde',
        citation: 'Quoted by Alvin Redman in The Epigrams of Oscar Wilde',
        year: 1952
    }
];

var phrase = 0;
var quote;
var source;
var citation;
var year; 

function print(message) {
    document.write(message)
}

function getRandomQuote() {
    var num1 = Math.floor(Math.random() * 10) + 1;
    return (quotes[num1]);
}
// console.log(getRandomQuote());

function printQuote() {
    let callRandom = getRandomQuote();
    for (i = o; i < quotes.length; i += 1) {
        quote = quotes[i].quote;
        source = quotes[i].source;
        citation = quotes[i].citation;
        year = quotes[i].year;
    }
    const markup =
    "<p class='quote'>" + callRandom.quote + "</p>" + "<p class='source'>" + callRandom.source +
    "<span class='citation'>" + callRandom.citation + "</span>" +
    "<span class='year'>" + callRandom.year + "</span>"
    "</p>"
    ;
    document.getElementById('quote-box').innerHTML = markup;
}

document.getElementById('load-quote').addEventListener("click", printQuote, false);

if (  ) {
    ;
} else if ()