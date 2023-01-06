let form = document.querySelector("form");

 

form.addEventListener("submit",function (event){

event.preventDefault()

console.log("submitted")

// First name validation

let fname = document.querySelector("#fname")

console.log(fname.value.length)

if(fname.value.length < 2){

    let fmessage = document.querySelector("#fname_text")

    fmessage.style.display = "block";

    fmessage.innerText = "first name is short"

}

else{

    let fmessage = document.querySelector("#fname_text")

    fmessage.style.display = "none";

}

// Last name validation
let lname = document.querySelector("#lname")

console.log(lname.value.length)

if(lname.value.length < 2){

    let lmessage = document.querySelector("#lname_text")

    lmessage.style.display = "block";

    lmessage.innerText = "last name is short"

}

else{

    let lmessage = document.querySelector("#lname_text")

    lmessage.style.display = "none";

}


})


