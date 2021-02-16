function countOccurrences (str, char){
  let counter = 0;
  for(let i=0;i < str.length; i++){
    if(str.charAt(i) === char){
      counter +=1;
    }
  }
  return counter;
}
countOccurrences ("ini mini miny moe","n");
//1. the concole dosent return anny errors ,but counter dosent increse it's value
//2. brakepoints at diffrents lines
//3.counter dosent increse it's value 