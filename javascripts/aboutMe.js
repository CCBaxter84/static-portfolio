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
p1.textContent = "I started my career in the U.S. Army, working in military intelligence. Upon completing my military service, I transitioned into doing cybersecurity work because it was a natural fit for someone experienced at analyzing threats and risks. Over a five year span, I worked as a cybersecurity consultant, network intrusion detection analyst, and IT auditor.";
const p2 = createElement("p");
p2.textContent = "As I gained more exposure to scripting, development lifecycles, and data analytics, I realized how much I enjoy building things with software. After spending several months teaching myself to code in my spare time and thinking about my career trajectory, I decided to quit my job to focus primarily on learning to code. I'm currently looking for a full-time software engineering job.";
long.append(p1, p2);

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