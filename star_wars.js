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
    karmaScore: 4,
    specialPower: copyForce
  },
  {
    name: 'Emperor Palpatine',
    team: 'empire',
    karmaScore: -4,
    specialPower: copyForce
  }
]

let winningTeam = 'draw';

const rebels = protagonists.filter(protagonist => protagonist.team === 'rebels');

// dramatic increase of empires force due to a flyby of the Death Star at a supermassive black hole, where the tenTimesMoreEvilEmpire from a parallel universe replaced the normalEmpire 
const tenTimesMoreEvilEmpire = [];
protagonists.map(protagonist => {
  if(protagonist.team === 'empire'){
  	protagonist.karmaScore = protagonist.karmaScore*10;
    tenTimesMoreEvilEmpire.push(protagonist);    
  }
});

const yoda = protagonists.find(protagonist => protagonist.name === 'Yoda');

console.log(rebels);
console.log(tenTimesMoreEvilEmpire);

console.log(yoda);
// use of special power by yoda to save the universe
yoda.specialPower('empire', -1);
console.log(yoda);

// positive value: rebels wins, negative value: empire wins
let battleValue = battle(rebels, tenTimesMoreEvilEmpire);
if (battleValue > 0) {
	winningTeam = 'rebels';
}else if (battleValue < 0) {
	winningTeam = 'empire';
}

console.log(`Winning Team: ${winningTeam}`);

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

// function to copy all force of the enemy team onto one protagonist
// with the inital value being the protagonists current karmaScore
function copyForce(enemyTeam, multiplier) { 	
  this.karmaScore =  protagonists.reduce((prev, protagonist) => {
  	if (protagonist.team == enemyTeam) {
      let tempVal = protagonist.karmaScore;
      if (protagonist.karmaScore  < 0) {tempVal = tempVal * multiplier;} 
      return prev + tempVal
    }else{
    	return prev;
    }
  }, this.karmaScore)
}
