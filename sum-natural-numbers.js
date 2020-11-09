const sumNaturalNumbers = (myInt, myMultiple) => {

    // ended up movinig this to its own function since the logic us used twice
    const isMultiple = (i, value) => {
        return ((i % value) === 0);
    };

    const processArray = (i) => {
        // using every instead of map and returning false to break the loop after finding a match
        // otherwise 15 (which is a multiple of 3 and 5) would be added twice
        myMultiple.every(value => {
            if (isMultiple(i, value)) {
                myReturn += i;
                return false;
            } else {
                return true;
            }
        });
    };

    let i;
    let myReturn = 0;
    let myType = typeof(myMultiple);

    for (i = 0; i <= myInt; i++) {
        if (myType === 'object') {
            if (myMultiple.length) {
                processArray(i);
            } else {
                return 'TODO: handle objects';
            }
        }
        if (myType === 'number') {
            if (isMultiple(i, myMultiple)) {
                myReturn += i;
            }
        }
        if (myType === 'undefined') {
            myReturn += i;
        }
    }
    return myReturn;
};


// some tests
console.log('test 1: ', sumNaturalNumbers(100, [3, 5, 11]));
console.log('test 2: ', sumNaturalNumbers(10));
console.log('test 3: ', sumNaturalNumbers(12, 3));