'use strict';

const accounts = require('./accounts.js');
const logger = require('../utils/logger');
const bookmarklistStore = require('../models/bookmarklist');

const start = {
  index(request, response) {
    
    const loggedInUser = accounts.getCurrentUser(request);
    logger.info('start rendering');
    if(loggedInUser){
      
      const bookmarkCollection=bookmarklistStore.getUserBookmarks(loggedInUser.id);
      let totalBookmarks =0;
      let maxBookmarks =0;
      let maxBookmarkName = "";
      let minBookmarks = 1;
      let minBookmarksName = "";
      for(let i =0; i< bookmarkCollection.length;i++){
        totalBookmarks = totalBookmarks+ bookmarkCollection[i].bookmarks.length;
        if(maxBookmarks <= bookmarkCollection[i].bookmarks.length){
             maxBookmarks = bookmarkCollection[i].bookmarks.length; 
            maxBookmarkName = bookmarkCollection[i].Category;
        }else{}
        
        if(minBookmarks >= bookmarkCollection[i].bookmarks.length){
         minBookmarks = bookmarkCollection[i].bookmarks.length;
          minBookmarksName = bookmarkCollection[i].Category;
        }
      }
      
    const viewData = {
      title: 'Welcome to Bookmarks App',
      fullname: loggedInUser.firstName+' '+loggedInUser.lastName,
      totalNumberOfCollections:bookmarkCollection.length,
      totalBookmarks: totalBookmarks,
      maxBookmarkName:maxBookmarkName,
      minBookmarkName:minBookmarksName,
      
    };
    response.render('start', viewData);
    }
    else response.redirect('/');
  },
};

module.exports = start;
