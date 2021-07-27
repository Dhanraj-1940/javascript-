console.log("DictionaryAPI problem");


let button = document.getElementById('submit');

button.addEventListener('click',(e) => {
    e.preventDefault();
    let inputTxt = document.getElementById('in').value;
    let url = 'https://api.dictionaryapi.dev/api/v2/entries/en_US/';
    const xhr = new XMLHttpRequest();
    xhr.open('GET',url+inputTxt, true);

    xhr.onreadystatechange = () => {
        console.log("readyStateChange");
    }

    xhr.onload = function() {
        if(this.status==200){
            const definition = JSON.parse(this.responseText)[0].meanings[0].definitions[0].definition
            const audio = JSON.parse(this.responseText)[0].phonetics[0].audio;
            console.log(JSON.parse(this.responseText)[0]);
            let str = "";
            str += `
                <li>Definition: ${definition}</li>
                <audio id="myAudio" controls autoplay>
                <source src="${audio}" type="audio/ogg">
                Your browser does not support the audio element.
                </audio>
            `;
            let container = document.getElementById('box');
            container.innerHTML = str;
            document.getElementById('myAudio').autoplay = false;
        }
        else{
            console.log(this.status);
        }
    }

    xhr.send();
});




