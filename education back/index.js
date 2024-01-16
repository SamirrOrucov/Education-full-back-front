import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const { Schema } = mongoose;

const blogSchema = new Schema({
  icon: String,
  title: String,
  description: String,
});
const Blog = mongoose.model("Blog", blogSchema);

app.get("/", async (req, res) => {
  try {
    const result = await Blog.find({});
    res.send(result);
  } catch (error) {
    res.send(error.message);
  }
});
app.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Blog.findById(id);
    res.send(result);
  } catch (error) {
    res.send(error.message);
  }
});
app.post("/", async (req, res) => {
  try {
    const { icon, title, description } = req.body;
    const result = new Blog({ icon, title, description });
    await result.save();
  } catch (error) {
    res.send(error.message);
  }
  res.send("Got a POST request");
});

app.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { icon, title, description } = req.body;
    const result = await Blog.findByIdAndUpdate(id, {
      icon,
      title,
      description,
    });
    res.send("Got a PUT request at /user");
  } catch (error) {
    res.send(error.message);
  }
});

app.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Blog.findByIdAndDelete(id);
    res.send("Got a DELETE request at /user");
  } catch (error) {
    res.send(error.message);
  }
});
mongoose.connect(process.env.DB_KEY).then(() => console.log("Connected!"));
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
