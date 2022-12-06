const cartService = require('../../../services/carts');
// const { deleteCart } = require('../../../service/carts');

module.exports = {
  async list(req, res) {
    try {
      const carts = await cartService.list(req);
      res.status(200).json({
        status: 'Success',
        data: {
          carts,
        },
      });
    } catch (err) {
      res.status(400).json({
        status: 'Failed',
        errors: [err.message],
      });
    }
  },
  async create(req, res) {
    try {
      const carts = await cartService.create(req);
      res.status(201).json({
        status: 'Data have created successfully',
        data: {
          carts,
        },
      });
    } catch (err) {
      res.status(400).json({
        status: 'Failed',
        errors: [err.message],
      });
    }
  },
  async destroy(req, res) {
    try {
      // kurang kondisi jika id tidak tersedia
      // idTarget = req.params.id != req.params.id;
      // if (idTarget) {
      //   return { error: 400, msg: 'data tidak ada' };
      // } else {
      const carts = await cartService.delete(req.params.id);
      res.status(200).json({
        status: 'Data have deleted successfully',
        // data: {
        //   carts,
        // },
      });
      // }
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