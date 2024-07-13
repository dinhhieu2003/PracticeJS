// Async/Await: Async: makes a function return a promise without new Promise
//              Await: makes an async function wait for a promise

// Everything after Await is placed in event queue

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
            const kitchenCleaned = true;
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
            const trashTakenOut = true;
            if(trashTakenOut) {
                resolve("Take out trash");
            } else {
                reject("Didn't take out trash");
            }
        }, 500);
    })
    
} 

// Promise call
/*
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
*/

// We don't need above code when we use async/await

async function doTask() {
    try {
        const walkDogResult = await walkDog();
        console.log(walkDogResult);
    
        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);
    
        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);

        console.log("Finish all task");
    } catch(error) {
        console.error(error);
    }
    
}

doTask();