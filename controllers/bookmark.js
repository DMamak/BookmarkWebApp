'use strict'

const logger = require ('../utils/logger');
const bookmarkCollection = require('../models/bookmarklist.js');

const bookmark= {
  index(request,response){
    const bookmarkid= request.params.id;
    logger.debug('bookmark Id = ',bookmarkid);
    const viewData = {
      title: 'Bookmark',
      bookmark: bookmarkCollection.getbookmark(bookmarkid),
    };
    response.render('bookmark',viewData);
                    },
  
  deleteBookmark(request,response){
    const CategoryId = request.params.id;
    const bookmarkId = request.params.bookmarkid;
    logger.debug('Deleting Bookmark bookmarkId from Category CategoryId}');
    bookmarkCollection.removebookmark(CategoryId,bookmarkId);
    response.redirect('/bookmark/'+ CategoryId);
  },
                    };

module.exports= bookmark;