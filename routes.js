'use strict';

const express = require('express');
const router = express.Router();

const start = require('./controllers/start.js');
const dashboard = require('./controllers/dashboard.js');
const about = require('./controllers/about.js');
const bookmark = require('./controllers/bookmark.js');
const accounts = require('./controllers/accounts.js');

router.get('/start', start.index);

router.get('/dashboard', dashboard.index);
router.get('/dashboard/deleteCategory/:id',dashboard.deleteCategory);
router.post('/dashboard/addcategory',dashboard.addCategory);

router.get('/about', about.index);


router.get('/bookmark/:id',bookmark.index);
router.get('/bookmark/:id/deletebookmark/:bookmarkid',bookmark.deleteBookmark);
router.post('/bookmark/:id/addbookmark',bookmark.addBookmark);


router.get('/', accounts.index);
router.get('/login', accounts.login);
router.get('/signup', accounts.signup);
router.get('/logout', accounts.logout);
router.post('/register', accounts.register);
router.post('/authenticate', accounts.authenticate);

router.post('/addmessage',about.addMessage);

module.exports = router;
