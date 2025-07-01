import { config } from 'dotenv';
import jwt from 'jsonwebtoken';

// Load environment variables
config(); // This should be called once, at the entry point of your app

export const userMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded token:", decoded);

    // Attach user info to request (adjust based on your token structure)
    req.userID = decoded.userId || decoded.id;

    next(); // Proceed to next middleware
  } catch (error) {
    console.error("JWT Error:", error.message);
    return res.status(401).json({ error: "Invalid or expired token" });
  }
};
