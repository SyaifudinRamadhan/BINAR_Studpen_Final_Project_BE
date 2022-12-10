const passRepo = require('../repositories/passenger');
module.exports = {
    async findAll(){
        return await passRepo.findAll()
    }
}