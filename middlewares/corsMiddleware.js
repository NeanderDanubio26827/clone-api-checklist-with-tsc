// corsMiddleware.js

module.exports = function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Max-Age", "86400");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
  
    if (req.method === "OPTIONS") {
      return res.status(200).json({ method: "OPTIONS" });
    }
  
    next();
  };
  