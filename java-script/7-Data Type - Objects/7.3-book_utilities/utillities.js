const potter = {
  name: 'harry potter 1',
  author:'j.k rowling',
  year: 1997,
};
const frodo = {
  name: 'The Lord of the Rings',
  author:'J. R. R. Tolkien',
  year: 1949,
};
const bookUtils = {
  getFirstPublishe(book1,book2){
    return book1['year'] < book2['year'] && book1 || book2;
  },
  setNewEdition(book,editionYear){ 
    return book.latestEdition = editionYear;
  },
  setLanguage(book,lang){ 
    return book.language = lang;
  },
  setTranslation(book, language, translator){
    return book.translation = {
      language,
      translator
    };
  },
  setPublisher(book, name, location){ 
    return book.publisher = {
      name,
      location,
    };
  },
  isSamePublisher(book1, book2){ 
    return JSON.stringify(book1.publisher) === JSON.stringify(book2.publisher) 
  },
};
console.log(bookUtils.getFirstPublishe(potter,frodo));
console.log(bookUtils.setNewEdition(frodo,1980));
console.log(bookUtils.setLanguage(frodo,'english'));
console.log(bookUtils.setTranslation(frodo,'spanish', 'tal bendet'));
console.log(bookUtils.setPublisher(frodo,'MR. T', 'brooklin'));
console.log(bookUtils.isSamePublisher(potter,frodo));
console.log(frodo);