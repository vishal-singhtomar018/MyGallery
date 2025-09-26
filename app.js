import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import ejsMate from "ejs-mate";

const app = express();
const PORT = 3000;

// Setup paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.static(path.join(__dirname, "public")));
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", (req, res) => {
  res.render("index", { name: "Vishal Tomar" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
