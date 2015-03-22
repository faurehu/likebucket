/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	'bucket': function(req,res,next) {

		var _start = new Date();
		var _end = req.param('end');
		var _ammount = req.param('amount');
		var _uid = req.param('uid');

		User.find({uid: _uid}, function(err, _user){
			if(err) return next(err);
			Bucket.create({start: _start, end: _end, ammount: _ammount, user: _user}, function(err, created) {
					if(err) return next(err);
					console.log("Created bucket");
					console.log(created);
			});

		});

	},

	'like': function(req,res,next) {

		var _owner : req.user;
		var _url = req.param('url');

		if(_owner.bucket) {

			User.find({url: _url}, function(err, _user){

				if(err) return next(err);

				Like.create({owner: _owner, recipient: _user, url: _url, bucket: _owner.bucket}, function(err, created) {
					console.log("Created like");
					console.log("Like");
				});

			});

		} else {
			console.log("This guy doesn't have a bucket yet");
		}

	}

};
