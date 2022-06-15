const { getCombatHistory } = require('./modules/getCombatHistory');

const app = async () => {
  console.table(await getCombatHistory('16480142698448771586', 'uno'));
};

app();
