import express from 'express';
import monk from 'monk';

const router = express.Router(); // TODO fix linter config or add eslint ignore
const db = monk('localhost:27017/nodetest1');

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', {
    title: 'Add New User',
  });
});

/* GET Userlist page. */
router.get('/userlist', (req, res) => {
  const collection = db.get('usercollection');
  collection.find({}, {}, (e, docs) => {
    res.render('userlist', {
      userlist: docs,
    });
  });
});

/* POST to Add User Service */
router.post('/adduser', (req, res) => {
  // Get our form values. These rely on the "name" attributes
  const userName = req.body.username;
  const userEmail = req.body.useremail;

  // Set our collection
  const collection = db.get('usercollection');

  // Submit to the DB
  collection.insert({
    username: userName,
    email: userEmail,
  }, (err) => {
    if (err) {
      // If it failed, return error
      res.send('There was a problem adding the information to the database.');
    } else {
      res.redirect('userlist');
    }
  });
});

export default router;
