//Implemetation of promise in js
var ans = new Promise((resolve, reject) => {
    if (true) {
        return resolve();
    } else {
        return reject();
    }
})

ans
    .then(function () {
        console.log("Promise is resolved");
    })
    .catch(function () {
        console.log("Promise is rejected");
    })


//Task 1 : User Will give number between 0 - 9 and if the number is less than 5 then promise will be resolved and if the number is greater than 5 then promise will be rejected.

var ans = new Promise((res,rej) =>{
     let num = prompt("Enter a number between 0 - 9");
     if(num < 5){
        return res()
     }else{
        return req()
     }
})

ans.
then(function() {
    console.log("Number is less than 5, Promise is resolved");
})
.catch(function() {
 console.log("Number is greater than 5, Promise is rejected");
})

//Asysnc task using  async and await.
async function xyz() {
    let blob = await fetch("https://randomuser.me/api/");
    let data = await blob.json();
    console.log(data)
}


//Asysnc task using then()
function xyz() {
    fetch("https://randomuser.me/api/")
        .then(function (blob) {
            return blob.json();
        })
        .then(function (data) {
            console.log(data);
        })
}

xyz()