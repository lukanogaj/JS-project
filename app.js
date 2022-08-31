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

menuArray.forEach((menuItem) => {
  const menuItems = document.createElement('li');
  menuItems.setAttribute('id', 'menu-items');
  menuItems.classList.add('list-item');
  topMenu.appendChild(menuItems);
  menuItems.innerHTML = menuItem;
});

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
];

for (let i = 0; i < logosList.length; i++) {
  const logos = createHtml('img', 'logo-img');
  companiesLogos.appendChild(logos);
  logosList.forEach(function (logoList) {
    logos.src = logosList[i];
  });
}

// Seperate div for the IBM logo
const ibmLogo = createHtml('div', 'ibm-logo');
mainDiv.appendChild(ibmLogo);
const ibmLogoImg = createHtml('img', 'ibm');
ibmLogo.appendChild(ibmLogoImg);
ibmLogoImg.src = './img-logos/ibm.png';

// Wrapper div building apps fast
const wrapperDiv = createHtml('div', 'wrapper');
mainDiv.appendChild(wrapperDiv);
console.log(wrapperDiv);
// Wrapper headings div with the headings
const wrapperHeadings = createHtml('div', 'wrapper-headings');
wrapperDiv.appendChild(wrapperHeadings);
const wrapHead1 = createHtml('h5', 'head-h5');
wrapHead1.innerHTML = 'TOP-FEATURES';
wrapperHeadings.appendChild(wrapHead1);
const wrapHead2 = createHtml('h1', 'head-h1');
wrapHead2.innerHTML = 'Build apps fast.';
wrapperHeadings.appendChild(wrapHead2);
const wrapHead3 = createHtml('h3', 'head-h3');
wrapHead3.innerHTML =
  'Building self-hosted, customizable, and performant content API <br> has never been easier';
wrapperHeadings.appendChild(wrapHead3);

// Wrapper divs with for loop headings and paragraphs
//Headings text
const wrapDivsHead = [
  'Open Source',
  'Customizable',
  'Restful or GraphQL',
  'Self-hosted',
];

const wrapDivParagraph = [
  'Forever.The entire codebase is available on GitHub and maintained by hundreds of contributors',
  'Easily customize the admin panel as well as the API.Extend your content managment with custom plugins, in seconds',
  'Consume the API from any client(React, Vue, Angular), mobile apps or even Iot devices, using REST or GraphQL',
  "Dont't give up on data privacy or lock yourself in.Keep control of your data and your costs at all time",
];

// Create div with 4 divs
const wrapperMainDiv = createHtml('div', 'wrap-main-div');
wrapperDiv.appendChild(wrapperMainDiv);

const wrapArr = [
  {
    header: 'Open Source',
    paragraph:
      'Forever.The entire codebase is available <br> on GitHub and maintained by hundreds<br> of contributors',
  },
  {
    header: 'Customizable',
    paragraph:
      'Easily customize the admin panel as well<br> as the API.Extend your content<br> managment with custom plugins, in<br> seconds',
  },
  {
    header: 'Restful or GraphQL',
    paragraph:
      'Consume the API from any client(React,<br> Vue, Angular), mobile apps or even Iot<br> devices, using REST or GraphQL',
  },
  {
    header: 'Self-hosted',
    paragraph:
      "Dont't give up on data privacy or lock<br> yourself in.Keep control of your data and<br> your costs at all time",
  },
];

wrapArr.forEach((wrapItem) => {
  const wrapperDivs = createHtml('div', 'wrapper-divs');
  wrapperMainDiv.appendChild(wrapperDivs);
  const wrapperHead = createHtml('h3', 'wrap-main-head');
  wrapperDivs.appendChild(wrapperHead);
  const wrapDivParagraph = createHtml('p', 'wrap-paragraph');
  wrapperDivs.appendChild(wrapDivParagraph);
  wrapperHead.innerHTML = wrapItem.header;
  wrapDivParagraph.innerHTML = wrapItem.paragraph;
});

// The  content with the step by step guide
// The divs for the step by step guidance
const stepDiv = createHtml('div', 'step-div');
mainDiv.appendChild(stepDiv);
// Div for step by step heading
const stepByStepHeadings = createHtml('div', 'stepby-headings');
stepDiv.appendChild(stepByStepHeadings);

// Try to creat the headings with the function

// first head
// const stepByStepHead1 = createHtml('h5', 'head-h5');
// stepByStepHead1.innerHTML = 'STEP-BY-STEP';
// stepByStepHeadings.appendChild(stepByStepHead1);
// // second head
// const stepByStepHead2 = createHtml('h1', 'head-h1');
// stepByStepHead2.innerHTML = 'How does it work';
// stepByStepHeadings.appendChild(stepByStepHead2);
// // third head
// const stepByStepHead3 = createHtml('h3', 'head-h3');
// stepByStepHead3.innerHTML =
//   'Make a flexible data structure in 2 minutes.<br> Use our powerfull features to customize your API';
// stepByStepHeadings.appendChild(stepByStepHead3);

// Step by step 2 divs
// Div for 2 step by divs
const stepByDivs = createHtml('div', 'step-div-2');
stepDiv.appendChild(stepByDivs);
// 2 divs
const stepByDiv1 = createHtml('div', 'stepdiv-1');
stepByDivs.appendChild(stepByDiv1);
const stepByDiv2 = createHtml('div', 'stepdiv-2');
stepByDivs.appendChild(stepByDiv2);

// Headings and paragraph for div2
//first head
const div2Head1 = createHtml('h5', 'head-h5');
div2Head1.innerHTML = 'Step 1';
stepByDiv2.appendChild(div2Head1);
// second head
const div2Head2 = createHtml('h3', 'wrap-main-head');
div2Head2.innerHTML =
  'Effortlessly create content<br>structures that flex to your needs';
stepByDiv2.appendChild(div2Head2);
// Paragraph
const div2Paragraph = createHtml('p', 'wrap-paragraph');
div2Paragraph.innerHTML =
  'No matter which data structure is best for<br>your buisness, you can easliy define models<br>and add realtions to create rich layout<br> expieriences.';
stepByDiv2.appendChild(div2Paragraph);
