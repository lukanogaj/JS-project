// Creating the HTML elements , first div hero with menu and heading
//First page before scroll

// Select the main container an  create the main divs
const mainDiv = document.querySelector('#main-div');

// Functions for the project
function createHtml(element, className, idName) {
  const htmlEl = document.createElement(element);
  htmlEl.classList.add(className);
  if (idName) {
    htmlEl.setAttribute('id', idName);
  }
  return htmlEl;
}

// Top header with the menu
const headerDiv = createHtml('div', 'header');
mainDiv.appendChild(headerDiv);
console.log(headerDiv);
// Top menu ul list
const topMenu = createHtml('ul', 'top-menu');
headerDiv.appendChild(topMenu);
// Strapi logo
const strapiLogo = createHtml('h2', 'strapi-logo');
strapiLogo.innerHTML = 'strapi';
topMenu.appendChild(strapiLogo);
// Top menu list item
const menuItems = createHtml('li', 'list-item');
// topMenu.appendChild(menuItems);

// Try to create the menu with the for loop and array with menu text
const menuArray = [
  'Why Strapi',
  'Solutions',
  'Open-source',
  'Docs & Resources',
];

// Create the menu with the for loop
for (let i = 0; i < 4; i++) {
  const menuItems = document.createElement('li');
  menuItems.setAttribute('id', 'menu-items');
  menuItems.classList.add('list-item');
  topMenu.appendChild(menuItems);
  // Create the function to be able added text into li element
  menuArray.forEach((menuArr) => {
    menuItems.innerHTML = menuArray[i];
  });
}

// Create the three button git hub, get started and div for them
// First button
const headerBtnDiv = createHtml('div', 'header-btn');
topMenu.appendChild(headerBtnDiv);
console.log(headerBtnDiv);
// Git hub btn 1
const gitHubBtn1 = createHtml('button', 'gitHubBtn');
headerBtnDiv.appendChild(gitHubBtn1);
gitHubBtn1.innerHTML = '<i class="fa-brands fa-github"></i>';
// Git hub btn 2
const gitHubBtn2 = createHtml('button', 'gitHubBtn');
headerBtnDiv.appendChild(gitHubBtn2);
gitHubBtn2.innerHTML = '298057';
// Third button with the get started text
const startedBtn = createHtml('button', 'getstarted-btn');
topMenu.appendChild(startedBtn);
startedBtn.innerHTML = 'Get Started';

// Callin the function to create the element and add to main div
//  The div hero with the other divs
const heroDiv = createHtml('div', 'hero', '');
mainDiv.appendChild(heroDiv);

// Create the new span with
const newSpan = createHtml('div', 'new-span');
heroDiv.appendChild(newSpan);
console.log(newSpan);
// The first line with new look button ,and link learn more 3 divs
const newSpanBtn = createHtml('div', 'new-btn');
const newSpanPargh = createHtml('div', 'paragrh1');
const newSpanHrefDiv = createHtml('div', 'href1');
const newSpanHref = createHtml('a', 'hrefLink');

newSpan.appendChild(newSpanBtn);
newSpan.appendChild(newSpanPargh);
newSpan.appendChild(newSpanHrefDiv);
newSpanHrefDiv.appendChild(newSpanHref);
newSpanBtn.innerHTML = 'New';
newSpanPargh.innerHTML = 'Strapi closes $31M Series B';
newSpanHref.innerHTML = 'Learn more';

// Create H1, H2 INPUT , two divs nested in one to be able ste them flex
// Headings with the input
const head1Api = createHtml('h1', 'head1');
const head2Api = createHtml('h2', 'head2');
const input1Api = createHtml('input', 'input-api');
// div for 2 btn
const apiButtons = createHtml('div', 'api-buttons');
const btn1Api = createHtml('button', 'getstarted-btn');
const btnDemo = createHtml('button', 'btn-demo');
heroDiv.appendChild(head1Api);
head1Api.innerHTML = 'Design APIs fast, manage content easily.';
heroDiv.appendChild(head2Api);
head2Api.innerHTML =
  "Strapi is the leading open-source headless CMS.It's 100% JavaScript, fully customizable and developer-first.";
heroDiv.appendChild(input1Api);
input1Api.setAttribute(
  'placeholder',
  'npx create-strapi-app@latest my-project'
);
// BTN below main heading
heroDiv.appendChild(apiButtons);
apiButtons.appendChild(btn1Api);
btn1Api.innerHTML = 'Get Started';
apiButtons.appendChild(btnDemo);
btnDemo.innerHTML = 'Try the live demo';

//The div with 2 divs that have animation
const animationDivs = createHtml('div', 'animation-div');
heroDiv.appendChild(animationDivs);
// the two divs that will be nested inside the animation div
const animation1div = createHtml('div', 'animation-first');
const animation2div = createHtml('div', 'animation-second');
animationDivs.appendChild(animation1div);
animationDivs.appendChild(animation2div);

// Div with all the companies logos and insert all the logos into html
const companiesLogos = createHtml('div', 'logos-style');
mainDiv.appendChild(companiesLogos);
// const logo1 = createHtml('img', 'logo-img');
// companiesLogos.appendChild(logo1);
// logo1.src = './img-logos/orion.jpeg';
// console.log(logo1);

// create the for loop fo 11 logos and array with logos
const logosList = [
  './img-logos/orion-health.png',
  './img-logos/toyota-logo.png',
  './img-logos/quest-france.png',
  './img-logos/walmart.png',
  './img-logos/delivery-hero.png',
  './img-logos/nasa.png',
  './img-logos/societe-generale.png',
  './img-logos/accenture.png',
  './img-logos/aecom.png',
  './img-logos/generali.png',
  './img-logos/ibm.png',
];

for (let i = 0; i < 11; i++) {
  const logos = createHtml('img', 'logo-img');
  companiesLogos.appendChild(logos);
  console.log(logos);
  logosList.forEach(function (logoList) {
    logos.src = logosList[i];
  });
}
