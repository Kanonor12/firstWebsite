const myImage = document.querySelector('img');

myImage.onclick = () => {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'mozLogo.jpeg') {
      myImage.setAttribute('src','master.png');
    } else {
      myImage.setAttribute('src','mozLogo.jpeg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

setUserName = () => {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }

  myButton.onclick = () => {
    setUserName();
  }
  


