'use strict'

const logger = require ('../utils/logger');
const bookmarkCollection = require('../models/bookmarklist.js');

const bookmark= {
  index(request,response){
    const bookmarkid= request.params.id;
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
                    };

module.exports= bookmark;