/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  
  'new': function (req,res){
    res.view();
  }//,
  // create: function(){
  //   User.create( req.param.all(), function userCreated(err, user){
  //     if (err) return next(err);
  //     res.json(user);
  //   });
  // }
};