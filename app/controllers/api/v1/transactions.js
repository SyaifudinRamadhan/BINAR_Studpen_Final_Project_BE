const transactionsService = require('../../../service/transactions');

module.exports = {
  async create(req, res) {
    try {
      const carts = await transactionsRepository.create(req.body);
      console.log(req.body);
      res.status(201).json({
        status: 'Data have created successfully',
        data: {
          transactions,
        },
      });
    } catch (err) {
      res.status(400).json({
        status: 'Failed',
        errors: [err.message],
      });
    }
  },
  async list(req, res) {
    try {
      const transactions = await transactionsRepository.list();
      res.status(200).json({
        status: 'Success',
        data: {
          transactions,
        },
      });
    } catch (err) {
      res.status(400).json({
        status: 'Failed',
        errors: [err.message],
      });
    }
  },
  async update(req, res) {
    try {
      const cars = await carService.update(req.params.id, req.body);
      res.status(200).json({
        status: 'Data have updated successfully',
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
      const cars = await carService.delete(req.params.id);
      res.status(200).json({
        status: 'Data have deleted successfully',
        // data: {
        //   cars
        // }
      });
    } catch (err) {
      res.status(400).json({
        status: 'Failed',
        errors: [err.message],
      });
    }
  },
};
