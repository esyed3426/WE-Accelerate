'use strict';
var data = require('../../../data/data.js');
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
     */
    get: function getPatientVisits(req, res, next) {
        res.send(data.visit.filter(record => record.patient_id == req.params.id));
    }
};
