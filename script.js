// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};

// function multiplyNumeric(obj) {
  
//   // loop thru all property values
//   for (let key in menu) {
    
//   //check if values are numbers with typeOf    
//   //replace the variable with the number*2
//     typeof key == 'number' ? key = key*2 : key = key;
//   }
  
// }

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] *= 2;
    }
  }
}