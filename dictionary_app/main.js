console.log("Dictionary App");

let button = document.getElementById('searchButton');

button.addEventListener('click',(e) => {
    e.preventDefault();
    let inputTxt = document.getElementById('search').value;
    let url = 'https://api.dictionaryapi.dev/api/v2/entries/en_US/';
    const xhr = new XMLHttpRequest();
    xhr.open('GET',url+inputTxt, true);

    xhr.onreadystatechange = () => {
        console.log("readyStateChange");
    }

    xhr.onload = function() {
        if(this.status==200){
            const definition = JSON.parse(this.responseText)[0].meanings[0].definitions[0].definition;
            const example = JSON.parse(this.responseText)[0].meanings[0].definitions[0].example;
            const synonyms = JSON.parse(this.responseText)[0].meanings[0].definitions[0].synonyms;
            let synonym_string = "";
            for(i in synonyms){
                synonym_string += synonyms[i] + ", ";
            }
            //console.log(synonym_string.length);
            synonym_string = synonym_string.slice(0,synonym_string.length-2);
            const audio = JSON.parse(this.responseText)[0].phonetics[0].audio;
            console.log(JSON.parse(this.responseText)[0]);
            let str = "";
            str += `
                <div style="margin:auto; width:65%; margin-top:3%; margin-bottom:3%"><u>Definition:</u> ${definition}</div>
                <div style="margin:auto; width:65%; margin-top:3%; margin-bottom:3%"><u>Example:</u> ${example}</div>
                <div style="margin:auto; width:65%; margin-top:3%; margin-bottom:3%"><u>Synonyms:</u> <a href="https://www.google.com" style="color:white">${synonym_string}</a> </div>
                <div style="margin:auto; width:65%; margin-top:3%; margin-bottom:3%; padding-left:25%"><audio  id="myAudio" controls autoplay>
                <source src="${audio}" type="audio/ogg" style="align:center">
                Your browser does not support the audio element.
                </audio></div>
            `;
            let container = document.getElementById('displayBox');
            container.innerHTML = str;
            document.getElementById('myAudio').autoplay = false;
        }
        else{
            console.log(this.status);
        }
    }

    xhr.send();
});




