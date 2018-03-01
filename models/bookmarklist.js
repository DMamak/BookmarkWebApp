'use strict';
const bookmarksList = {
  
bookmarkCollection: require('./bookmarkslist.json').bookmarkCollection,

  getAllbookmarks(){
  return this.bookmarkCollection;
},
      
 getbookmarks(id){
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
};

module.exports = bookmarksList;
