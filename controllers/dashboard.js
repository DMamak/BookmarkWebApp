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


 deleteCategory(request,response){
   const categoryID = request.params.id;
   bookmarklist.removeCategory(categoryID);
   response.redirect('/dashboard');
   
 },
};


module.exports = dashboard;
