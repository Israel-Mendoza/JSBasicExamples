function formatArray(anArray) {
    return anArray.join(", ");
}

const months = ["January", "March", "April", "April", "July", "August", "November", "December"];
console.log(formatArray(months));

months.splice(1, 0, "February");
console.log(formatArray(months));

months.splice(4, 1, "May", "June");
console.log(formatArray(months));

months.splice(8, 0, "September", "October");
console.log(formatArray(months));
