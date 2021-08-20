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

/* The Saga continues */
