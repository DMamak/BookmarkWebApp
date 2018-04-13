'use strict';
const _ = require('lodash'); 
const JsonStore = require('./jsonstore.js');
const bookmarkList = {
  store:new JsonStore('./models/bookmarklist.json',{bookmarkCollection:[]}),
  collection:'bookmarkCollection',

  getAllbookmarks(){
  return this.store.findAll(this.collection);
},
      
 getbookmark(id){
   return this.store.findOneBy(this.collection,{id:id});
 },
  
  removebookmark(id,bookmarkId){
    const bookmark = this.getbookmark(id);
    const bookmarks = bookmark.bookmarks;
    _.remove(bookmarks,{id:bookmarkId});
  },
  removeCategory(id){
    const category = this.getbookmark(id);
    this.store.remove(this.collection,category);
  },
  removeAllCategories(){
    this.store.removeAll(this.collection);
  },
  
  addBookmark(id,bookmark){
    const bookmarke = this.getbookmark(id);
    bookmarke.bookmarks.push(bookmark);
  },
  addCategory(category){
    this.store.add(this.collection,category);
  },
  
  getUserBookmarks(userid){
   return this.store.findBy(this.collection,{userid:userid}); 
  }
};

module.exports = bookmarkList;
