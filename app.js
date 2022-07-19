// Creating the HTML elements , first div hero with menu and heading
//First page before scroll
// Select the main container
const mainDiv = document.querySelector('#main-div');
// Top menu
const topMenu = document.createElement('ul'); // and add class and id
topMenu.setAttribute('id', 'top-bar');
topMenu.classList.add('top-menu');
mainDiv.appendChild(topMenu);
const menuItems = document.createElement('li');
menuItems.setAttribute('id', 'menu-items');
menuItems.classList.add('list-item');

// Try to create the menu with the for loop and array with menu text
const menuArray = [
  'Why Strapi',
  'Solutions',
  'Open-source',
  'Docs & Resources',
];
// Create the function to be able added text into li element
menuArray.forEach((menuArr) => {
  const addItems = menuItems[0] + menuArray.push[0];
  console.log(menuArr);
  console.log(addItems);
});
// Create the menu with the for loop
for (let i = 0; i < 5; i++) {
  const menuItems = document.createElement('li');
  menuItems.setAttribute('id', 'menu-items');
  menuItems.classList.add('list-item');
  topMenu.appendChild(menuItems);
  console.log(menuItems);
}

// Checking with the console if the element exist
console.log(topMenu, mainDiv);
