const { model, Schema } = require('mongoose');

const plays = model('plays', Schema({
  uno: { type: String, required: true },
  game: { type: String, required: true },
  map: { type: String, required: true },
  mode: { type: String, required: true },
  matchID: { type: String, required: true },
  result: { type: String, required: true },
  kills: { type: Number, required: true },
  scorePerMinute: { type: Number, required: true },
  damageDone: { type: Number, required: true },
  headshots: { type: Number, required: true },
  deaths: { type: Number, required: true },
  assists: { type: Number, required: true },
  score: { type: Number, required: true },
  totalXp: { type: Number, required: true },
  longestStreak: { type: Number, required: true },
  executions: { type: Number, required: true },
  damageTaken: { type: Number, required: true },
  timePlayed: { type: Number, required: true },
  utcEndSeconds: { type: Date, required: true },
  kdRatio: { type: Number, required: true }
}));

module.exports = { plays };
