const { versions } = require('../versions');

const getCombatHistory = async (handle, platform) => {
  const matrix = [];
  for (const version of versions) {
    const { game, api } = version;
    let data = await api.combatHistory(handle, platform);
    const { matches } = data.data;
    if (!matches) continue;
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
        damageDone: damageDone ? damageDone : 0,
        headshots,
        deaths,
        assists,
        score,
        totalXp: totalXp ? totalXp : 0,
        longestStreak: longestStreak ? longestStreak : 0,
        executions: executions ? executions : 0,
        damageTaken: damageTaken ? damageTaken : 0,
        timePlayed,
        utcEndSeconds: new Date(utcEndSeconds*1000),
        kdRatio: Number(Number(kdRatio).toFixed(2)),
      });
    };
  };
  return matrix;
};

module.exports = { getCombatHistory };
