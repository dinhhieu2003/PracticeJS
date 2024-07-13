// Promise: wrap Promise object around {asynchronous code}
// "I promise return a value"
// PENDING => resolve or reject
// new Promise((resolve, reject) => {asynchronous code});

function walkDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = true;
            if(dogWalked) {
                resolve("Walk dog");
            } else {
                reject("Didn't walk dog");
            }
        }, 1500);
    })
    
}

function cleanKitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchenCleaned = false;
            if(kitchenCleaned) {
                resolve("Clean kitchen");
            } else {
                reject("Didn't clean kitchen");
            }
        }, 2500);
    })
    
}

function takeOutTrash(callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trashTakenOut = false;
            if(trashTakenOut) {
                resolve("Take out trash");
            } else {
                reject("Didn't take out trash");
            }
        }, 500);
    })
    
} 

// callback hell
/*
walkDog(() => {
    cleanKitchen(() => {
        takeOutTrash(() => {
            console.log("Finish all task");
        })
    })
});
*/

// Promise call
walkDog().then(value => {
    console.log(value);
    return cleanKitchen()
}).then(value => {
    console.log(value);
    return takeOutTrash();
}).then(value => {
    console.log(value);
    console.log("Finish all task");
}).catch(error => {
    console.error(error);
})