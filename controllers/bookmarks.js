'use strict'

const logger = require ('../utils/logger');
const bookmarkCollection = require('../models/bookmarklist.js');

const bookmarks = {
  index(request,response){
    const cathegoryId= request.params.id;
    logger.debug('Cathegory Id = ',cathegoryId);
    const viewData = {
      title: 'Bookmarks',
    };
    response.render('bookmarks',viewData);
                    },
                    };
module.exports= bookmarks;