const { mongoose } = require('./connectors/mongoose');
const { plays } = require('./models/plays.model');
const { squadmates } = require('./models/squadmates.model');
const { getCombatHistory } = require('./modules/getCombatHistory');

const app = async () => {
  const uno = '16480142698448771586';
  const combatHistory = await getCombatHistory(uno, 'uno');
  // console.table(combatHistory);
  mongoose.connection;
  const squad = await squadmates.find();
  for (const squadmate of squad) {
    const combatHistory = await getCombatHistory(squadmate.id, 'uno');
    for (const match of combatHistory) {
      const { matchID } = match;
      const playExists = await plays.find({ uno, matchID });
      if (!playExists.length) await plays.create({...match, uno});
    }
  }
  mongoose.connection.close();
};

app();
