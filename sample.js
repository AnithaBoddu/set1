
//Exercise-1
// console.log ("my name is chris and I'm 29 years old");

//Exercise-2
// function whoAmI ( name, age ) {
	
// 	console.log ( "hi my name is " + name + "and I am " + age + "years old");
// } 

// comments here
// function yearOfBirth(age){
  
// }


//Exercise-3
// function whoAmI( name, age ) {
	
// 	var yearOfBirth= (2016-age);
	

// 	console.log ( "hi my name is " + name + "and I am " + age + "years old");
// 	console.log ( "I was born in the year of " + yearOfBirth );

// }


// whoAmI("jo", 23); 

// Exercise-5
// function yearOfBirth(age){
//   return age;
// }

// function whoAmI(name, age){
//     var yearOfBirth= yearOfBirth(age);
//     console.log ( "hi my name is " + name + "and I am " + age + "years old");
// 	console.log ( "I was born in the year of " + yob );

// }
// whoAmI("Joe",20);


//Exercise-6
// function yearOfBirth(age){
//   if(age<0) {
//   	throw "Age can not be negative"
//   }

//   return 2016 - age;
// }
// unction whoAmI(name, age){

// 	try { 
// 		var yob = yearOfBirth(age);
// 	    console.log ( "hi my name is " + name + "and I am " + age + "years old");
//  		console.log ( "I was born in the year of " + yob );
// 	} catch(err){
// 		console.error('Error Message' +err);
// 	}
 
//  }

// whoAmI("Chris", -5);

// exercise7

// function whoAmI(name, age){

//     if(name == null || age == null ){
    
//      console.error("Arguments not valid");
//     } else{
//     	console.log ( "hi my name is " + name + "and I am " + age + "years old");
//     }
     
 	

// }
//  whoAmI("Joe",23);




// exercise 8
function whoAmI(name, age){

   if ( typeof name =='string' && typeof age='123' ){

   	console.log (name);
   	console.log(age);
   }
 		
 		else{
 			console.log ("Not valid");
 		}

}
 whoAmI("Joe","gh");


