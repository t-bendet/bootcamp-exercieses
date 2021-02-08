const average = (a,b,c) =>{
  return (a+b+c) / 3
} 
let jhonTeam1 = average(89,120,103);
let mikeTeam1 = average(116,94,123);
let jhonTeam2 = average(120,120,103);
let mikeTeam2 = average(116,94,123);
let jhonTeam3 = average(89,120,103);
let mikeTeam3 = average(89,120,103);

const results = (jhonTeam,mikeTeam) =>{
  if (jhonTeam > mikeTeam ){
    console.log(`jhon's Team are the winners with an average score of ${jhonTeam}`)
  } else if(jhonTeam < mikeTeam ) {
    console.log(`mike's Team are the winners with an average score of ${mikeTeam}`)
  } else {
    console.log(`it's a draw with an average score of ${mikeTeam}`)
  }
}

results(jhonTeam1,mikeTeam1)
results(jhonTeam2,mikeTeam2)
results(jhonTeam3,mikeTeam3)
