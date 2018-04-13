'use strict';
const accounts = require('./accounts.js');
const logger = require('../utils/logger');
const messageStore = require('../models/messageStore.js');

const about = {
  index(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);
    logger.info('about rendering');
    if(loggedInUser){
    const viewData = {
      title: 'About Bookmarks App',
      fullname: loggedInUser.firstName+' '+loggedInUser.lastName,
      messages:messageStore.getAllMessages(),
    };
    response.render('about', viewData);
    }
    else response.redirect('/');
  },
  
  addMessage(request,response){
   const message = request.body.message;
    const newMessage = {
      messagetext:message,
    };
    messageStore.addMessage(newMessage);
    response.redirect('/about');
  },
  
};

module.exports = about;
