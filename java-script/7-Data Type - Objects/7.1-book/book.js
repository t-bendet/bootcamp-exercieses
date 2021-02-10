const book = {
  name: 'harry potter',
  length: 457,
  author:'j.k rowling',
  movie: true,
};

const funky = book => `the book ${book.name} was written by ${book.author}
and has ${book.length} pages`;

console.log(funky(book));