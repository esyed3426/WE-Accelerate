'use strict';
var dataProvider = require('../../data/doctor/{id}.js');
var data = require('../../data/doctor/info.js');
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
     */
    get: function getDoctor(req, res, next) {
        let docResult = data.doctor.find(record => record.id == req.params.id);
        console.log(docResult);
        if (docResult) {
          res.send(docResult);
        } else {
          res.status(405).send({
            "status": 405,
            "type": "validation error",
            "message": "id not found"
          });
        }
    }
};
