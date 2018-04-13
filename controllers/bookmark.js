'use strict'

const accounts = require('./accounts.js');
const logger = require ('../utils/logger');
const bookmarkCollection = require('../models/bookmarklist.js');
const uuid = require('uuid');

const bookmark= {
  index(request,response){
    const loggedInUser = accounts.getCurrentUser(request);
    const bookmarkid= request.params.id;
    logger.debug(bookmarkid);
    if(loggedInUser){
      
    const viewData = {
      title: 'Bookmark',
      bookmark: bookmarkCollection.getbookmark(bookmarkid),
      fullname: loggedInUser.firstName+' '+loggedInUser.lastName,
    };
    response.render('bookmark',viewData);
    }
    else response.redirect('/');
                    },
  
  deleteBookmark(request,response){
    const CategoryId = request.params.id;
    const bookmarkId = request.params.bookmarkid;
    logger.debug('Deleting Bookmark=',bookmarkId);
    logger.debug('from Category', CategoryId);
    bookmarkCollection.removebookmark(CategoryId,bookmarkId);
    response.redirect('/bookmark/'+ CategoryId);
  },
  
  addBookmark(request,response){
    const categoryID = request.params.id;
    const bookmark = bookmarkCollection.getbookmark(categoryID);
    logger.debug(request.body.title);
    const newBookmark = {
      id:uuid(),
      title: request.body.title,
      link: request.body.link,
      description: request.body.description,
    };
    bookmarkCollection.addBookmark(categoryID,newBookmark);
     response.redirect('/bookmark/'+ categoryID);
  
},
                    };

module.exports= bookmark;