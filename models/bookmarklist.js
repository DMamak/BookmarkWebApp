'use strict';
const _ = require('lodash'); 
const bookmarkList = {
  
bookmarkCollection: require('./bookmarkslist.json').bookmarkCollection,

  getAllbookmarks(){
  return this.bookmarkCollection;
},
      
 getbookmark(id){
   return _.find(this.bookmarkCollecton,{id:id});
 },
  
  removebookmark(id,bookmarkId){
    const bookmark = this.getbookmark(id);
    _.remove(bookmark.bookmarks,{id:bookmarkId});
    
  },
};

module.exports = bookmarkList;
