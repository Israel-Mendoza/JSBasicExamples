// COMPARING ARRAYS:

let nums = [1, 2, 3];
let mystery = [1, 2, 3];

console.log(nums === mystery); // False, because the addresses are different

mystery = nums;
console.log(nums === mystery); // True, because the addresses are the same


// COMPARING OBJECTS (will only compare the reference addresses):

const user1 = {
    usarname: "CherryGarcia98",
    email: "cgarcia@gmail.com",
    notifications: ["New Friend Request", "Comment on post", "Someone liked your comment"]
};

const user2 = {
    username: "CherryGarcia98",
    email: "cgarcia@gmail.com",
    notifications: ["New Friend Request", "Comment on post", "Someone liked your comment"]
};

console.log(`user1 === user2: ${user1 === user2}`);


