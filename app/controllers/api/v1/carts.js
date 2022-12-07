const cartService = require('../../../services/carts');
// const { deleteCart } = require('../../../service/carts');

module.exports = {
  async list(req, res) {
    try {
      const data = await cartService.list(req);
      if(data.error){
        res.status(data.error).json({errors: [data.msg]})
      }else{
        res.status(200).json(data)
      }
    } catch (err) {
      res.status(400).json({
        errors: [err.message],
      });
    }
  },
  async create(req, res) {
    try {
      const data = await cartService.create(req);
      if(data.error){
        res.status(data.error).json({errors: [data.msg]})
      }else{
        res.status(200).json(data)
      }
    } catch (err) {
      res.status(400).json({
        errors: [err.message],
      });
    }
  },
  async destroy(req, res) {
    try {
      const data = await cartService.delete(req);
      if(data.error){
        res.status(data.error).json({errors: [data.msg]})
      }else{
        res.status(200).json({deleted: "Data have deleted successfully"})
      }
    } catch (err) {
      {
        res.status(400).json({
          status: 'Failed',
          errors: [err.message],
        });
      }
    }
  },
};