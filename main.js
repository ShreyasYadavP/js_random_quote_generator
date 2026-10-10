function generatequote(){

}

const quotes = [
    "The only way to do great work is to love what you do.",
    "Innovation distinguishes between a leader and a follower.",
    "Your time is limited, don't waste it living someone else's life.",
    "The best way to predict the future is to invent it.",
    "Success is not the key to happiness. Happiness is the key to success.",
    "Don't watch the clock; do what it does. Keep going.",
    "Believe you can and you're halfway there.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "The best revenge is massive success."
]

const usedIndexes = new Set();

const quoteElement = document.getElementById("quote");

function generatequote(){

    if(usedIndexes.size >= quotes.length){
        usedIndexes.clear();
    }

    while (true){
    const randomIndex = Math.floor(Math.random()*quotes.length);

    if(usedIndexes.has(randomIndex)){
        continue;
    }
    const quote = quotes[randomIndex];
    quoteElement.innerHTML = quote;
    usedIndexes.add(randomIndex);
    break;
    }
}