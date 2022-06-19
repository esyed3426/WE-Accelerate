'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /patient/{id}
 */
module.exports = {
    /**
     * summary: Get a patient by Id
     * description: 
     * parameters: id
     * produces: application/json
     * responses: 200, 405
     * operationId: getPatient
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/patient/{id}',
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
                path: '/patient/{id}',
                operation: 'get',
                response: '405'
            }, callback);
        }
    }
};
