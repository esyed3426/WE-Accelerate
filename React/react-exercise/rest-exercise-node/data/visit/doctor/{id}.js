'use strict';
var Mockgen = require('../../mockgen.js');
/**
 * Operations on /visit/doctor/{id}
 */
module.exports = {
    /**
     * summary: Get visit(s) by doctor Id
     * description: 
     * parameters: id
     * produces: application/json
     * responses: 200, 405
     * operationId: getDoctorVisits
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/visit/doctor/{id}',
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
                path: '/visit/doctor/{id}',
                operation: 'get',
                response: '405'
            }, callback);
        }
    }
};
