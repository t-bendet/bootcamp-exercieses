const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];
const funky = (arr) => {
  let obj = {}
  // transforming to a string and lower case   
  let sorting = arr.join("").toLowerCase();
  //removing space
  let sortingMore = sorting.replace(/\s/g,'');
  // back to an array
  let stillSorting =  sortingMore.split("")
  stillSorting.sort()
  do {
    let lastIndex = stillSorting.lastIndexOf(stillSorting[0])// how many appearances the char have
    let char = stillSorting[0] // the range of the char
    obj[char] = lastIndex +1 // adding number of app to obj
    stillSorting.splice(0,lastIndex +1) //removing from arr
  } while (stillSorting.length > 0); // no more letters? go home
  return obj;
}
const sorteddddddd = funky(array);
console.log(sorteddddddd);

