import express from "express";
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/errorHandler.js";
import handler404 from "./middleware/404handler.js";
import menuRouter from "./routes/menuRoutes.js";
import orderRouter from "./routes/orderRoutes.js";
import customerRouter from "./routes/customerRoutes.js";
import authRouter from "./Routes/authRoutes.js"
const app = express();

app.use(express.json());
app.use(logger);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Restaurant Ordering API" });
});
//mounting
app.use("/auth", authRouter);
app.use("/menu", menuRouter);
app.use("/customers", customerRouter);
app.use("/orders", orderRouter);

app.use(handler404);
app.use(errorHandler);

export default app;
// --- a/file:///c%3A/Users/hp/Desktop/restaurant_api/src/Routes/authRoutes.js  
// +++ b/file:///c%3A/Users/hp/Desktop/restaurant_api/src/Routes/authRoutes.js
// @@ -1,5 +1,5 @@
//  import express from "express";
// +import { signup, login } from '../controllers/authController';
// -import { signup, login } from "../controllers/authController";
  //  import { body } from "express-validator";
