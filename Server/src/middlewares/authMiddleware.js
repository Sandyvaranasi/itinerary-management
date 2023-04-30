const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) {
    const error = new Error('Unauthorized');
    error.status = 401;
    return next(error);
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      const error = new Error('Unauthorized');
      error.status = 401;
      return next(error);
    }

    req.user = user;
    next();
  });
};

module.exports = {authenticateToken}