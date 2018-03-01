'use strict';
const _ = require('lodash'); 
const bookmarkList = {
  
bookmarkCollection: require('./bookmarkslist.json').bookmarkCollection,

  getAllbookmarks(){
  return this.bookmarkCollection;
},
      
 getbookmark(id){
   let foundbookmark = null;
   for(let bookmark of this.bookmarkCollection)
   {
     if(id == bookmark.id)
     {
       foundbookmark = bookmark;
     }
   }
   return foundbookmark;
 },
  
  removebookmark(id,bookmarkId){
    const bookmark = this.getbookmark(id);
    _.remove(bookmark.bookmarks,{id:bookmarkId});
    
  },
};

module.exports = bookmarkList;
