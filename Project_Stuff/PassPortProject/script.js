let firstName = "Nothing"
class User{
    constructor(firstName, lastName, dateOfBirth, startPlace, endPlace,startDate,endDate){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.startPlace = startPlace;
        this.endPlace = endPlace;
        this.startDate = startDate;
        this.endDate = endDate;
    }
}

class userWbags extends User{
    constructor(bagNumber){
    this.bagNumber = bagNumber
}
}

function submit(){
    userWbags.bagNumber = Math.round(document.getElementById("bags").value)
    console.log(`This is the number of bags they want ${userWbags.bagNumber}`)
}


let boi = new User("jimmy", "Pie" , new Date("August 8, 2003"), "Arizona", "Flordia", new Date("August 26, 2020"), new Date("August 29, 2021"),10)

// class boi extends User{
//     constructor(firstName, lastName, dateOfBirth, startPlace, endPlace,startDate,endDate){
//     this.firstName= "Jimmy";
//     this.lastName = "Pie";
//     this.dateOfBirth = new Date("August 11, 2003");
//     this.startPlace = "Pheoeix";
//     this.endPlace = "Orladgon";
//     this.startDate = new Date("August 08, 2020");
//     this.endDate = new Date("August 08, 2021");
//     }
// }

console.log(`This is jimmy's info ${boi.lastName}`)
console.log(`He's First name is ${boi.firstName}`)