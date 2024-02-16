const UserData = {
    firstName: "John",
    LastName: "Doe",
    age: 30,
    email: "john@example",
    isAdmin: false,
    fullName: function(){
        return `
            Fullname: ${this.firstName} ${this.LastName}
            Age: ${this.age}
            Email: ${this.email}
            Role: ${this.userInformation()}
        `;
    },
    userInformation: function(){
        if(this.isAdmin === true){
            return "Admin";
        }else{
            return "User";
        }
    },

    adminInformatuon: function(){
        this.isAdmin == true;
        if(this.isAdmin === true){
        return "Admin";
        }else{
            return "User";
        }
                
        
    },



}

console.log("User Information");
console.log(UserData.fullName());
console.log(UserData.userInformation());

console.log("Admin Information");
// Object.keys(UserData).forEach((item) =>{
//     console.log(item + ":" + UserData[item]);
// })