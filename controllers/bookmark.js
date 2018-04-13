'use strict'

const logger = require ('../utils/logger');
const bookmarkCollection = require('../models/bookmarklist.js');

const bookmark= {
  index(request,response){
    const bookmarkid= request.params.id;
    logger.debug(bookmarkid);
    const viewData = {
      title: 'Bookmark',
      bookmark: bookmarkCollection.getbookmark(bookmarkid),
    };
    response.render('bookmark',viewData);
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
    const bookmarkID = request.params.id;
    const bookmark = bookmarkCollection.getbookmark(bookmarkID);
    const newBookmark = {
      title: request.body.title,
      link: request.body.link,
      description:request.body.description,
    };
    bookmarkCollection.addBookmark(bookmarkID,newBookmark);
     response.redirect('/bookmark/'+ bookmarkID);
  
},
                    };

module.exports= bookmark;