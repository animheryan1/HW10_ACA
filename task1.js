class Author {
    constructor(name, email, gender) {
        this._name = name;
        this._email = email;
        this._gender = gender;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        return this._name = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        return this._email = value;
    }

    get gender() {
        return this._gender;
    }

    set gender(value) {
        return this._gender = value;
    }

    toString() {
        return this.gender + ", author name is " + this.name + ", email is " + this.email;
    }
}

const author = new Author("Sevak", "asd", "Male");
console.log(author.toString());

author.email = "newOne";
console.log(author.toString());


class Book {
    constructor(title, author, price, quantity) {
        this._title = title;
        this._author = author;
        this._price = price;
        this._quantity = quantity;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    get author() {
        return this._author;
    }

    set author(value) {
        this._author = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }

    get quantity() {
        return this._quantity;
    }

    set quantity(value) {
        this._quantity = value;
    }

    getProfit() {
        return this._price * this._quantity;
    }

    toString() {
        return this.title + "is written by " + this.author.name + ", has price " + this.price + ", and quantity is " + this.quantity;
    }
}

const book1 = new Book("Anlreli Zangakatun", author, 10000, 5);
console.log(book1.toString());

book1.price = 100;
console.log(book1.toString());

