const User = require('../models/User');

module.exports = {
    async store(req, res) {
        const { email } = req.body;
        let user = await User.find
        const user = await User.create({ email });
        return res.json(user);
    }
};
