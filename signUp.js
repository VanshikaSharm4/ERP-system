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
    if(searchInUserArray(tempUser)){
        let failed = document.createElement("div");
        let cardBody = document.getElementById("cardBody");
    failed.id = "failed";
    failed.innerText = "Given email is already used";
    cardBody.prepend(failed);
    setTimeout(function(){
        failed.remove();
    },3000)
    }
    else{
    userArray.push(tempUser);
    localStorage.setItem('userArray', JSON.stringify(userArray));


    let successful = document.createElement("div");
    let cardBody = document.getElementById("cardBody");
    successful.id = "succesful";
    successful.innerText = "Sign Up Succesful";
    cardBody.prepend(successful);
    setTimeout(function(){
        window.location.href= "login.html";
    },3000)

    
    
   
    }
})

function searchInUserArray(userObj){
    console.log(userArray);
    let objFound = userArray.find(function(value){
          return value.email == userObj.email;
    })
    if(objFound) return true;
    else return false;
}
