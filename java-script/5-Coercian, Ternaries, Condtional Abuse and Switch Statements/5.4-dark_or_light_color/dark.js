const dark = (color) =>{
  let res;
  switch(color.toLowerCase()){
    case 'yellow':
    case 'pink':
    case 'orange':
      res ='light color';
      break;
    case 'blue':
    case 'puprle':
    case 'brown':
      res ='dark color';
      break;
    default:
      res ='Unknown color';
      break;       
  }
  return res;
}

console.log(dark('Pink'))