/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	'bucket': function(req,res,next) {

		var start = req.param('start');
		var end = req.param('end');
		var ammount = req.param('ammount');
		var uid = req.param('uid');

	},

	'like': function(req,res,next) {

		var uid = req.param('uid');
		var url = req.param('url');

	}

};
