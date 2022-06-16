const { versions } = require('../versions');

const getCombatHistory = async (handle, platform) => {
  const matrix = [];
  for (const version of versions) {
    const { game, api } = version;
    let data = await api.combatHistory(handle, platform);
    const { matches } = data.data;
    if (!matches) break;
    for (const match of matches) {
      const { map, mode, matchID, playerStats, result, utcEndSeconds } = match;
      const { kills, scorePerMinute, damageDone, damageTaken, teamPlacement, deaths, headshots, assists, totalXp, score, longestStreak, executions, timePlayed, kdRatio } = playerStats;
      matrix.push({
        game,
        map,
        mode,
        matchID,
        result: result ? result: teamPlacement,
        kills,
        scorePerMinute,
        damageDone,
        headshots,
        deaths,
        assists,
        score,
        totalXp: totalXp ? totalXp: 0,
        longestStreak,
        executions,
        damageTaken,
        timePlayed,
        utcEndSeconds: new Date(utcEndSeconds*1000),
        kdRatio: Number(Number(kdRatio).toFixed(2)),
      });
    };
  };
  return matrix;
};

module.exports = { getCombatHistory };
