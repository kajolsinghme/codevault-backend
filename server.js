import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import snippetRoutes from "./routes/snippetRoute.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "https://codevault-frontend-phi.vercel.app"
  })
);

app.use(express.json());

app.use("/api/snippets", snippetRoutes);

connectDB();

app.listen(process.env.PORT, () =>
  console.log(`Server running on ${process.env.PORT}`)
);