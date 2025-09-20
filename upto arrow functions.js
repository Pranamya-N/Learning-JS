function greet (name){
    console.log (`Hello ${name}`)
}

greet ("messi")
greet ("Pranamya")

let age = 19

//Ternary Operator 
console.log(age >= 18? "Can drive ": "Cannot drive")

//Conditional Statements
if (age == 18  || age < 20){
    console.log("Can drive motorcycle only")
}

else if (age >= 20){
    console.log("Can Drive cars and motorcycles ")
}

else {
    console.log("Cannot drive")
}

//Objects
let details = {
    name : "Pranamya",
    age : 25 ,
    education : {
        schooling : "BKVM",
        HigherSchool : "BKVM",
        UNG :{
            University : "Kathmandu University ",
            Course : "Computer Science"
        },
        show : function () {
            
            //arrow functions (arrow functions access this of their parent object here the parent is education so this means education but the name is undefined in the output because it is not defined in its private scope but the normal function assumes this as UNG this is the difference between them)
            const arrow =() => {
            console.log(this.schooling)
            console.log(this.HigherSchool)
            console.log(this.UNG)
            console.log(this.name)
        }
        arrow()
    }
}
}
console.log("")
console.log("")
for (detail in details){
    console.log(`${detail} = ${details[detail]}`)
}
console.log("")
console.log("")
//Chaining Operator
console.log(details?.education?.UNG?.Course)

// arrow functions 
const sum = (a,b) => console.log((a+b));
sum(1,2)

details.education.show()

console.log(details?.education?.UNG?.Course) // optional chaining 


// Ternary Operator 

let age = 19 
//condition ? expressionIfTrue : expressionIfFalse

age >= 18 ? "can drive" ? "cannot drive"
