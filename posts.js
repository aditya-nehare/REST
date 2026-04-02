const { v4: uuidv4 } = require("uuid");

let posts = [
  {
    id: uuidv4(),
    username: "apnacollege",
    content: "Learning REST CONCEPTS",
  },
  {
    id: uuidv4(),
    username: "ap",
    content: "Learning REST CONCEPTS",
  },
  {
    id: uuidv4(),
    username: "apna",
    content: "Learning REST CONCEPTS",
  },
  {
    id: uuidv4(),
    username: "college",
    content: "Learning REST CONCEPTS",
  },
];

module.exports = posts;
