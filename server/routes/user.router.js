const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', (req, res, next) => {  
  console.log('in user post', req.body);
  
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const queryText = 'INSERT INTO "user" (username, password, first_name, last_name) VALUES ($1, $2, $3, $4) RETURNING id';

  pool.query(queryText, [username, password, first_name, last_name])
  // pool.query(queryTextTwo, [teamName])
    .then(() => res.sendStatus(201))
    .catch(() => res.sendStatus(500));
});
router.post('/CreateTeam', (req,res)=> {
  console.log('in CreateTeam', req.body.name);
  
  const teamName = req.body.name;
  const queryTextTwo = 'INSERT INTO "team" (name) VALUES ($1)';
  pool.query(queryTextTwo,[teamName])
})
// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

router.get('/team', (req,res) => {
  pool.query('SELECT * FROM "team";').then((result) => {
    res.send(result.rows);
  }).catch((error) => {
    console.log('theres an error in get', error);
    res.sendStatus(500);
  })
})

router.post('/schedule', (req, res) => {
  console.log('in schedule.router', req.body);
  const opponentsTeam = req.body.opponentsName;
  const arena = req.body.arena;
  const date = req.body.date;
  const time = req.body.time;
  const jerseyColor = req.body.jerseyColor;
  const queryText = 'INSERT INTO "games" ("opponentsTeam", "date", "time", "arena", "jersey") VALUES ($1, $2, $3, $4, $5)';
  pool.query(queryText, [opponentsTeam, date, time, arena, jerseyColor])
    .then(() => res.sendStatus(201))
    .catch(() => res.sendStatus(500));
});

router.get('/teamSchedule', (req,res) => {
  console.log('in teamSchedule ROUTER', req.body);
  pool.query(`SELECT * FROM "games" JOIN "team" ON "games"."id" = "team"."games_id" JOIN "user" on "team"."user_id" = "user"."id" WHERE "user"."id" = ${req.user.id};`)
  .then((result) => {
    res.send(result.rows);
  }).catch((error) => {
    console.log('theres an error in /teamSchedule', error);
    res.sendStatus(500);
  })
})

module.exports = router;
