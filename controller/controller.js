const table1 = require('../schema/schema');


const UserDetails = async (req, res) => {
    const user = new table1(req.body);
    user.save((error, result) => {
        if (error) {
            res.json({ status: false });
        } else {
            res.json({ status: true });
        }
    })
}


module.exports = {UserDetails};