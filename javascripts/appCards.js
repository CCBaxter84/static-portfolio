const data = [
  {
    gif: "./img/wedding-site.gif",
    title: "Wedding Site",
    desc: "JAMStack app with Server-less Functions",
    tools: ["Vue", "TypeScript", "Pinia", "Netlify", "Fauna", "Vite"],
    link: "https://clarkwedding.netlify.app/",
    gitHub: "https://github.com/CCBaxter84/wedding-site-v2"
  },
  {
    gif: "./img/star-wars-intro.gif",
    title: 'Star Wars Intro Scroll',
    desc: 'Front-end Star Wars Movie Intro replicated with only HTML and CSS',
    tools: ['HTML', 'CSS'],
    link: 'https://ccbaxter84.github.io/star-wars-intro/',
    gitHub: 'https://github.com/CCBaxter84/star-wars-intro'
  },
  {
    gif: "./img/red-october.gif",
    title: 'Hunt for Red October Game',
    desc: 'Front-end game with elements of Hangman, Minesweeper, and Battleship',
    tools: ['React', 'React Hooks', 'JavaScript', 'CSS'],
    link: 'https://ccbaxter84.github.io/red-october',
    gitHub: 'https://github.com/CCBaxter84/red-october'
  },
  {
    gif: "./img/SWJeopardy.gif",
    title: 'Star Wars Jeopardy!',
    desc: 'Front-end Two player version of Jeopardy! with Star Wars categories and a hidden Daily Double',
    tools: ['JavaScript', 'HTML', 'CSS'],
    link: 'https://ccbaxter84.github.io/Star-Wars-Jeopardy-JavaScript/',
    gitHub: 'https://github.com/CCBaxter84/Star-Wars-Jeopardy-JavaScript'
  },
  {
    gif: "./img/history-quiz.gif",
    title: 'History Quiz',
    desc: 'Front-end Multiple Choice Quiz App',
    tools: ['React', 'React Hooks', 'JavaScript', 'CSS'],
    link: 'https://ccbaxter84.github.io/US-History-Quiz-React/',
    gitHub: 'https://github.com/CCBaxter84/US-History-Quiz-React'
  },
  {
    gif: "./img/sw-lib.gif",
    title: 'Star Wars Novels Holocron',
    desc: 'Full-stack library app with Server-Side-Rendering, Security, & Authentication',
    tools: ['TypeScript', 'Express', 'Node', 'Mocha / Chai', 'Mongoose', 'MongoDB', 'Passport', 'Helmet & csurf'],
    gitHub: 'https://github.com/CCBaxter84/EU-Books'
  },
  {
    gif: "./img/weather.gif",
    title: 'Weather Almanac',
    desc: 'Full-stack app utilizes Open Weather API',
    tools: ['React', 'JavaScript', 'React Chartjs', 'Styled Components', 'Mongoose', 'MongoDB'],
    gitHub: 'https://github.com/CCBaxter84/Weather-App'
  },
  {
    gif: "./img/MW.gif",
    title: 'Mediation Works 2',
    desc: 'Full-stack Mediation Consulting Business Website for a local Small Business',
    tools: ['React', 'TypeScript', 'Express', 'Node', 'CSS', 'MongoDB'],
    gitHub: 'https://github.com/CCBaxter84/MediationWorks'
  },
  {
    gif: "./img/mern-shopping-list.gif",
    title: 'Shopping List',
    desc: "Full-stack productivity app using React's Context API for global state management",
    tools: ['React', 'React Context', 'Express', 'Node', 'Mongoose', 'Reactstrap'],
    gitHub: 'https://github.com/CCBaxter84/MERN_Shopping_List'
  },
  {
    gif: "./img/rps.gif",
    title: 'Paper Rock Scissors',
    desc: 'Front-end Single Player vs Computer Game',
    tools: ['JavaScript', 'HTML', 'CSS'],
    link: 'https://ccbaxter84.github.io/Rock-Paper-Scissors-JavaScript/',
    gitHub: 'https://github.com/CCBaxter84/Rock-Paper-Scissors-JavaScript'
  }
]

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

function createBulletedList(ul, list) {
  list.forEach(tool => {
    const li = createElement("li");
      li.textContent = tool;
      ul.append(li);
  });
}

function createAppTitleCards(data) {
  const appsContainer = getElement(".apps-container");
  data.forEach(entry => {
    const card = createAppTitleCard(entry);
    appsContainer.append(card);
  });
}

function createAppTitleCard(info) {
  // Create Title Card container
  const appTitleCardContainer = createElement("section", "title-card-container");

  // Create Title and Description article
  const titleAndDescription = createElement("article", "title-and-description");
  const title = createElement("h3");
  title.textContent = info.title;
  const em = createElement("em");
  em.textContent = info.desc;
  titleAndDescription.append(title, em);

  // Create Title Card section
  const titleCard = createElement("section", "title-card");
  // Create Title Card Inner
  const titleCardInner = createElement("section", "title-card-inner");
  // Create Title Card Front
  const titleCardFront = createElement("article", "title-card-front");
  const gif = createElement("img", "gif");
  gif.src = info.gif;
  titleCardFront.append(gif);
  // Create Title Card Back
  const titleCardBack = createElement("article", "title-card-back");
  const textBox = createElement("article", "text-box");
  const aTag = createElement("a");
  aTag.href = info.link;
  const h3 = createElement("h3");
  h3.textContent = "Open Application";
  aTag.append(h3);
  const aTag2 = createElement("a");
  aTag2.href = info.gitHub;
  const h4 = createElement("h4");
  h4.textContent = "Source Code";
  aTag2.append(h4);
  textBox.append(aTag, aTag2);
  titleCardBack.append(textBox);
  // Append title card front and back to inner
  titleCardInner.append(titleCardFront, titleCardBack);
  // Append title card inner to title card
  titleCard.append(titleCardInner);

  // Create Tools article
  const tools = createElement("article", "tools");
  // Find midpoint of tools
  const len = info.tools.length;
  const isEven = len % 2 === 0;
  const midpoint = isEven ? len / 2 : len / 2 + 1;
  const firstHalf = info.tools.slice(0, midpoint);
  // Create unordered lists
  const list = createElement("ul");
  createBulletedList(list, firstHalf);
  // Append unordered lists to tools
  tools.append(list);
  if (len > 1) {
    const secondHalf = info.tools.slice(midpoint);
    const list2 = createElement("ul");
    createBulletedList(list2, secondHalf);
    tools.append(list2);
  }
  // Append Title and Description, Title Card, and Tools to container
  appTitleCardContainer.append(titleAndDescription, titleCard, tools);

  // Return completed card
  return appTitleCardContainer;
}

createAppTitleCards(data);