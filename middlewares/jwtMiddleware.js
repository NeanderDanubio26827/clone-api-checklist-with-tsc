const jwt = require("jsonwebtoken");

// Middleware para verificar o token
module.exports = function (req, res, next) {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).json({ message: "Formato de token inválido" });
  }

  const tokenWithoutBearer = token.slice(7); // Remove "Bearer " do início do token

  jwt.verify(tokenWithoutBearer, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        message: "Token inválido ou expirado",
      });
    } else {
      // Se o token for válido, você pode anexar as informações decodificadas à requisição para uso posterior
      req.user = decoded;
      next();
    }
  });
};
