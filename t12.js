let personData = [{
    uid: 1,
    firstName: "Ali",
    lastName: "Mahdavi",
  },
  {
    uid: 2,
    firstName: "Reza",
    lastName: "Shahmardan",
  },
  {
    uid: 3,
    firstName: "Hassan",
    lastName: "Qolami",
  },
  {
    uid: 4,
    firstName: "Morteza",
    lastName: "Hamedani",
  },
  {
    uid: 5,
    firstName: "Sina",
    lastName: "Hejazi",
  },
  {
    uid: 6,
    firstName: "Hadi",
    lastName: "Sadri",
  },
];

let additionalPersonData = [{
    uid: 3,
    position: "UI Designer",
    city: "Biarjmand",
  },
  {
    uid: 1,
    position: "Back-End Develope",
    city: "Taleqan",
  },
  {
    uid: 2,
    position: "Front-End Developer",
    city: "Behbahan",
  },
  {
    uid: 4,
    position: "Devops",
    city: "Shiraz",
  },
  {
    uid: 6,
    position: "Server Admin",
    city: "Tehran",
  },
  {
    uid: 5,
    position: "Product Manager",
    city: "Hamedan",
  },
];


let result = [];
for (let i = 0; i < personData.length; i++) {

  for (let j = 0; j < personData.length; j++) {
   
    if (personData[i].uid == additionalPersonData[j].uid) {
     
      result[i]={...personData[i],...additionalPersonData[j]}
      


    }

    
   
  }
}


// console.log(result);

function read(obj) {
  return console.log(result)
}
// read();

function create(obj) {
  for (let i = 0; i < result.length; i++) {
    if (result[i].uid === obj.uid) {
      console.log("this uid is taken")
    } 

    

  }
  result.push(obj);
  return result;

}
// let d = {
//   uid: 9,
//   firstName: "a",
//   lastName:"s",
//   position:"d",
//   city:"sf"

// }
// console.log(create(d))


function update(obj) {
  for (let i = 0; i < result.length; i++) {
    if (result[i].uid === obj.uid) {
      result[i].firstName = obj.firstName;
      result[i].lastName = obj.lastName;
      result[i].position = obj.position;
      result[i].city = obj.city;

      return result;
    }
  }

  return result;
}
// let s = {
//   uid: 3,
//   firstName: "a",
//   lastName:"s",
//   position:"d",
//   city:"sf"

// }
// console.log(update(s))

function deleting(objuid){
  for(let i=0;i<result.length;i++){
    if(result[i].uid == objuid){
      var a=result.indexOf(result[i]);
      result.splice(a,1);
       

    }
  }
  

  return result;
}
// console.log(deleting(3))
