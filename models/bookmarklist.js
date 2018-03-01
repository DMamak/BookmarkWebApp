'use strict';
const bookmarksList = {
  
bookmarkCollection: require('./bookmarkslist.json').bookmarkCollection,

  getAllbookmarks(){
  return this.bookmarkCollection;
},
      
 getbookmarks(id){
   let foundCathegory = null;
   for(let cathegory of this.bookmarkCollection)
   {
     if(id == cathegory.id)
     {
       foundCathegory = cathegory;
     }
   }
   return foundCathegory;
 },
};

module.exports = bookmarksList;
