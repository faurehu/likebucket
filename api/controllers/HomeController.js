/**
 * HomeController.js
 *
 * @description ::
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {

  index: function(req, res) {

    var _id = req.user.bucket;

    Bucket.find({id: _id}, function(err, __bucket) {
      if(err) return next(err);
      var _bucket = __bucket
      res.view({
        user: req.user, bucket: _bucket[0]
      });
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
