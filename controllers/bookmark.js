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
    const bookmarkId = request.params.id;
    const bookmarksId = request.params.b
                    };

module.exports= bookmark;