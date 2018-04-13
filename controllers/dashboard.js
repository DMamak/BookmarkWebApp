'use strict';

const logger = require('../utils/logger');
const bookmarklist= require('../models/bookmarklist');
const uuid = require('uuid');

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
  addCategory(request,response){
    const newCategory = {
      id : uuid(),
      Category: request.body.title,
      bookmarks: []
    };
    bookmarklist.addCategory(newCategory);
    response.redirect('/dashboard');
  },
};


module.exports = dashboard;
