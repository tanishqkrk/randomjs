// An object to be hosted as a CDN, that allows developers to use random functions without the long and annoying literals!

const random = {
    number: function () {
        // console.log((Math.random()));
        return (Math.random());
    },
    numberFromZero: function (limit) {
        // console.log(Math.floor(Math.random() * (limit)));
        return Math.floor(Math.random() * (limit));
    },
    numberRange: function (from, to) {
        // console.log(Math.floor(Math.random() * (to) + (from)));
        return Math.floor(Math.random() * (to) + (from));
    },
    uLetters: function (amount) {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        outputArray = []
        for (let i = 0; i < amount; i++) {
            newLetter = letters[Math.floor(Math.random() * letters.length + 0)];
            outputArray.push(newLetter);
        }
        // console.log(outputArray);
        return outputArray;
    },
    sLetters: function (amount) {
        const letters = 'abcdefghijklmnopqrstuvwxyz';
        outputArray = []
        for (let i = 0; i < amount; i++) {
            newLetter = letters[Math.floor(Math.random() * letters.length + 0)];
            outputArray.push(newLetter);
        }
        // console.log(outputArray);
        return outputArray
    },
    element: function (array) {
        // console.log(array[Math.floor(Math.random() * array.length + 0)]);
        return array[Math.floor(Math.random() * array.length + 0)];
    },
    elements: function (array, amount) {
        const outputArray = []
        for (let i = 0; i < amount; i++) {
            newElement = array[Math.floor(Math.random() * array.length + 0)];
            outputArray.push(newElement);
        }
        // console.log(outputArray);
        return outputArray;
    }
}

// random.number()
// Generates a random number between 0 and 1

// random.numberFromZero(100)
// Generates a random number from 0 to the limit provided

// random.numberRange(0, 10)
// Generates a random number between given range

// random.uLetters(1)
// Generates a random Uppercase letter

// random.sLetters(1)
// Generates a random lowercase letter

// random.element([1, 2, 3, 4])
//Returns a random element from array

// random.elements([1, 2, 3, 4], 10)
//Returns random elements from array