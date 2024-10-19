'use strict'

// console.log('keksogram')
const getRandom = function (min, max) {
  if (min < 0 || max < 0) {
    return -1;
  }

  if (min > max) {
    [min, max] = [max, min]
  }

  return Math.floor(Math.random() * (max - min + 1))  + min;
}
const maxLength = function (str, max) {
  return str.length > max;
}



const templatePic = document.querySelector('#picture');
const picContainer = document.querySelector('.pictures')

const insertImg = function (pics) {
  pics.forEach(pic => {
    const clone = templatePic.content.cloneNode(true)
    const img = clone.querySelector('img')

    img.src = pic.url

    picContainer.appendChild(img)
  })
}
fetch('https://23.javascript.htmlacademy.pro/kekstagram/data')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    insertImg(data)
  });


