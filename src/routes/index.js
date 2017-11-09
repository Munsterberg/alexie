import express from 'express';
import passport from 'passport';

import * as homeController from '../controllers/homeController';
import * as movieApiController from '../controllers/movieApiController';

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
  res.send({ message: 'User logged out' });
});
router.get('/api/current_user', (req, res) => {
  res.send(req.user);
});

router.get('/api/genre/movie/list', movieApiController.genreList);
router.get('/api/movie/popular', movieApiController.popularMovies);
router.get('/api/movie/top_rated', movieApiController.topRatedMovies);
router.get('/api/movie/upcoming', movieApiController.upcomingMovies);

export default router;
