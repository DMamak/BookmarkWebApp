'use strict'

const logger = require ('../utils/logger');
const bookmarkCollection = require('../models/bookmarklist.js');

const bookmarkCategories = {
  index(request,response){
    const cathegoryId= request.params.id;
    logger.debug('Cathegory Id = ',cathegoryId);
    const viewData = {
      title: 'Bookmarks',
      Categories: bookmarkCollection.getbookmarks(cathegoryId),
    };
    response.render('bookmarks',viewData);
                    },
                    };

module.exports= bookmarkCategories;