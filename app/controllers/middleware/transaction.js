const trxService = require('../../services/middleware/transaction');

module.exports = {
    create(req, res, next){
        trxService.transactionCreate(req).then(data => {
            if (data.error) {
                res.status(data.error).json({ errors: [data.msg] })
                return
            } else {
                next()
            }
        }).catch(err => {
            res.status(400).json({ errors: [err] })
            return
        })
    },
    getTrx(req, res, next){
        trxService.getTrx(req).then(data => {
            if (data.error) {
                res.status(data.error).json({ errors: [data.msg] })
                return
            } else {
                next()
            }
        }).catch(err => {
            res.status(400).json({ errors: [err] })
            return
        })
    }
}