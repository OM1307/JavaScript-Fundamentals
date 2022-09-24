console.log("Hii")
var name = "Om";

if (name === "Om"){
    console.log("Hello!")
   
}
for(i=1 ; i<5 ; i++){
   // let newName = "Mam"; // newName is block-scoped
    //const age = 19 ;
}
//console.log(newName);

function sum(a,b){
    var c= a+b ;
    return c;
}
console.log(sum(10,20));

function calculator(num1,num2){
    var operation = "sub";
    switch(operation){
        case "sum": console.log(num1+num2);
        break;

        case "sub": console.log(num1-num2);
        break;

        case "multiply": console.log(num1*num2);
        break;

        case "divide": console.log(num1/num2);
        break;
    }
}
calculator(10,20);