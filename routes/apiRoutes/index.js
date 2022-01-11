//require use of router and routes defined in this folder (notesRoute)
const router = require('express').Router();
const notesRoutes = require('../apiRoutes/notesRoutes');

//Router instance
router.use(notesRoutes);

//Module exports
module.exports = router;