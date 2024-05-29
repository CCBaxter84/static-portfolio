function createElement(tag, className) {
  const element = document.createElement(tag);
  if (className) {
    element.classList.add(className);
  }
  return element;
}

function getElement(selector) {
  return document.querySelector(selector);
}

const short = createElement("article", "about-me");
short.classList.add("short");
const p = createElement("p");
p.textContent = "Hi! Thanks for checking out my site. I'm a software engineer that previously worked in cybersecurity. I enjoy solving problems and working in tight-knit teams. Here are some of my best projects.";
short.append(p);

const long = createElement("article", "about-me");
long.classList.add("long");
const p1 = createElement("p");
p1.textContent = "I'm passionate about solving problems, learning new things, and systems analysis & design. I With more than a decade of experience in the technology sector, I've worked as a software engineer, cybersecurity consultant, cybersecurity engineer, & network intrusion detection analyst. I'm also a military veteran and was a nerd long before it became cool to be into Star Wars, super-heroes, & games. Nowadays, being a dad doesn't leave time for such things, though."

long.append(p1);

const contactMe = createElement("section", "contact-info");
const a1 = createElement("a");
a1.href = "https://github.com/CCBaxter84";
a1.textContent = "GitHub";
const a2 = createElement("a");
a2.href = "https://www.linkedin.com/in/christopherclark54/";
a2.textContent = "LinkedIn";
const a3 = createElement("a");
a3.href = "mailto:troyceclark@gmail.com";
a3.textContent = "Email";
contactMe.append(a1, a2, a3);

const toggleButtons = createElement("section", "buttons");

let lastClicked = localStorage.getItem("about-me");

const longBtn = createElement("button", "selected");
longBtn.textContent = "Long";

const shortBtn = createElement("button");
shortBtn.textContent = "Short";

toggleButtons.append(shortBtn, longBtn);
let shortOrLong = lastClicked === "short" ? short : long;

const aboutMe = getElement(".about-me");
aboutMe.append(contactMe, toggleButtons, shortOrLong);

longBtn.addEventListener("click", function() {
  localStorage.setItem("about-me", "long");
  lastClicked = localStorage.getItem("about-me");
  short.remove();
  longBtn.classList.add("selected");
  shortBtn.classList.remove("selected");
  aboutMe.append(long);
});
shortBtn.addEventListener("click", function() {
  localStorage.setItem("about-me", "short");
  lastClicked = localStorage.getItem("about-me");
  long.remove();
  shortBtn.classList.add("selected");
  longBtn.classList.remove("selected");
  aboutMe.append(short);
});