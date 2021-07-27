const students = [
    {name:"Dhanraj", subject:"javascript"},
    {name:"Shreya", subject:"python"},
]


function enrollStudent(std,callback){
    setTimeout(() => {
        students.push(std);
        console.log("Student enrolled");
        callback();
    }, 3000);
}

function getStudents(){
    setTimeout(() => {
        let str = "";
        students.forEach((student) => {
            str += `<li>${student.name}</li>`;
        })
        document.getElementById("list").innerHTML = str;
        console.log("Students fetched");
    },9000);
}

let std = {name:"Akash",subject:"python"};
enrollStudent(std,getStudents);
//getStudents();