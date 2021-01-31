//create a function to generate random number
const generateRandomNumber = num =>{
    return Math.floor(Math.random() * num);
};

// store message components(obj)
const storedMessage = {
    'breakfast' : ['baozi', 'buscuits', 'dimsum', 'hashbrown'],
    'lunch' : ['roast dark', 'beef brocoli', 'noodles', 'fruits'],
    'dinner' : ['potato salad', 'soup', 'fried rice','pizza']
};

/*
Create the message 
create a function
use a loop to iterate through the object
Use a switch case to select and format each of the different message components.
*/
let personalChoice = [];
for (let key in storedMessage) {
    idx = generateRandomNumber(storedMessage[key].length);
    switch (key){
        case 'breakfast':
            personalChoice.push( `Your breakfast will include: ${storedMessage[key][idx]} and ${storedMessage[key][idx]}`);
            break;
        case 'lunch':
            personalChoice.push( `Your lunch will include: ${storedMessage[key][idx]} and ${storedMessage[key][idx]}`);
            break;
        case 'dinner':
            personalChoice.push( `Your dinner will include: ${storedMessage[key][idx]} and ${storedMessage[key][idx]}`);
            break;
    }
};

// create a function to create the message
const createMessage = (choice) => { 
    const messageCreated = personalChoice.join('\n');
    return console.log(messageCreated);
};

createMessage(personalChoice);