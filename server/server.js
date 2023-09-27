import express from "express";
import blogRouter from "./routes/blogs.js";
import "./config/dotenv.js";
const app = express();
app.use("/public", express.static("./public"));
app.use("/scripts", express.static("./public/scripts"));
app.use("/blogs", blogRouter);
app.get("/*", (req, res) => {
  res.status(404).send("Page not found");
});
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
