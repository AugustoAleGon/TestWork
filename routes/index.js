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
/*  const collection = db.get('usercollection');
  collection.find({}, {}, (e, docs) => {
    res.render('userlist', {
      userlist: docs,
    });
  });*/
    res.render('userlist', {
      userlist: [],
    });
});

/* POST to Add User Service */
router.post('/adduser', (req, res) => {
  // Get our form values. These rely on the "name" attributes
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const userEmail = req.body.userEmail;

  // Set our collection
//  const collection = db.get('usercollection');

  // Submit to the DB
/*  collection.insert({
    username: userName,
    email: userEmail,
  }, (err) => {
    if (err) {
      // If it failed, return error
      res.send('There was a problem adding the information to the database.');
    } else {
      res.redirect('userlist');
    }
  });*/
  // Secure part is needed in the backend

  console.log("Your full name is "+firstName+" " +lastName +" and your userEmail is "+userEmail+ " Date: "+Date.now());
  res.redirect('userlist');
});

export default router;
