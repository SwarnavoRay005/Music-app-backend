import jwt from "jsonwebtoken";

export const authArtist = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    res.status(401).json({ message: "Unauthorized" });
  }

  //verify the token:
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    if (decoded.role != "artist") {
      res.status(403).json({ message: "Not an artist" });
    }

    req.user = decoded;

    next();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const authUser = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    res.status(401).json({ message: "Unauthorized" });
  }

  //verify the token:
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    if (decoded.role != "user") {
      res.status(403).json({ message: "Not a user" });
    }
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
