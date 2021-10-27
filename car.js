const carnumber = Number(prompt("enetr numbers of car"));

let carname = [];
for (let i = 1; i <= carnumber; i++) {
   let a = [];
   a = prompt(`carname${i}`)
   carname.push(a)
}
console.log("carname", carname)

var gamehouse= '*'.repeat(300)

console.log(gamehouse)
var carsLocation = [];
for (let i = 0; i < carnumber; i++) {
   carsLocation[i] = 0;
}
console.log(carsLocation)


function random(array) {
   let currentIndex = array.length;
   let randomIndex = 0;

   while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];



   }

   return array;
}
random(carname)
console.log("random cars ", carname);









var end = 0;
var winner;

for (let i = 0; end <= 0; i++) {
   console.log("nameofcar", carname);

   var carsrandomnum = [];
   for (let i = 1; i <= carnumber; i++) {
      var a = Math.floor(Math.random() * 10);
      carsrandomnum.push(a);
   }
   console.log("carsrandomnum", carsrandomnum);
   

   for (let i = 0; i < carnumber; i++) {
      carsLocation[i] += carsrandomnum[i];
      if (i > 0) {
         for ( let j = 0; j < i; j++) {
            if (carsLocation[j] === carsLocation[i]) {
               carsLocation[i] = 0;
            }
         }
      }
      if (carsLocation[i] >= 300) {
         winner = carname[i];
         end++;
         break;
      }
   }

   console.log("carslocation", carsLocation);

 

   
   console.log(gamehouse);

   if (end === 1) {
      console.log(`${winner} is the winner`);
      break;
   }
}

