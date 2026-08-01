import express from "express";
import connectDB from "./config/db.js";
import studentRoutes from "./routes/studentRoutes.js";
import cors from "cors";
import adminRoutes from "./routes/adminRoute.js";




const app = express();

app.use(express.json());
app.use(cors()); 

const PORT = 5500;

connectDB();

app.use("/api/students", studentRoutes);
app.use("/api/admin", adminRoutes);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});