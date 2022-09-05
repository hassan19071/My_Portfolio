let navbarSection = document.querySelector(".navbar-content");
let sideLayout = document.querySelector(".side-layout");
let meunIcon = document.querySelector(".menu");
let xIcon = document.querySelector(".x");

meunIcon.addEventListener("click",()=>{
    navbarSection.classList.remove("close");
    sideLayout.classList.remove("close");
})

xIcon.addEventListener("click",()=>{
    navbarSection.classList.add("close");
    sideLayout.classList.add("close");
})


// change clip path on scroll;
let heroSection = document.querySelector(".hero");

window.addEventListener("scroll",()=>{
    let val = 850 - window.scrollY +"px";
    heroSection.style.clipPath = `circle(${val} at center center)`;
    localStorage.setItem("scrollYVal",window.scrollY);
    console.log(val);
})

// window.addEventListener("load",()=>{
//    window.scrollTo({
//     top:0,
//     behavior:"smooth"
//    })
// })

const arrowDown = document.querySelector(".arrow");

arrowDown.addEventListener("click",()=>{
    scrollTo({
        top:800
    })
});



// change description;
const spanDes = document.querySelector(".hero h1 span");
let texts = ["hassan khaled","frontend developer"];
let ind = 0;
let arrayInd = 0;
let currenText = [];
let time = 100;


function writing(){

   spanDes.textContent = currenText.join("");

   if (arrayInd < texts.length){
        if (ind <= texts[arrayInd].length){
            currenText.push(texts[arrayInd][ind]);
            ind++;
            time = 100;
        }
        if (ind > texts[arrayInd].length){
            currenText = [];
            ind =0;
            arrayInd++;
            time = 4000;
        }
   }
   if (arrayInd >= texts.length){
    arrayInd =0;
   }

   setTimeout(writing,time)
}

writing();

// skills
const rateSkills = document.querySelectorAll(".skills .rate div");

function skills(){
    rateSkills.forEach((el)=>{
        el.style.width = el.getAttribute("data-rate");
    })
}

skills();