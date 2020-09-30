const warriorsGames = [{
  awayTeam: {
    team: 'Golden State',
    points: 119,
    isWinner: true
  },
  homeTeam: {
    team: 'Houston',
    points: 106,
    isWinner: false
  }
},
{
  awayTeam: {
    team: 'Golden State',
    points: 105,
    isWinner: false
  },
  homeTeam: {
    team: 'Houston',
    points: 127,
    isWinner: true
  }
},
{
  homeTeam: {
    team: 'Golden State',
    points: 126,
    isWinner: true
  },
  awayTeam: {
    team: 'Houston',
    points: 85,
    isWinner: false
  }
},
{
  homeTeam: {
    team: 'Golden State',
    points: 92,
    isWinner: false
  },
  awayTeam: {
    team: 'Houston',
    points: 95,
    isWinner: true
  }
},
{
  awayTeam: {
    team: 'Golden State',
    points: 94,
    isWinner: false
  },
  homeTeam: {
    team: 'Houston',
    points: 98,
    isWinner: true
  }
},
{
  homeTeam: {
    team: 'Golden State',
    points: 115,
    isWinner: true
  },
  awayTeam: {
    team: 'Houston',
    points: 86,
    isWinner: false
  }
},
{
  awayTeam: {
    team: 'Golden State',
    points: 101,
    isWinner: true
  },
  homeTeam: {
    team: 'Houston',
    points: 92,
    isWinner: false
  }
}
]

let message1 = document.createElement("h1");
message1.innerText = "My Resolution:";
document.body.insertAdjacentElement("afterbegin", message1);

const unorderedList = document.createElement("ul");

for (let match of warriorsGames) {
  const liElement = document.createElement("li");
  const { awayTeam, homeTeam } = match;
  const ourTeam = homeTeam.team === "Golden State" ? homeTeam : awayTeam;
  const scores = awayTeam.isWinner ? `<b>${awayTeam.points}</b>-${homeTeam.points}` :
    `${awayTeam.points}-<b>${homeTeam.points}</b>`;
  liElement.innerHTML = `${awayTeam.team} @ ${homeTeam.team} | ${scores}`;
  ourTeam.isWinner ? liElement.classList.toggle("win") : liElement.classList.toggle("loss");
  unorderedList.appendChild(liElement);
  console.log(scores);
}
document.body.appendChild(unorderedList);


let message2 = document.createElement("h1");
message2.innerText = "Colt's Resolution:";
document.body.appendChild(message2);
console.log();


// **************************************************
// STEP 1 - UGLY, UN-REFACTORED CODE! (but it works!)
// **************************************************

const ulParent = document.createElement('ul');
for (let game of warriorsGames) {
  const { homeTeam, awayTeam } = game;
  const liElement = document.createElement('li');
  const { team: hTeam, points: hPoints } = homeTeam;
  const { team: aTeam, points: aPoints } = awayTeam;
  const teamNames = `${aTeam} @ ${hTeam}`;
  let scoreLine = aPoints > hPoints ? `<b>${aPoints}</b>-${hPoints}` : `${aPoints}-<b>${hPoints}</b>`;
  const warriors = hTeam === 'Golden State' ? homeTeam : awayTeam;
  liElement.classList.add(warriors.isWinner ? 'win' : 'loss')
  liElement.innerHTML = `${teamNames} ${scoreLine}`
  console.log(scoreLine)
  ulParent.appendChild(liElement);
}

document.body.appendChild(ulParent)