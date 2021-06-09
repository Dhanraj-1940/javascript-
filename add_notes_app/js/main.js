showNotes();

function createArrObj(item){
    let content = localStorage.getItem(item);
    if(content == null){
        contentList = [];
    }
    else{
        contentList = JSON.parse(content);
    }
    return contentList;
}

let btn = document.getElementById("addBtn");
btn.addEventListener("click", (e) => {
    
    let addTitle = document.getElementById("addTitle");
    let addTxt = document.getElementById("addTxt");
    let notesList = createArrObj("notes");
    let titleList = createArrObj("titles");
    //console.log("this ",notesList);
    //console.log("titles ",titleList);
    notesList.push(addTxt.value);
    titleList.push(addTitle.value);
    localStorage.setItem("notes", JSON.stringify(notesList))
    localStorage.setItem("titles", JSON.stringify(titleList))
    addTxt.value = "";
    addTitle.value = "";
    //console.log(notesList);
    //console.log(titleList);
    let titles = localStorage.getItem("titles");
    //console.log(titles);
    showNotes();
});

function showNotes(){
    let container = document.getElementById("notes");
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesList = [];
    }
    else{
        notesList = JSON.parse(notes);
    }
    
    let html = "";
    let titles = JSON.parse(localStorage.getItem("titles"));
    notesList.forEach((element,index) => {
        html += `<div class="noteCard card my-3 mx-3 border border-dark" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${titles[index]}</h5>
                <p class="card-text">${element}</p>
                <a id="${index}" onclick="markNotes(this.id)" class="btn btn-primary text-white">Mark</a>
                <a id="${index}" onclick="deleteNotes(this.id)" class="btn btn-danger text-white">Delete</a>
            </div>
        </div>`
    });

    if(notesList != 0){
        container.innerHTML = html;
    }
    else{
        container.innerHTML = `<h3>empty (no notes to show)</h3>`
    }
}


function deleteNotes(index){
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesList = [];
    }
    else{
        notesList = JSON.parse(notes);
    }

    notesList.splice(index, 1);
    //console.log("deleting note ",index);
    localStorage.setItem("notes", JSON.stringify(notesList));
    showNotes();
}

function markNotes(index){
    let card = document.getElementById(index);
    let parent = card.parentNode.parentNode;
    if(card.innerHTML.toLowerCase() == "mark"){
        parent.className = "noteCard card my-3 mx-3 border border-dark bg-warning";
        card.innerHTML = "unmark";
    }
    else{
        parent.className = "noteCard card my-3 mx-3 border border-dark";
        card.innerHTML = "Mark";
    }
}

let search = document.getElementById("searchTxt");
search.addEventListener("input", (element) => {
    let inputVal = search.value.toLowerCase();
    let noteCards = document.getElementsByClassName("noteCard");
    Array.from(noteCards).forEach(function(element){
        let cardTitle = element.getElementsByTagName("h5")[0].innerHTML;
        let cardTxt = element.getElementsByTagName("p")[0].innerHTML;
        if(cardTxt.includes(inputVal) || cardTitle.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    });
});