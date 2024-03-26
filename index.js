const cards = ["Guadalupe", "Ollie", "Aki"];

const occasion = "surprise";

const writeCards = (names, occasion) => {
    
    let messages = [];
    
    let i = 0;
    
    while (i < names.length) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${occasion} gift!`);
        i++;
    }
    return messages;
}

writeCards(cards, occasion);


function countDown(start) {
    
    if (start < 0) {
        
        console.log("Please provide a positive integer.");
        
        return;
    }

    
    let currentNumber = start;
    
    while (currentNumber >= 0) {
        
        console.log(currentNumber);
        
        currentNumber--;
    }
}

countDown(10);

module.exports = {
    writeCards,
    countDown,
}
