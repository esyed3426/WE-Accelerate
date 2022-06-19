'use strict';
var dataProvider = require('../data/doctor.js');
/**
 * Operations on /doctor
 */
module.exports = {
    /**
     * summary: Add a new doctor
     * description: 
     * parameters: body
     * produces: application/json
     * responses: 200, 405
     */
    post: function addDoctor(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['post']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
