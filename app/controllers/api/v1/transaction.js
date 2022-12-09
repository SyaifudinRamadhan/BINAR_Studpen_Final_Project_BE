const trxService = require('../../../services/transaction');

module.exports = {
  async create(req, res) {
    try {
      const data = await trxService.create(req);
      if (data.error) {
        res.status(data.error).json({ errors: [data.msg] })
      } else {
        res.status(200).json(data)
      }

    } catch (err) {
      res.status(400).json({
        errors: [err.message],
      });
    }
  },
  async update() {
    await trxService.update()
  },
  async list(req, res) {
    try {
      const data = await trxService.list(req);
      if (data.error) {
        res.status(data.error).json({ errors: [data.msg] })
      } else {
        res.status(200).json(data)
      }

    } catch (err) {
      res.status(400).json({
        errors: [err.message],
      });
    }
  },
  async getTrx(req, res){
    try {
      const data = await trxService.getTrx(req);
      if (data.error) {
        res.status(data.error).json({ errors: [data.msg] })
      } else {
        res.status(200).json(data)
      }

    } catch (err) {
      res.status(400).json({
        errors: [err.message],
      });
    }
  },
  async gatAllTrx(req, res){
    try {
      const data = await trxService.getAll(req);
      if (data.error) {
        res.status(data.error).json({ errors: [data.msg] })
      } else {
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
      const data = await trxService.delete(req);
      if (data.error) {
        res.status(data.error).json({ errors: [data.msg] })
      } else {
        res.status(200).json(data)
      }

    } catch (err) {
      res.status(400).json({
        errors: [err.message],
      });
    }
  },
};