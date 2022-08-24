// const mainDiv = document.querySelector('#main-div');

// // Functions for the project
// function createHtml(element, className, idName) {
//   const htmlEl = document.createElement(element);
//   htmlEl.classList.add(className);
//   if (idName) {
//     htmlEl.setAttribute('id', idName);
//   }
//   return htmlEl;
// }

// // Top header with the menu
// const headerDiv = createHtml('div', 'header');
// mainDiv.appendChild(headerDiv);
// console.log(headerDiv);
// // Top menu ul list
// const topMenu = createHtml('ul', 'top-menu');
// headerDiv.appendChild(topMenu);
// // Strapi logo
// const strapiLogo = createHtml('h2', 'strapi-logo');
// strapiLogo.innerHTML = 'strapi';
// topMenu.appendChild(strapiLogo);
// // Top menu list item
// const menuItems = createHtml('li', 'list-item');
// // topMenu.appendChild(menuItems);

// // Try to create the menu with the for loop and array with menu text
// const menuArray = [
//   'Why Strapi',
//   'Solutions',
//   'Open-source',
//   'Docs & Resources',
// ];

// // Create the menu with the for loop
// for (let i = 0; i < 4; i++) {
//   const menuItems = document.createElement('li');
//   menuItems.setAttribute('id', 'menu-items');
//   menuItems.classList.add('list-item');
//   topMenu.appendChild(menuItems);
//   // Create the function to be able added text into li element
//   menuArray.forEach((menuArr) => {
//     menuItems.innerHTML = menuArray[i];
//   });
// }

// // Create the three button git hub, get started and div for them
// // First button
// const headerBtnDiv = createHtml('div', 'header-btn');
// topMenu.appendChild(headerBtnDiv);
// console.log(headerBtnDiv);
// // Git hub btn 1
// const gitHubBtn1 = createHtml('button', 'gitHubBtn');
// headerBtnDiv.appendChild(gitHubBtn1);
// gitHubBtn1.innerHTML = '<i class="fa-brands fa-github"></i>';
// // Git hub btn 2
// const gitHubBtn2 = createHtml('button', 'gitHubBtn');
// headerBtnDiv.appendChild(gitHubBtn2);
// gitHubBtn2.innerHTML = '298057';
// // Third button with the get started text
// const startedBtn = createHtml('button', 'getstarted-btn');
// topMenu.appendChild(startedBtn);
// startedBtn.innerHTML = 'Get Started';
