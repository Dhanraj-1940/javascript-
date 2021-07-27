//promise
// - resolve (promise resolved/fullfilled)
// - pending (promise pending)
// - reject (promise rejected)

console.log("Promises");

const otp = 345872;

function verify_otp(otp){
    return new Promise((resolve,reject) => {
        if(otp==345872){
            resolve("SUCCESS! ...transaction in progress");
        }
        else{
            reject("wrong otp");
        }
    });
}

verify_otp(otp).then((resolve_msg) => {
    console.log(resolve_msg);
}).catch((reject_msg) => {
    console.log(reject_msg);
});


//resolve() function is called at then()
//reject() function is called at catch()