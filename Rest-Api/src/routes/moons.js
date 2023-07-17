
const router = require('express').Router();
const { auth } = require('../utils/auth');
const { getMoons, getMoon, editMoon, deleteMoon } = require('../controllers/moonController')

// middleware that is specific to this router

router.get('/', getMoons);
router.get('/:moonId', getMoon);
router.put('/:moonId/edit', auth, editMoon);
router.delete('/:moonId/delete', auth, deleteMoon);


module.exports = router;