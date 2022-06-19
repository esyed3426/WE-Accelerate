'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /patients
 */
module.exports = {
    /**
     * summary: Get all patients
     * description: 
     * parameters: 
     * produces: application/json
     * responses: 200, 405
     * operationId: getPatients
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/patients',
                operation: 'get',
                response: '200'
            }, callback);
        },
        405: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/patients',
                operation: 'get',
                response: '405'
            }, callback);
        }
    }
};
