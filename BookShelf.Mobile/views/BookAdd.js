﻿BookShelf.BookAdd = function(params) {

    var baseViewModel = BookShelf.BookForm(params);

    var viewModel = {

        save: function() {
            BookShelf.db.books.add(this.getBook());
            BookShelf.app.bookListShowing.fire({ reload: true });
            BookShelf.app.backToList(this.book.status());
        },
        
        resetBook: function() {
            this.book.title("");
            this.book.author("");
            this.book.status(params.status);
            this.book.progress(0);
            this.book.startDate(new Date());
            this.book.finishDate(new Date());
            this.book.rating(null);
            this.book.tags([]);
        },

        viewShowing: function() {
            this.resetBook();
        },

        viewShown: function() {
            baseViewModel.viewShown();

            $(".title-field").dxTextBox("focus");
        }

    };

    return $.extend({}, baseViewModel, viewModel);
};