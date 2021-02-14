const sortingFunk2 = (first,second) => {
  return first.length < second.length && -1 || first.length > second.length && 1 || 0;
};

console.log(sortingFunk2('e12','ert'))