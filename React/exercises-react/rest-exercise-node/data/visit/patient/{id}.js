'use strict';
var Mockgen = require('../../mockgen.js');
/**
 * Operations on /visit/patient/{id}
 */
module.exports = {
    /**
     * summary: Get visit(s) by patient Id
     * description: 
     * parameters: id
     * produces: application/json
     * responses: 200, 405
     * operationId: getPatientVisits
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/visit/patient/{id}',
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
                path: '/visit/patient/{id}',
                operation: 'get',
                response: '405'
            }, callback);
        }
    }
};
