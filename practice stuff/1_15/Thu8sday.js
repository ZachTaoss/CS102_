class User{
    constructor(){
        this.userName = "Jim"
        this.password = "Jimmy5"
    }

    
    loginUsername(){
        inputName = prompt("Enter user Name");
    }


    checkUsername(){
        if(inputName == "Jim"){
            inputPassword = prompt(`Hello ${this.userName} what is your password?`);
        }else{
            alert("You have tried to come to this website without havinga username we have gotten your ip address we will see you soon you will never see us");
        }
    }


    checkPassword(){
        if(inputPassword == "Jimmy5"){
            alert("Congrets you have made it this was a test you passed you may live on");
        }else{
            alert(`You were so close ${this.userName} but not quite you have 3 days till we come see you but you will never see us`);
        }
    }
}

User.loginUsername().checkUsername().checkPassword();