let navbarSection = document.querySelector(".navbar-content");
let sideLayout = document.querySelector(".side-layout");
let meunIcon = document.querySelector(".menu i");
let xIcon = document.querySelector(".x");
let menuContainer = document.querySelector(".menu");
let toTopBtn = document.querySelector(".to-top-page");

// to top
toTopBtn.addEventListener("click", () => {
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

meunIcon.addEventListener("click", () => {
  navbarSection.classList.remove("close");
  sideLayout.classList.remove("close");
});

xIcon.addEventListener("click", () => {
  navbarSection.classList.add("close");
  sideLayout.classList.add("close");
});

let links = document.querySelectorAll(".navbar-content .links li a");
links.forEach((link) => {
  link.addEventListener("click", () => {
    navbarSection.classList.add("close");
    sideLayout.classList.add("close");
  });
});

// change clip path on scroll;
let heroSection = document.querySelector(".hero");

window.addEventListener("scroll", () => {
  let val = 850 - window.scrollY + "px";
  heroSection.style.clipPath = `circle(${val} at center center)`;
  localStorage.setItem("scrollYVal", window.scrollY);
  if (scrollY > 50) {
    menuContainer.classList.add("scroll");
  } else {
    menuContainer.classList.remove("scroll");
  }
  if (scrollY > 400) {
    toTopBtn.classList.remove("hide");
  } else {
    toTopBtn.classList.add("hide");
  }
});

const arrowDown = document.querySelector(".arrow");

arrowDown.addEventListener("click", () => {
  scrollTo({
    top: 800,
  });
});

// change description;
const spanDes = document.querySelector(".hero h1 span");
let texts = ["hassan khaled", "a frontend developer"];
let ind = 0;
let arrayInd = 0;
let currenText = [];
let time = 100;

function writing() {
  spanDes.textContent = currenText.join("");

  if (arrayInd < texts.length) {
    if (ind <= texts[arrayInd].length) {
      currenText.push(texts[arrayInd][ind]);
      ind++;
      time = 100;
    }
    if (ind > texts[arrayInd].length) {
      currenText = [];
      ind = 0;
      arrayInd++;
      time = 4000;
    }
  }
  if (arrayInd >= texts.length) {
    arrayInd = 0;
  }

  setTimeout(writing, time);
}

writing();

// scroll to top
let homeBtn = document.querySelector(".to-top");

homeBtn.addEventListener("click", () => {
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// loading
let laoding = document.querySelector(".overlay");

window.addEventListener("load", () => {
  laoding.style.display = "none";
  document.body.classList.remove("loading");
});
