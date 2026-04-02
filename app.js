const express = require("express");
const path = require("path");
const ejsMate = require("ejs-mate");
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override");

let posts = require("./posts");

const app = express();

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/posts", (req, res) => {
  res.render("index", { posts });
});

app.get("/posts/new", (req, res) => {
  res.render("new");
});

app.post("/posts", (req, res) => {
  const { username, content } = req.body;
  let id = uuidv4();
  console.log(id);
  posts.push({ id, username, content });
  res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  if (!post) {
    return res.send("Post not found");
  }
  res.render("show", { post });
});

//UPDATE POST
app.patch("/posts/:id", (req, res) => {
  let { id } = req.params;
  let { content } = req.body;

  let post = posts.find((p) => id === p.id);

  if (!post) {
    return res.send("Post not found");
  }

  post.content = content;
  res.redirect("/posts");
});

app.get("/posts/:id/edit", (req, res) => {
  res.render("edit");
});

app.delete("/posts/:id", (req, res) => {
  let { id } = req.params;
  posts = posts.filter((p) => id !== p.id);
  res.redirect("/posts");
});

app.listen(3000, () => {
  console.log("Server running");
});
