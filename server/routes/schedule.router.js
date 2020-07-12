// const express = require('express');
// const pool = require('../modules/pool');
// const router = express.Router();

// router.post('/schedule', (req, res) => {
// console.log('in schedule.router', req.body);
//     const opponentsTeam = req.body.opponentsName;
//     const arena = req.body.arena;
//     const date = req.body.date;
//     const time = req.body.time;
//     const jerseyColor = req.body.jerseyColor;
//     const queryText = 'INSERT INTO "games" (opponentsTeam, date, time, arena, jersey) VALUES ($1, $2, $3, $4, $5)';
//     pool.query(queryText, [opponentsTeam, arena, date, time, jerseyColor])
//         .then(() => res.sendStatus(201))
//         .catch(() => res.sendStatus(500));
// });
// // router.get('/', (req, res) => {
// //     pool.query('SELECT * FROM "team"')
// // });


// module.exports = router;