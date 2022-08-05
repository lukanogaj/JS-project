// Creating the HTML elements , first div hero with menu and heading
//First page before scroll
// const gitIcon = <i class='fa-brands fa-github'></i>;
// console.log(gitIcon);
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

//  The div hero
const heroDiv = document.createElement('div');
heroDiv.classList.add('hero');
mainDiv.appendChild(heroDiv);
// The small heading with the span , a link learn more
const newSpan = document.createElement('div');
newSpan.classList.add('new-span');
heroDiv.appendChild(newSpan);
// Create the new look like button div
const newSquare = document.createElement('div');
newSquare.classList.add('new-square');
newSquare.innerHTML = 'New';
newSpan.appendChild(newSquare);
console.log(heroDiv);
