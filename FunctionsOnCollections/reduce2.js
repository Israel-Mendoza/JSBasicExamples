// Other used for reduce

// Looking for the maximum value of an array

const grades = [87, 64, 92, 88, 97, 71, 70, 64];

const maxGrade = grades.reduce((maxValue, newValue) => {
    return maxValue > newValue ? maxValue : newValue;
})

console.log(`Max of ${grades}: ${maxGrade}`);
