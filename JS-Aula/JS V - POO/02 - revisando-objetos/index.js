const book = {
    title: "Eragon",
    pages: 468,
    published: true,
    inStock: 20,
    tags: ["fantasy", "adventure","medieval"],
    author: {
        name: "Christopher Paolini"
    },
    addOnStock(quantity) {
        this.inStock += quantity
    },
    save: function () {
        //salva no banco de dados
    }
}

console.log(book)
console.log(book.author.name)

console.log(book.inStock)

book.addOnStock(15)

console.log(book.inStock)

console.log("-------------------------------------------------")
//---------------------
function Book(title,pages,tags,author) {
    this.title = title
    this.pages = pages
    this.tags = tags
    this.author = author
    this.published = false
    this.inStock = 0
    this.addOnStock = function (quantity) {
        this.inStock += quantity
    }
    this.save = function () {
        //salva no banco de dados
    }

}
const author = { name: "Christopher Paolini"}

const eragon = new Book('Eragon',468,["fantasy", "adventure","medieval"],author)

console.log(eragon)



