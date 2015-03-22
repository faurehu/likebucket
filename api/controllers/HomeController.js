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
      var _id = req.user.bucket;
      Bucket.find({id: _id}, function(err, _bucket) {
        if(err) return next(err);
        console.log(_bucket[0]);
        res.view({user: user, bucket: _bucket[0]});
      });

  },

  link: function(req,res,next) {
    var user = req.user;
    res.view({user: user});
  }

}
