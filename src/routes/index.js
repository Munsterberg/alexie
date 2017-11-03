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
router.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
  res.redirect('/');
});

// API routes
router.get('/api/logout', (req, res) => {
  req.logout();
});
router.get('/api/current_user', (req, res) => {
  res.send(req.user);
});

export default router;
