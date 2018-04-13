'use strict';

const logger = require('../utils/logger');
const bookmarklist= require('../models/bookmarklist');
const accounts = require('./accounts.js');
const uuid = require('uuid');

const dashboard = {
  index(request, response) {
    logger.info('dashboard rendering');
    const loggedInUser = accounts.getCurrentUser(request);
    logger.info(accounts.getCurrentUser(request));
    if(loggedInUser)
    {
    const viewData = {
      title: 'Bookmarks Dashboard',
      bookmarks: bookmarklist.getAllbookmarks(),
      fullname: loggedInUser.firstName+' '+loggedInUser.lastName,
    };
    response.render('dashboard', viewData);
    }
    else
      response.redirect('/');
  },


 deleteCategory(request,response){
   const categoryID = request.params.id;
   bookmarklist.removeCategory(categoryID);
   response.redirect('/dashboard');
   
 },
  addCategory(request,response){
    const loggedInUser = accounts.getCurrentUser(request);
    const newCategory = {
      id : uuid(),
      userid: loggedInUser.id,
      Category: request.body.title,
      bookmarks: []
    };
    bookmarklist.addCategory(newCategory);
    response.redirect('/dashboard');
  },
};


module.exports = dashboard;
