//061a4ff026d44d488358222b08620cca (API key)
console.log('Welcome to News App');

document.getElementById('body').addEventListener('click',(e)=>{
    if(e.target.className==="title"){
        var dropdowns = document.getElementsByClassName('dropdown');
        console.log(dropdowns);
        const display_prop = e.target.nextElementSibling.style.display;
        Array.from(dropdowns).map((item)=>{
            item.style.display = "none";
        });
        if(display_prop === "none"){
            e.target.nextElementSibling.style.display = "block";
        }else{
            e.target.nextElementSibling.style.display = "none";
        }
    }
});

const xhr = new XMLHttpRequest();
xhr.open('GET','https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=061a4ff026d44d488358222b08620cca', true);
xhr.onload = function() {
    if(this.status==200){
        const response = JSON.parse(this.responseText);
        const articles = response.articles;
        let str = "";
        console.log(articles);
        for(i in articles){
            //console.log(i)
            let title = response.articles[i].title;
            let content = response.articles[i].content;
            let url = response.articles[i].url;
            let image_url = response.articles[i].urlToImage;
            if(i==0){
                //console.log("*");
                str += `
                    <h3 class="title">${title}</h3>
                    <div id="1" class="dropdown" style="display: block">
                        <div class="news-image-box"><img class="news-image" src="${image_url}" /></div>
                        <div class="news-title-box">${content}<a href="${url}">read more</a></div>
                    </div>
                    <hr>
                `;
            }else{
                //console.log("$");
                str += `
                    <h3 class="title">${title}</h3>
                    <div id="1" class="dropdown" style="display: none">
                        <div class="news-image-box"><img class="news-image" src="${image_url}" /></div>
                        <div class="news-title-box">${content}<a href="${url}">read more</a></div>
                    </div>
                    <hr>
                `;
            }
        }
        //console.log(str);
        document.getElementById('content').innerHTML = str;
    }
    else{
        console.log("response status: "+this.status);
    }
}
xhr.send();


