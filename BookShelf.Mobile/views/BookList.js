﻿BookShelf.BookList = function(params) {

    var source = new DevExpress.data.DataSource({
        store: BookShelf.db.books.getAll(),
        filter: params.filter,
        sort: params.sort,
        map: function(book) {
            return {
                id: book.id,
                title: book.title,
                author: book.author,
                status: BookShelf.db.getBookStatus(book).toLowerCase(),
                showChevron: true
            }
        }
    });

    var viewModel = {

        source: source,

        addBook: function() {
            BookShelf.app.navigate({
                view: "BookAdd",
                status: params.status || BookShelf.db.bookStatus.later
            }, { modal: true });
        },

        deleteBook: function(args) {
            BookShelf.db.books.remove(args.itemData.id);
        },

        viewShowing: function() {
            source.reload();
        }

    };

    return viewModel;
};