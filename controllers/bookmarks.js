'use strict'

const logger = require ('../utils/logger');
const bookmarkCollection = require('../models/bookmarklist');

const bookmarks= {
  index(request,response){
    const bookmarkid= request.params.id;
    logger.debug('bookmark Id = ',bookmarkid);
    const viewData = {
      title: 'Bookmarks',
      bookmark: bookmarkCollection.getbookmarks(bookmarkid),
    };
    response.render('bookmarks',viewData);
                    },
                    };

module.exports= bookmarks;