const h = document.getElementById("header");
const body = document.getElementById("container");
const div = document.createElement("div");
const text = document.createTextNode("dirty fries");
div.appendChild(text);
body.appendChild(div);

div.style.backgroundColor="red";
div.contentEditable = true;

div.addEventListener("blur", (e) => {
    var content = e.target.innerHTML;
    localStorage.setItem("message", content);
    sessionStorage.setItem("message", content);
    console.log(e);
    e.target.style.backgroundColor = "yellow";
});

