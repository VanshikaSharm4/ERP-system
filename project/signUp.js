let form = document.getElementById("signupForm");
let userArray =[];
userArray = localStorage.getItem("userArray");
 userArray = JSON.parse(userArray);
 if(!userArray) userArray=[];

form.addEventListener("submit", function(event){
    event.preventDefault();

    const userType = form[0].value;
    const firstName = form[1].value;
    const lastName = form[2].value;
    const email = form[3].value;
    const password = form[4].value;
    const iAgree = form[5].value;

    let tempUser = {
        userType,
        name : {
            first: firstName,
            last: lastName
        },
        email,
        password
    }
    userArray.push(tempUser);
    console.log(userArray)
    
    localStorage.setItem('userArray', JSON.stringify(userArray));
    window.location.href= "login.html";

})