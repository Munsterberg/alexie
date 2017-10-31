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

export default router;
