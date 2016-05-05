'use strict';

(function() {


  //js class to be instantiated
  function BookService() { //arguments are it's injectable dependencies
    this.books = [
      {
        id: 1,
        title: 'Starship Troopers',
        author: 'Robert A. Heinlein'
      },
      {
        id: 2,
        title: 'Enders Game',
        author: 'Orson Scott Card'
      },
      {
        id: 3,
        title: 'Talion: Revenant',
        author: 'Michael A. Stackpole'
      },
      {
        id: 4,
        title: 'Jitterbug Perfume',
        author: 'Tom Robins'
      },
    ];


    this.getBooks = function() {
      return this.books;
    };

    this.getBook = function(id) {
      return this.books.filter(function(book) {
        return id === book.id;
      })
      .reduce(function(p, c) {
        return c;
      }, null);
    };

    this.nextId = function() {
      return this.books.reduce(function(highest, book) {
        return Math.max(book.id, highest);
      }, 0) + 1;
    };

    this.addBook = function(book) {
      this.books.push(Object.assign({
            id: this.nextId()
          }, book)
        );
      Object.assign(book, {
        title: '',
        author: ''
      });

    };

  }

  angular.module('myApp')
  .service('BookService', BookService);

})();