let btns = document.querySelectorAll(".btns li");
let hOne = document.querySelector("h1");
let img = document.querySelector(".showBox img");
let str = document.querySelector("strong");
let sp = document.querySelector("span");




let total = btns.length;
sp.innerText = total;


for (let i=0; i<btns.length; i++) {
    btns[i].addEventListener("click", function(e){

        e.preventDefault();
        str.innerText = i + 1;

        let imgSrc = btns[i].querySelector("a").getAttribute("href");
        let txt = btns[i].querySelector("a").innerText;
        hOne.innerText = txt;

        img.setAttribute("src", imgSrc);

        for(let el of btns) {
            el.classList.remove("on");
        }
        
        btns[i].classList.add("on");
    })
}