const jeopardyWinnings = {
    regularPlay: 2522700,
    watsonChallenge: 300000,
    tournamentOfChampions: 500000,
    battleOfTheDecades: 100000
};

let totalEarnings = 0;
for (let property in jeopardyWinnings) {
    console.log(`${property}: ${jeopardyWinnings[property]}`);
    totalEarnings += jeopardyWinnings[property];
}
console.log(`Ken Jennings total earnings: ${totalEarnings}`);

