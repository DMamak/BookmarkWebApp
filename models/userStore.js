'use strict';

const _ = require('lodash');
const JsonStore = require('./jsonstore.js');

const userStore = {
  store: new JsonStore('./models/userStore.json',{users:[]}),
  collection:'users',
  
  getAllUsers(){
    return this.store.findAll(this.collection);
  },
  
  addUser(user){
    this.store.add(this.collection,user);
  },
  
  getUserById(id){
    return this.store.findOneBy