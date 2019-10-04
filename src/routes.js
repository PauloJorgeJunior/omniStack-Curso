const express = required('express');
const routes = express.Router();

routes.post('/users', (req, res) => {
    return res.json(req.body);
});

module.exports = routes;