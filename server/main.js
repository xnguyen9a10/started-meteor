import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import '../imports/api/tasks.js';
import { DDPRateLimiter } from 'meteor/ddp-rate-limiter'

const insertRule = {
  type: 'method',
  name: 'tasks.insert'
}

Meteor.startup(() => {
  // code to run on server at startup
  DDPRateLimiter.addRule(insertRule, 1, 2000);  
});
