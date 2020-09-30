const getStats = (anArray) => {
    const max = Math.max(...anArray);
    const min = Math.min(...anArray);
    const sum = anArray.reduce((total, currentValue) => total + currentValue);
    const average = sum / anArray.length;
    return {
        max,
        min,
        sum,
        average
    }
};

let myNums = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

let myNumsObj = getStats(myNums);
console.log(myNumsObj);

function nums() {
    const ten = "10";
    const twenty = "20";
    const thirty = "30";
    return {
        ten,
        twenty,
        thirty
    }
}

myNumsObj = nums();
console.log(myNumsObj);

