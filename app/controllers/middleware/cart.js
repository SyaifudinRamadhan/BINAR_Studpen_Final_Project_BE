const midCart = require('../../services/middleware/cart');

module.exports = {
    getCart(req, res, next){
        midCart.getCart(req).then(data => {
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