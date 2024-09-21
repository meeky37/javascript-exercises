const removeFromArray = function(array, ...removalRequests) {
    // let newArray = [];
    
    // array.forEach(element => {
    //     if (!removalRequests.includes(element)){
    //         newArray.push(element)
    //     }
    // });

    // return newArray;

    return array.filter((element => !removalRequests.includes(element)))

};

// Do not edit below this line
module.exports = removeFromArray;
