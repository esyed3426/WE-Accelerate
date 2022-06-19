'use strict';
var data = require('../../data/data.js');
/**
 * Operations on /doctor/{id}
 */
module.exports = {
    /**
     * summary: Get a doctor by Id
     * description:
     * parameters: id
     * produces: application/json
     * responses: 200, 405
     */
    get: function getDoctor(req, res, next) {
        res.send(data.doctor.find(record => record.id == req.params.id));
    }
};
