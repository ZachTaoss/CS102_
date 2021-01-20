// let students = {
//     studentName(){
//         this.studentName = prompt("What is your name?")
//     },
//     studentID(){
//         this.studentID = Number(prompt("what is your ID", 0000000000))
//     },
//     gradeLevel(){
//         this.gradeLevel = Math.round(Math.random(12))
//     },
//     currectGrade(){
//         this.currectGrade = prompt("What is your grade in this class?")
//     },
//     Permissions: "Student",
//     graduate(){
//         this.gradeLevel ++
//     },
//     whiteList(){
//         this.Permissions = "Admin"
//     },
//     setGrade(level){
//         Grade = level
//     }
// }
// console.log("Cheeck");
// students.studentID().studentName().gradeLevel(),currectGrade()
// console.log(students)
// students.graduate().whiteList().setGrade("A")
// console.log(students)
// // Kyle Showing us
// function Student(fullName,id,gradeLevel,grade){
//     this.fullName = fullName,
//     this.id = id,
//     this.gradeLevel = gradeLevel,
//     this.grade = grade,
//     this.permissions = "Students",

//     this.graduate = function(){
//         this.gradeLevel++
//     },
//     this.whiteList(){
//         this.permissions = "Admin"
//     }
//     this.setGrade = function(value){
//         this.grade = value;
//     }
// }

let jimmy = new Student ("Jimmy T.", "12345$", "11", 91)

console.log()


class User{
    constructor(){
        this.firstName= "Jimmy";
        this.lastName= "Smitty";
    }

    get fullname(){
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(value){
        [this.firstName, this.lastName] = value.split(" ")
    }
};

let user = new User();

user.fullName = "Aaron Hansen"
console.log(user.fullName)

