/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {

    provider: {
      type: 'STRING',
      required: true
    },

    uid: {
      type: 'STRING',
      required: true,
      unique: true
    },

    name: {
      type: 'STRING',
      required: true
    },

    email: {
      type: 'STRING',
      required: true,
      email: true
    },

    firstname: {
      type: 'STRING',
      required: true
    },

    lastname: {
      type: 'STRING',
      required: true
    },

    likes: {
      collection: 'like',
      via: 'owner'
    },

    support: {
      collection: 'like',
      via: 'recipient'
    },

    bucket: {
      model: 'bucket'
    }

  }
};
