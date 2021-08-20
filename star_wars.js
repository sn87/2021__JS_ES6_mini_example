const protagonists = [{
    name: 'Luke',
    team: 'rebels',
    karmaScore: 2
  },
  {
    name: 'Darth Vader',
    team: 'empire',
    karmaScore: -2
  },
  {
    name: 'Yoda',
    team: 'rebels',
    karmaScore: 4
  },
  {
    name: 'Emperor Palpatine',
    team: 'empire',
    karmaScore: -4
  }
]

let winningTeam = 'rebels';

console.log(protagonists);

const rebels = protagonists.filter(function(protagonist) {
  return protagonist.team === 'rebels';
});

const tenTimesMoreEvilEmpire = [];
protagonists.map(function(protagonist) {
  if(protagonist.team === 'empire'){
  	protagonist.karmaScore = protagonist.karmaScore*10;
    tenTimesMoreEvilEmpire.push(protagonist);    
  }
});

console.log(rebels);
console.log(tenTimesMoreEvilEmpire);

// positive value: rebels wins, negative value: empire wins
let battleValue = battle(rebels, tenTimesMoreEvilEmpire);
console.log(winningTeam)
if (battleValue > 0) {
	winningTeam = 'rebels';
}else if (battleValue < 0) {
	winningTeam = 'empire';
}
console.log(winningTeam)

// function to determine winning team
function battle(team1, team2) {
  winningTeam = 'draw';
  let team1Power = 0;
  let team2Power = 0;
  team1.forEach(function(teamMate) {
      team1Power += teamMate.karmaScore;
  })
  team2.forEach(function(teamMate) {
      team2Power += teamMate.karmaScore;
  })
  return team1Power + team2Power;
}

/* --- The Saga continues --- */
