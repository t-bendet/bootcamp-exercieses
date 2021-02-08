const leapYear = (year ) => {
  if (year%4 == 0) {
    if (year%100 == 0) {
      if (year%400 == 0) {
        return('this is indeed a leap year')
      } else {
        return('this is not a leap year')        
      }
    } else {
      return('this is indeed a leap year')
    }
  } else {
    return('this is not a leap year')
  }
}

console.log(leapYear(1700))

