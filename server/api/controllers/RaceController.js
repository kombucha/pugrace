/**
 * RaceController
 *
 * @description :: Server-side logic for managing Races
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    join: function(req, res) {
        var pugId = 1, // TODO: get it from session
            raceId = req.param('id');

            Race.findOne(raceId).populate('runs').then(function(race) {
                // TODO: put this in a policy
                // if (!race.state === 'waiting') {
                //     return res.error('Can\'t join the race');
                // }

                return Run.create({}).then(function(run) {
                    race.runs.add(run);
                    return race.save();
                });
            })
            .then(function (race) {
                return res.json(race);
            })
            .catch(function(err) {
                sails.log.error(err);
                return res.serverError('Failed to join race');
            });
    }
};

