// 1st, First, Scuber's executives want to ensure that Scuber's headquarters is near its customers. They would like you to write a function, distanceFromHqInBlocks, that takes in a pickup location for a passenger, and returns the number of blocks from Scuber headquarters on 42nd Street. For example, if the pickup location is 50 (i.e., 50th Street), the return value should be 8.

function distanceFromHqInBlocks(numberOfBlocks) {
    // returns the number of blocks from Scuber headquarters on 42nd Street. 
    // For example, if the pickup location is 50 (i.e., 50th Street), 
    // the return value should be 8.
    
    // code if distance below 42nd street is not to be considered
    // const blockCount = numberOfBlocks - 42;
    // return blockCount;

    if (numberOfBlocks < 42) {
        return 42 - numberOfBlocks;
    } else {
        return numberOfBlocks - 42;
    }
}

// 2nd, The distanceFromHqInBlocks function's return value can then be used for another function, distanceFromHqInFeet, that translates the number of blocks from headquarters to the distance in feet. Each block in Manhattan is 264 feet long.
function distanceFromHqInFeet(numberOfBlocks) {
    return distanceFromHqInBlocks(numberOfBlocks) * 264;
}

// 3rd, customers want Scuber to calculate the number of feet travelled based on the distance. Write a function called distanceTravelledInFeet that takes in both the start and destination blocks, and returns the number of feet travelled. Remember, each block in Manhattan is 264 feet long. For example distanceTravelledInFeet(34, 38) representing 34th St to 38th St, returns 1056 ((38-34)*264). You can assume that we are only calculating distance uptown/downtown, not from river to river.
function distanceTravelledInFeet(start, destination) {
    if (destination < start) {
        return (start - destination) * 264;
    } else {
        return (destination - start) * 264;
    }
}

// 4th, calculatesFarePrice: Given the same starting and ending block as the previous test (hint hint), return the fare for the customer. The first four hundred feet are free. For a distance between 400 and 2000 feet, the price is 2 cents per foot (not including 400, which are free!). Then Scuber charges a flat fare for a distance over 2000 feet and under 2500 feet. Finally, Scuber does not allow any rides over 2500 feet — the function returns 'cannot travel that far' if a ride over 2500 feet is requested.

function calculatesFarePrice(startBlock, endBlock) {
    if (distanceTravelledInFeet(startBlock, endBlock) <= 400) {
        return 0;
    } else if (distanceTravelledInFeet(startBlock, endBlock) >= 400 && distanceTravelledInFeet(startBlock, endBlock) < 2000) {
        return ((distanceTravelledInFeet(startBlock, endBlock) - 400) * .02);
    } else if (distanceTravelledInFeet(startBlock, endBlock) >= 2000 && distanceTravelledInFeet(startBlock, endBlock) < 2500) {
        return 25;
    } else {
        return "cannot travel that far";
    }
}