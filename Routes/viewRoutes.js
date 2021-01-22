const express = require('express');
const viewsController = require('../controllers/viewsController');
const authController = require('../controllers/authController');
const bookingController=require('../controllers/bookingController')
const router = express.Router();

router.use(viewsController.alerts);

router.get('/', authController.isLoggedIn, viewsController.getOverview);

router.get('/tour/:slug', authController.isLoggedIn, viewsController.getTour);
router.get('/login', authController.isLoggedIn, viewsController.getLoginForm);
router.get('/signup',  viewsController.getsignupForm);
router.get('/me', authController.protect, viewsController.getAccount);

router.get(
  '/my-tours', 
  bookingController.createBookingCheckout,
  authController.protect,
  viewsController.getMyTours);

router.post(
  '/submit-user-data',
  authController.protect,
  viewsController.updateUserData
);

module.exports = router;




// const express = require('express');
// const viewsController = require('../controllers/viewsController');
// const authController = require('../controllers/authController');

// const router = express.Router();

// router.get('/', authController.isLoggedIn, viewsController.getOverview);
// router.get('/tour/:slug', authController.isLoggedIn, viewsController.getTour);
// router.get('/login', authController.isLoggedIn, viewsController.getLoginForm);
// router.get('/signup',  viewsController.getsignupForm);
// router.get('/me', authController.protect, viewsController.getAccount);

// router.post(
//   '/submit-user-data',
//   authController.protect,
//   viewsController.updateUserData
// );

// module.exports = router;




// // const express = require('express');
// // const viewsController = require('../controllers/viewsController');
// // const authController = require('../controllers/authController');

// // const router = express.Router();

// // router.use(viewsController.alerts);

// // router.get('/', authController.isLoggedIn, viewsController.getOverview);

// // router.get('/tour/:slug', authController.isLoggedIn, viewsController.getTour);
// // router.get('/login', authController.isLoggedIn, viewsController.getLoginForm);
// // router.get('/signup',  viewsController.getsignupForm);
// // router.get('/me', authController.protect, viewsController.getAccount);

// // router.get('/my-tours', authController.protect, viewsController.getMyTours);

// // router.post(
// //   '/submit-user-data',
// //   authController.protect,
// //   viewsController.updateUserData
// // );

// // module.exports = router;