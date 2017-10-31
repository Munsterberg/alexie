import express from 'express';
import passport from 'passport';

import * as homeController from '../controllers/homeController';

const router = express.Router();

// home routes
router.get('/', homeController.index);

// OAuth routes
router.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));
router.get('/auth/google/callback', passport.authenticate('google'));

// API routes
router.get('/api/logout', (req, res) => {
  req.logout();
  res.send('user logged out');
});
router.get('/api/current_user', (req, res) => {
  res.send(req.user);
});

export default router;
