
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


 function titleCased(){
  return tutorials.map(tutorial=>{
     return tutorial.split(' ')// splits the string into an arrayof word
      .map(word=>word.charAt(0).toUpperCase()+word.slice(1))//captalize the first letter of each word and slice the remaining letters;the remaining should be in lowercase.
     .join(' ');//join the words back into a single string
  });
 }
 console.log(titleCased());
 

