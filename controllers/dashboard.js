'use strict';

const logger = require('../utils/logger');
const bookmarklist= require('../models/bookmarklist');

const dashboard = {
  index(request, response) {
    logger.info('dashboard rendering');
    const viewData = {
      title: 'Bookmarks Dashboard',
      bookmarks: bookmarklist.getAllbookmarks(),
    };
    response.render('dashboard', viewData);
  },
};

module.exports = dashboard;
