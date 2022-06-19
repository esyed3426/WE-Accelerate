'use strict';
var data = require('../../data/data.js');
/**
 * Operations on /visit/{id}
 */
module.exports = {
    /**
     * summary: Get a visit by Id
     * description:
     * parameters: id
     * produces: application/json
     * responses: 200, 405
     */
    get: function getVisit(req, res, next) {
        res.send(data.visit.find(record => record.id == req.params.id));
    }
};
