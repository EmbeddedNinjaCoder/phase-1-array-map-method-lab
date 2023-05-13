
const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];



const titleCased = () => {
  const newArray = tutorials.map(function (element) {
    const splitArray = element.split(" ")
    return splitArray;  
  })
  
  //console.log(newArray)
  
  for (let i = 0; i < newArray.length; i++) {
    
    let innerArrayLength = newArray[i].length;
       
    for (let j = 0; j < innerArrayLength; j++) {
      newArray[i][j] = newArray[i][j].charAt(0).toUpperCase() +
      newArray[i][j].slice(1);
      //console.log(newArray[i][j])  
    }
  }
   
  for (let i = 0; i < newArray.length; i++) {
     newArray[i] = newArray[i].join(" ") 
  } 
    console.log(newArray) 
    return newArray
 }  

titleCased()




