const { NotImplementedError } = require('../extensions/index.js');


function countCats(backyard) {
let allCatsOnOneBackyard = [];
let quanCat = 0;
for (let bush of backyard){
  allCatsOnOneBackyard = allCatsOnOneBackyard.concat(bush)
}
for (let cat of allCatsOnOneBackyard) {
 if(cat === '^^'){
   quanCat ++;
 }
}
return quanCat;
}

module.exports = {
  countCats
};
