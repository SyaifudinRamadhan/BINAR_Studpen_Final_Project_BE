/**
 * @file contains function that handle trivial request
 * @author Syaifudin Ramadhan
 */

module.exports = {
  onLost(req, res) {
    res.status(404).json({
      status: "FAIL",
      message: "Route not found! (NB: Ini adalah tempat redirect verifikasi sementaranya. Nunggu bagian FE selesai dan dihosting)",
    });
  },

  onError(err, req, res, next) {
    res.status(500).json({
      status: "ERROR",
      error: {
        name: err.name,
        message: err.message,
      },
    });
  },
};
