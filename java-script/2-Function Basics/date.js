const date = () =>{
  let now = new Date();
  let dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day = dayList[now.getDay()] ;//con
  let dayInMonth= now.getDate();
  let monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let month = monthList[now.getMonth()];//conv
  let year = now.getFullYear();
  let res = `Today is ${day} the ${dayInMonth} of ${month}, ${year}`
  return res
}
console.log(date())