const { API } = require('../connectors/callOfDutyAPI');

const getUnoId = async (handle, platform) => {
  let data = await API.Warzone.combatHistory(handle, platform);
  if (data.status === 'error') throw new Error(data.data.message);
  const { player } = data.data.matches[0]
  const { username, uno } = player;
  return { username, uno };
};

exports.getUnoId = getUnoId;
