/**
 * HomeController.js
 *
 * @description ::
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {

  index: function(req, res) {
    res.view({
      user: req.user
    });
  },

  list: function(req, res, next) {

    User.find({},function foundUsers (err, users) {

      if (err) return next(err);

      res.view({
        users: users
      });

    });
  },

   bucket: function(req, res, next) {

      var user = req.user;
      res.view({user: user});

  },

  link: function(req,res,next) {
    res.view();
  }

}
