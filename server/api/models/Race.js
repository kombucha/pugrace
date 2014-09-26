/**
 * Race.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {
        name: 'string',
        owner: {
            model: 'pug'
        },
        runs: {
            collection: 'run',
            via: 'race'
        },
        state: {
            type: 'string',
            enum: ['waiting', 'playing', 'closed'],
            defaultsTo: 'waiting'
        },
        questions: {
            model: 'question'
        }
    }
};

