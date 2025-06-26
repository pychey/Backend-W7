import Author from "../models/author.js"
import Book from "../models/book.js"

export const getBooksByAuthorName = async ( authorName ) => {
    const author = await Author.findOne({ 
        where: { name: authorName },
        include: Book
    });
    return author.Books;
}

export const createBookForAuthor = async ( authorName, bookData ) => {
    const author = await Author.findOne({
        where: { name: authorName },
    });
    return await author.createBook(bookData);
}

export const listAuthorsWithBooks = async () => {
    const authors = await Author.findAll({
        include: Book,
    });
    return authors;
}