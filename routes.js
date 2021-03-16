const promiseRouter = require("express-promise-router");
const router = promiseRouter();

const user = require("./controllers/user");
router.get("/user", user.show);

module.exports = router;
