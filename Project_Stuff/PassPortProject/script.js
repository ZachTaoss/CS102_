let firstName = "Nothing"
class UserBasicInfo{
    constructor(firstName, lastName, dateOfBirth, startPlace, endPlace,startDate,endDate,bagNumber){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.startPlace = startPlace;
        this.endPlace = endPlace;
        this.startDate = startDate;
        this.endDate = endDate;
        this.bagNumber = bagNumber;
    }
}

class UserWithMeal extends UserBasicInfo{
    constructor(Meal){
        super();
        this.Meal = Meal;
    }
}
class UserWithExtra extends UserBasicInfo{
    constructor(Extra){
        super();
        this.Extras = Extra;
    }
}
function submit(){

}


let boi = new UserBasicInfo("Jimmy", "Pie" , new Date("August 8, 2003"), "Arizona", "Flordia", new Date("August 26, 2020"), new Date("August 29, 2021"),10) 
let boi = boi + new UserWithMeal("Pizza")
console.log(`Last name is ${boi.lastName}`)
console.log(`First name is ${boi.firstName}`)
console.log(`Birth Date ${boi.dateOfBirth}`)
console.log(`Start Place ${boi.startPlace}`)
console.log(`Where they are going ${boi.endPlace}`)
console.log(`The date they are leaving ${boi.startDate}`)
console.log(`The date they are coming back ${boi.endDate}`)
console.log(`The bags they have ${boi.bagNumber}`)
console.log(`The meal he has chosen ${boi.Meal}`)
console.log(`The Extra he has chosen ${boi.Extra}`)