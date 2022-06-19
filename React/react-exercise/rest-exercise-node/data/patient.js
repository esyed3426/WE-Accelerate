'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /patient
 */
module.exports = {
    /**
     * summary: Add a new patient
     * description: 
     * parameters: body
     * produces: application/json
     * responses: 200, 405
     * operationId: addPatient
     */
    post: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/patient',
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
                path: '/patient',
                operation: 'post',
                response: '405'
            }, callback);
        }
    }
};
