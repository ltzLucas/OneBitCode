const Author = require("./Author");

const jhon = new Author("John Doe")

const post = jhon.writePost("Título do post", "Lorem ipsum dolor sic...")


post.addComment("Issac Pontes", "Muito Bom")
post.addComment("Lucas", "Achei legal")

console.log(jhon)
console.log(post)