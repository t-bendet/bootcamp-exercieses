const grades = (grade) =>{
  if (grade < 65 ){
    return 'F'
  } else if (grade  < 70){
    return 'D'
  } else if (grade  < 80){
    return 'C'
  } else if (grade  < 90){
    return 'B'
  } else {
    return 'A'
  }  
}

console.log(grades(90))