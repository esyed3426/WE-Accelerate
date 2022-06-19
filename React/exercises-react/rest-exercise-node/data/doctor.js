'use strict';
var Mockgen = require('./mockgen.js');
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
     * operationId: addDoctor
     */
    post: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/doctor',
                operation: 'post',
                response: '200'
            }, callback);
        },
        405: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/doctor',
                operation: 'post',
                response: '405'
            }, callback);
        }
    }
};
