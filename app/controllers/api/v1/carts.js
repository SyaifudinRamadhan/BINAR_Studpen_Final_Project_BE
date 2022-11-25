const cartService = require('../../../services/carts');

module.exports = {
  async list(req, res) {
    try {
      const carts = await cartService.list();
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
};
