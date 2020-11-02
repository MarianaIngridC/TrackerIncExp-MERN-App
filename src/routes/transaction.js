const router = require('express').Router();
const { getTransactions, addTransaction, deleteTransactions } = require('../controllers/transaction');


router.get('/transaction', getTransactions)
router.post('/transaction', addTransaction)
// router.post('/transaction', (req, res) => {
//     res.send('nuevaaaa')
// }
// )

router.delete('/transaction/:id', deleteTransactions)



module.exports = router;