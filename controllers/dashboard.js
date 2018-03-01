'use strict';

const logger = require('../utils/logger');
const bookmarkCollection = require('../models/bookmarklist.js');

const dashboard = {
  index(request, response) {
    logger.info('dashboard rendering');
    const viewData = {
      title: 'Bookmarks Dashboard',
      bookmarks: bookmarkCollectio,
    };
    response.render('dashboard', viewData);
  },
};

module.exports = dashboard;
