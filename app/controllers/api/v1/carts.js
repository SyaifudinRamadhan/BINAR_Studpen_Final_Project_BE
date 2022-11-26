const cartService = require('../../../service/carts');

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
  async create(req, res) {
    try {
      const carts = await cartService.create(req.body);
      console.log(req.body);
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
  deleteCart(req, res) {
    deleteCart(req)
      .then((data) => {
        if (data.error) {
          res.status(data.error).json({ errors: [data.msg] });
        } else {
          res.status(200).json(data);
        }
      })
      .catch((err) => {
        res.status(400).json({ errors: [err] });
      });
  },
};
