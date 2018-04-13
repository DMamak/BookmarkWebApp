'use strict';
const _ = require('lodash'); 
const bookmarkList = {
  
bookmarkCollection: require('./bookmarkslist.json').bookmarkCollection,

  getAllbookmarks(){
  return this.bookmarkCollection;
},
      
 getbookmark(id){
   return _.find(this.bookmarkCollection,{id:id});
 },
  
  removebookmark(id,bookmarkId){
    const bookmark = this.getbookmark(id);
    _.remove(bookmark.bookmarks,{id:bookmarkId});
    
  },
  removeCategory(id){
    _.remove(this.bookmarkCollection,{id:id});
  },
  
  addBookmark(id,bookmark){
    const bookmarke = this.getbookmark(id);
    bookmarke.bookmarks.push(bookmark);
  },
  addCategory(category){
    this.bookmarkCollection.push(category);
  },
};

module.exports = bookmarkList;
