let maxiterations = 30
document.addEventListener("DOMContentLoaded",createtable);


function createtable()

{
    fetch("list.txt")
    .then((res) => res.text())
    .then((text) => {
        // do something with "text"
        console.log(typeof(text))
        let arr = text.split("\n");
        arr.forEach(nickname => {
            let p = document.createElement("p");
            //console.log("a bucchin e " + nickname);
            p.innerHTML = nickname;
            document.body.appendChild(p);
        });
        searchnickname()

    })
    .catch((e) => console.error(e));
    console.log("ciao")

}


function searchnickname(){
    let nicknames = document.getElementsByTagName('p');
    console.log(nicknames)

    for(let i = 0; i < maxiterations; i++){
        let url = "https://www.instagram.com/"
        console.log(nicknames[i].innerHTML)
        url +=nicknames[i].innerHTML
        window.open(url, "_blank")

    }
    
}