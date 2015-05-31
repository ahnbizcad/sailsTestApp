/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  //. prevents fields not in schema from being saved
  schema: true,

  attributes: {
    name: {
      type: 'string',
      required: true
    },
    email: {
      email: true,
      type: 'string',
      unique: true,
      required: true
    },
    encryptedPassword: {
      type: 'string'
    }//,
    
    //. deletes fields for client requests
    //. doesn't delete in database
    // toJSON: function(){
    //   var obj = this.toObject();
    //   delete obj.password;
    //   delete obj.confirmation;
    //   delete obj.encryptedPassword;
    //   delete obj._csrf;
    //   return obj;
    // }

  }
};