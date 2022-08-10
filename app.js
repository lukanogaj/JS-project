// Creating the HTML elements , first div hero with menu and heading
//First page before scroll

// Select the main container an  create the main divs
const mainDiv = document.querySelector('#main-div');
// Hero div
const headerDiv = document.createElement('div');
headerDiv.classList.add('header');
mainDiv.appendChild(headerDiv);
console.log(headerDiv);
// Top menu
const topMenu = document.createElement('ul'); // and add class and id
topMenu.setAttribute('id', 'top-bar');
topMenu.classList.add('top-menu');
headerDiv.appendChild(topMenu);
const menuItems = document.createElement('li');
menuItems.setAttribute('id', 'menu-items');
menuItems.classList.add('list-item');
// Create the strapi logo
const strapiLogo = document.createElement('h2');
strapiLogo.classList.add('strapi-logo');
strapiLogo.innerHTML = 'strapi';
topMenu.appendChild(strapiLogo);

// Try to create the menu with the for loop and array with menu text
const menuArray = [
  'Why Strapi',
  'Solutions',
  'Open-source',
  'Docs & Resources',
];
// Create the function to be able added text into li element
menuArray.forEach((menuArr) => {
  menuItems.innerHTML = menuItems[0];
  console.log(menuArray);
});
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

/// Try to create the for loop for creating html elements

// Create the three button git hub, get started and div for them
// First button
const headerBtnDiv = document.createElement('div');
headerBtnDiv.classList.add('header-btn');
topMenu.appendChild(headerBtnDiv);
const gitHubBtn1 = document.createElement('button');
gitHubBtn1.classList.add('gitHubBtn');
headerBtnDiv.appendChild(gitHubBtn1);
gitHubBtn1.innerHTML = '<i class=" fa-brands fa-github"></i> star';
// add the github icon into button

//Second buttonc with numbers
const gitHubBtn2 = document.createElement('button');
gitHubBtn2.classList.add('gitHubBtn');
headerBtnDiv.appendChild(gitHubBtn2);
gitHubBtn2.innerHTML = '298057';
// Third button with the Get Started text
const startedBtn = document.createElement('button');
startedBtn.classList.add('getstarted-btn');
startedBtn.innerHTML = 'Get Started';
topMenu.appendChild(startedBtn);

// Function to create all the html elements and change all js hard coding
function createHtml(element, className, idName) {
  const el = document.createElement(element);
  el.classList.add(className);
  if (idName) {
    el.setAttribute('id', idName);
  }
  return el;
}

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

console.log();
