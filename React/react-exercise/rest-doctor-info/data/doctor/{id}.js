'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /doctor/{id}
 */
module.exports = {
    /**
     * summary: get information about a doctor
     * description: 
     * parameters: id
     * produces: application/json
     * responses: 200, 405
     * operationId: getDoctor
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/doctor/{id}',
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
                path: '/doctor/{id}',
                operation: 'get',
                response: '405'
            }, callback);
        }
    }
};
