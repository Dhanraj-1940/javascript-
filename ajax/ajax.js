console.log("Ajax tutorial in one video");

let fetchBtn = document.getElementById("fetchbtn");
fetchBtn.addEventListener('click', buttonClickHandler);

function buttonClickHandler(){
    console.log("clicked");

    //instantiate an xhr request
    const xhr = new XMLHttpRequest();
    
    //tells the state of the request made
    //has 5 states 0,1,2,3,4
    // 0 -> unsent
    // 1 -> opened
    // 2 -> headers_received
    // 3 -> loading
    // 4 -> done
    //xhr.onreadystatechange = function() {
    //    console.log(this.readyState);
    //}


    // open the object
    //get only fetches data
    //post sends url and data
    //true stands for async set to true(rest of the code will run while this function is being executed -not blocked)
    //xhr.open('GET', 'dhanraj.txt', true);

    //use this for post request
    xhr.open('POST', 'https://dummy.restapiexample.com/api/v1/create', true);
    xhr.getResponseHeader('content-type','application/json');

    //what to do one progress(optional)
    xhr.onprogress = function(){
        console.log("on progress");
    }

    //what to do when response is ready
    //onload is xhr state 4(done)
    xhr.onload = function(){
        if(this.status===200){
            console.log(this.responseText);
        }
        else{
            console.log("error "+this.status)
        }  
    }

    //send request
    params = {"name":"test12","salary":"123","age":"23"};
    xhr.send(params);

    //this statement may be executed first since we have set async true
    console.log("we are done!");
}

let popBtn = document.getElementById("popbtn");
popBtn.addEventListener('click', popHandler);

function popHandler(){
    console.log("pop handler running");

    const xhr = new XMLHttpRequest();
    
    xhr.onload = function () {
        if(this.status == 200){
            console.log(this.responseText);
            let obj = JSON.parse(this.responseText);
            let list = document.getElementById('list');
            str = "";
            for(key in obj){
                str += `<li>${obj[key].email}</li>`
            }
            list.innerHTML = str;
        }
        else{
            console.log("error "+this.status);
        }
    }
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1/comments', true);
    
    xhr.send();
}