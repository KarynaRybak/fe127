let header = {
  logo : {
    url: '/home',
    text: 'logo',
  },
  nav: {
    1: {
      url: '/home',
      text: 'Home',
    },
    2: {
      url: '/about',
      text: 'About',
    },
    3: {
      url: '/portfolio',
      text: 'Portfolio',
    },
    4: {
      url: '/contacts',
      text: 'Contacts',
    }
  },
  btn: ['LogIn', 'LogOut'],
}

let headerMain = document.createElement('header');
headerMain.style.cssText = 'display: flex; justify-content: space-between; align-items: center; background-color: grey;';


let logoElement = document.createElement('a');
logoElement.href = header.logo.url;
logoElement.textContent = header.logo.text;
logoElement.style.cssText = 'text-decoration: none; margin:15px; color: white; font-size: 20px;';

headerMain.append(logoElement);

let navContainer = document.createElement('nav');
let navList = document.createElement('ul');
navList.style.cssText = 'list-style: none; padding: 0; display: flex; gap: 10px';

for (let item in header.nav) {
  let navItem = document.createElement('li');
  let navElement = document.createElement('a');
  navElement.href = header.nav[item].url;
  navElement.textContent = header.nav[item].text;
  navElement.style.textDecoration = 'none';
  navItem.append(navElement);
  navList.append(navItem);

}
navContainer.appendChild(navList);

navContainer.style.cssText = 'display: flex; gap: 10px;';
headerMain.append(navContainer);

let btnContainer = document.createElement('div');
btnContainer.style.display = 'flex';

for (let i = 0; i < 2; i++) {
  let btn = document.createElement('button');
  btn.textContent = header.btn[i];
  btn.style.cssText = 'padding: 10px; background-color: blue; color: white; cursor: pointer;';

  btnContainer.append(btn);
}
headerMain.append(btnContainer);
document.body.append(headerMain);