const transaction = require('../../repositories/transactions');

module.exports = {
    async getCart(req) {
        try {
            const trx = JSON.parse(JSON.stringify(await transaction.find({
                id: req.params.id,
                user_id: req.user.id,
                deleted: false,
                token_trx: "",
            })))
            if (!trx) {
                return { error: 404, msg: "Cart tidak ditemukan" }
            }
            
            req.wait_list = trx
            console.log(req.wait_list);
            return { trx }
        } catch (error) {
            console.log(error)
            return { error: 400, msg: error ? error : "Bad request server function" }
        }
    }
}