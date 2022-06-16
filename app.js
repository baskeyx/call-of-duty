const { mongoose } = require('./connectors/mongoose');
const { plays } = require('./models/plays.model');
const { squadmates } = require('./models/squadmates.model');
const { getCombatHistory } = require('./modules/getCombatHistory');

const app = async () => {
  mongoose.connection;
  const squad = await squadmates.find();
  for (const squadmate of squad) {
    const uno = squadmate.id;
    const combatHistory = await getCombatHistory(uno, 'uno');
    for (const match of combatHistory) {
      const { matchID } = match;
      const playExists = await plays.find({ uno, matchID });
      if (!playExists.length) await plays.create({ ...match, uno });
    }
  }
  mongoose.connection.close();
};

app();
