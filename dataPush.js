const { mongoose } = require('./connectors/mongoose');
const { plays } = require('./models/plays.model');
const { squadmates } = require('./models/squadmates.model');
const { getCombatHistory } = require('./modules/getCombatHistory');
const uploadFileToS3Bucket = require('./modules/uploadFileToS3Bucket');

const dataPush = async () => {
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
  // get data for filters.json
  const games = await plays.distinct('game');
  const maps = await plays.distinct('map');
  const modes = await plays.distinct('mode');
  mongoose.connection.close();
  const file = { games, squad, maps, modes };
  await uploadFileToS3Bucket(file, 'filters.json')
  return { success: true };
};

module.exports = { dataPush };
// dataPush();