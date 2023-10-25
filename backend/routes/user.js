const express = require("express");
const router = express.Router();
const { createUser } = require("../controller/createUser");
const { getUser } = require("../controller/getUsers");
// frontend se call aayega pahale yha createUserye createUser-handler se map hai
//  and then move create use controlerr pr
router.post("/createUser", createUser);
// getalluser   handler  ka ab getUser controller  me jayega
router.get("/getallUsers", getUser);

module.exports = router;

// frontend ka api call sabase pahale backend ke route me aayega
