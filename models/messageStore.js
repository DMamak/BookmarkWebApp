'use strict'
const _ = require('lodash');
const JsonStore = require('./jsonstore.js');

const messageStore = {
  store: new JsonStore('./models/messageStore.json',{messages:[]}),
  collection:'messages',
  
  getAllMessages(){
    return this.store.findAll(this.collection);
  },
  
  addMessage(message){
    this.store.add(this.collection,message);
  }
}
module.exports = messageStore;