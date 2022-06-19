'use strict';
var data = require('../../../data/data.js');
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
     */
    get: function getDoctorVisits(req, res, next) {
        res.send(data.visit.filter(record => record.doctor_id == req.params.id));
    }
};
