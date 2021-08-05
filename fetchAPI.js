console.log("fetch API");

//using fetch api to get data from local text file
function getData() {
    let url = "./ajax/dhanraj.txt";
    fetch(url).then((response) => {         //fetch() returns a promise hence we use then()
        return response.text();             //response.text() again returns another promise hence we use then() again
    }).then((data) => {                                         
        console.log(data);
    });
}
getData();

//using fetch api to get data from url
function getData2() {
    let url = "https://api.github.com/users";
    fetch(url).then(response => response.json()).then(data => console.log(data));     //response.json() since this is a json data                         ;                    
}
getData2();