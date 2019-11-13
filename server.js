const dotenv = require('dotenv');
const Db = require('tingodb')().Db;
const assert = require('assert');

// ENVIRONMENT VARIABLES
dotenv.config({ path: './config.env' });
const app = require('./app');
const dbfile = process.env.DBPATH + 'settingsdb';

const db = new Db(dbfile, {});
const userCollection = db.collection('users');
userCollection.insert(
  { name: 'loyauser', age: 45, password: 'manymany' },
  { w: 1 },
  (err, result) => {
    assert.equal(null, err);
  }
);

userCollection.findOne({ name: 'loyauser' }, (err, item) => {
  assert.equal(null, err);
  console.log(item.password);
});

const port = process.env.PORT || 7000;
app.listen(port, () => {
  console.log(`App is running on port ${port}...`);
});
