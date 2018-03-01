'use strict';
const bookmarksList = {
  
bookmarkCollection: require('./bookmarkslist.json').bookmarkCollection,

  getAllbookmarks(){
  return this.bookmarkCollection;
},
      
 getbookmarks(id){
   let foundBookmark = null;
   for(let bookmark of this.bookmarkCollection)
   {
     if(id == bookmark.id)
     {
       foundBookmark = bookmark;
     }
   }
   return foundBookmark;
 },
};
module.exports = bookmarksList;
