class Book {
    constructor(title, author, isbn) {
      this.title = title;
      this.author = author;
      this.isbn = isbn; 
      this.available = true; 
  
      
      this.getIsbn = function () {
        return _isbn;
      };
  
      
      this.setIsbn = function (newIsbn) {
        _isbn = newIsbn;
      };
    }
  
    
    borrowBook() {
      if (this.available) {
        this.available = false;
        console.log("You have successfully borrowed '${this.title}'.");
      } else {
        console.log("Sorry, '${this.title}' is not available.");
      }
    }
  

    returnBook() {
      this.available = true;
      console.log("'${this.title}' has been returned and is now available.");
    }
  }
  

  class Library {
    constructor() {
      this.books = []; 
    }
  
    
    addBook(book) {
      this.books.push(book);
      console.log("'${book.title}' by ${book.author} has been added to the library.");
    }
  
    
    removeBook(isbn) {
      const index = this.books.findIndex(book => book.getIsbn() === isbn);
      if (index !== -1) {
        console.log("'${this.books[index].title}' has been removed from the library.");
        this.books.splice(index, 1);
      } else {
        console.log("No book with ISBN ${isbn} was found.");
      }
    }
  
    
    findBookByTitle(title) {
      const book = this.books.find(book => book.title.toLowerCase() === title.toLowerCase());
      if (book) {
        return "Title: ${book.title}, Author: ${book.author}, ISBN: ${book.getIsbn()}, Available: ${book.available}";
      }
      return "No book titled '${title}' found in the library.";
    }
  }
  
  
  class DigitalLibrary extends Library {
    constructor() {
      super(); 
    }
  
    
    downloadBook(isbn) {
      const book = this.books.find(book => book.getIsbn() === isbn);
      if (book) {
        if (book.available) {
          console.log("You have downloaded '${book.title}' by ${book.author}.");
        } else {
          console.log("Sorry, '${book.title}' is not available for download.");
        }
      } else {
        console.log("No book with ISBN ${isbn} was found.");
      }
    }
  }
