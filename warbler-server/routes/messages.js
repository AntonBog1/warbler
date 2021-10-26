const express = require("express");
const router = express.Router({ mergeParams: true }); //mergeParams lets us get access to the ID inside the router. 

const { createMessage } = require("../handlers/messages");

// prefix - /api/users/:id/messages
router.route("/").post(createMessage);

module.exports = router;