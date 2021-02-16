function calcAverage (arr){
  var sum = 0  ;
  for (   var i     =  0  ;    i     <  arr .length;  i     ++ ){
    sum += arr [     i     ];
  }
  return sum ;
}
calcAverage ([    85 ,     90 ,     92 ]);
//1. the concole dosent return anny errors ,but sum is undefined
//2. step with the debugger
//3 cant add undefined to number