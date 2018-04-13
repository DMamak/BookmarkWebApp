'use strict';

const express = require('express');
const router = express.Router();

const start = require('./controllers/start.js');
const dashboard = require('./controllers/dashboard.js');
const about = require('./controllers/about.js');
const bookmark = require('./controllers/bookmark.js');

router.get('/', start.index);
router.get('/dashboard', dashboard.index);
router.get('/about', about.index);
router.get('/bookmark/:id',bookmark.index);
router.get('/bookmark/:id/deletebookmark/:bookmarkid',bookmark.deleteBookmark);
router.get('/dashboard/deleteCategory/:id',dashboard.deleteCategory);
router.post('/bookmark/:id/addbookmark',bookmark.addBookmark);

module.exports = router;
