const { API } = require('./connectors/callOfDutyAPI');
const versions = [
  { 
    game: 'Warzone',
    api: API.Warzone,
  },
  { 
    game: 'Modern Warfare',
    api: API.ModernWarfare,
  },
  {
    game: 'Vanguard',
    api: API.Vanguard,
  },
  { 
    game: 'Cold War', 
    api: API.ColdWar,
  }
]; // add a new version when it's launched
module.exports = { versions };
