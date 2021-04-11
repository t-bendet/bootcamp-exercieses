const fs = require('fs')
fs.writeFileSync('notes.txt','i created a txt file')
fs.copyFileSync("notes.txt", 'notesCopy.txt');
fs.renameSync('notesCopy.txt', 'notesCopyRenamed.txt')
const fileList = fs.readdirSync('./').map(file => {
  return file
});
console.log(fileList);
fs.appendFileSync('notesCopyRenamed.txt', ' and added some text');
