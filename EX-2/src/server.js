import sequelize from "./utils/database.js";
import Author from "./models/author.js";
import Book from "./models/book.js";
import { getBooksByAuthorName, createBookForAuthor, listAuthorsWithBooks } from "./utils/queries.js";

Author.hasMany(Book);
Book.belongsTo(Author);

await sequelize.sync({ force: true });

// ====== Sample Data =======

await Author.bulkCreate([
    {
      name: "Ronan The Best",
      birthYear: 1990,
      Books: [
        { title: "Journey of Code", publicationYear: 2010, pages: 300 },
        { title: "Mastering Sequelize", publicationYear: 2012, pages: 450 },
      ],
    },
    {
      name: "Kim Ang",
      birthYear: 1995,
      Books: [
        { title: "Traffic Intersection", publicationYear: 2016, pages: 280 },
        { title: "Express with Ease", publicationYear: 2019, pages: 320 },
      ],
    },
    {
      name: "Hok Tim",
      birthYear: 2015,
      Books: [
        { title: "Little Prodigy", publicationYear: 2023, pages: 150 },
        { title: "Baby Genius", publicationYear: 2024, pages: 200 },
      ],
    },
] , { include: Book } );

// ======== Queries =========

const books = await getBooksByAuthorName("Kim Ang");

const newBook = await createBookForAuthor("Kim Ang", { title: 'Catte Card Game', publicationYear: 2025, pages: 170 });

const authors = await listAuthorsWithBooks();

console.log( books );
console.log( newBook );
console.log( authors );

await sequelize.close();