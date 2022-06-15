const { getUnoId } = require('./modules/getUnoId');
const { squadmates } = require('./models/squadmates.model');
const { mongoose } = require('./connectors/mongoose');

const addNewSquadMate = async (tag, platform) => {
  const player = await getUnoId(tag, platform)
  mongoose.connection;
  squadmates.create({ id: player.uno, handle: player.username });
};

addNewSquadMate('Baskey x', 'xbl'); // handle, platform (xbl, psn, acti, uno)
