const User = require("../models/User");
// getuser fuction call ho rha hai
exports.getUser = async (req, res) => {
	try {
		// data base atraction using user module
		const userData = await User.find({});
		res.json({ success: true, data: userData });
	} catch (error) {
		res.status(500).json({ success: false, error: error });
	}
};
