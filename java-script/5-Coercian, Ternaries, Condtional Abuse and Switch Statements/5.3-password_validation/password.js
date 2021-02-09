// weak also includes 7 
const validation1 = (password) =>{
  if(password.length > 7) {
    return 'strong'
  } else {
    return 'weak'
  }
}
console.log(validation1('taliswhat?'))
// 2
const validation2 = (password) =>{
  return password.length > 7 ? 'strong' : 'weak';

}
console.log(validation2('taliswhat?'))
//3
const validation3 = (password) =>{
  if(password.length > 7 && password.includes('?')) {
    return 'strong'
  } else {
    return 'weak'
  }
}
console.log(validation3('taliswhat?'))
//4
const validation4 = (password) =>{
  if(password.length > 7) {
    if ( /[A-Z]/.test(password)){
      return 'Very strong'
    } else {
      return 'strong'
    }
  } else {
    return 'weak'
  }
}
console.log(validation4('talIsWhat?'))



