'use strict';

const accounts = require('./accounts.js');
const logger = require('../utils/logger');
const bookmarklistStore = require('../models/bookmarklist');
const userlistStore = require('../models/userStore');

const start = {
  index(request, response) {
    
    const loggedInUser = accounts.getCurrentUser(request);
    logger.info('start rendering');
    if(loggedInUser){
      
      const bookmarkCollection=bookmarklistStore.getUserBookmarks(loggedInUser.id);
      
      let totalBookmarks =0;
      let maxBookmarks =0;
      let maxBookmarkName = "";
      let minBookmarks =0;
      let minBookmarksName = "";
      
      for(let i =0; i< bookmarkCollection.length;i++){
        
        totalBookmarks = totalBookmarks+ bookmarkCollection[i].bookmarks.length;
        
        if(maxBookmarks <= bookmarkCollection[i].bookmarks.length){
             maxBookmarks = bookmarkCollection[i].bookmarks.length; 
            maxBookmarkName = bookmarkCollection[i].Category;
        }else{
        }
        
        minBookmarks=maxBookmarks;
        if(minBookmarks >= bookmarkCollection[i].bookmarks.length){
          
         minBookmarks = bookmarkCollection[i].bookmarks.length;
          minBookmarksName = bookmarkCollection[i].Category;
        }else{}
      }
      
      const userlistCollection = userlistStore.getAllUsers();
      let userID;
      let totalBookmarksperUser=0;
      let userBookmarksCollection;
      let totalAllUserBookmark =0;
      let maxUserBookmark = 0;
      let minUserBookmark=100;
      let username ="";
      let username1 = "";
      let maxUserName="";
      let minUserName="";
      
      for(let x =0; x<userlistCollection.length;x++){
        userID = userlistCollection[x].id;
        username = userlistCollection[x].firstName + ' ' + userlistCollection[x].lastName;
        logger.info("round: " + x + "UserID : " + userID);
        userBookmarksCollection = bookmarklistStore.getUserBookmarks(userID);
        totalBookmarksperUser =0;
         
        for(let y = 0; y < userBookmarksCollection.length;y++){
            totalAllUserBookmark = totalAllUserBookmark+  userBookmarksCollection[y].bookmarks.length;
            totalBookmarksperUser = totalBookmarksperUser + userBookmarksCollection[y].bookmarks.length;
            
          }
        
        if(maxUserBookmark < totalBookmarksperUser ) {
                    maxUserBookmark = totalBookmarksperUser;
                    maxUserName = username;
              }
        
        if(minUserBookmark >= totalBookmarksperUser){
            minUserBookmark = totalBookmarksperUser
          logger.info(minUserBookmark);
          minUserName = username;
        }
      }
      
    const viewData = {
      title: 'Welcome to Bookmarks App',
      fullname: loggedInUser.firstName+' '+loggedInUser.lastName,
      totalNumberOfCollections:bookmarkCollection.length,
      totalBookmarks: totalBookmarks,
      maxBookmarkName:maxBookmarkName,
      minBookmarkName:minBookmarksName,
      totalAllUserBookmark:totalAllUserBookmark,
      userAvarage:(totalAllUserBookmark/userlistCollection.length),
      userWithMostBookmarks:maxUserName,
      userWithLeastBookmarks:minUserName,
      
    };
    response.render('start', viewData);
    }
    else response.redirect('/');
  },
};

module.exports = start;
