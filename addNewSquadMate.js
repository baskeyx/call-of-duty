const { getUnoId } = require('./modules/getUnoId');
const { squadmates } = require('./models/squadmates.model');
const { mongoose } = require('./connectors/mongoose');

const addNewSquadMate = async (tag, platform) => {
  const player = await getUnoId(tag, platform)
  mongoose.connection;
  await squadmates.create({ id: player.uno, handle: player.username });
  mongoose.connection.close();
};

addNewSquadMate('baskey x', 'xbl'); // handle, platform (xbl, psn, acti, uno)
