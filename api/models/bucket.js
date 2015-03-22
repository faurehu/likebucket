/**
* Bucket.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    start: {
      type: 'date',
      required: true
    },

    end: {
      type: 'date',
      required: true
    },

    ammount: {
      type: 'integer',
      required: true
    },

    owner: {
      model: 'User',
      required: true
    },

    likes: {
      collection: 'like',
      via: 'bucket'
    }

  }
};
