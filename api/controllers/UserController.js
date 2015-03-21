/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	create: function(req,res,next) {

		var userObj = {
			name: req.param('name'),
			surname: req.param('surname'),
			email: req.param('email'),
			fb_id: req.param('id')
		}

		User.create(userObj, function userCreated(err, user){

			if(err) return res.redirect('/');

			user.save(function(err,user) {
				if(err) return next(err);
				res.redirect('user/show/'+user.id);
			});

		});

	}

};
