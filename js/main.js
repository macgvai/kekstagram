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

// создаём данные 
let dataArray = [];
const names = ['Александр', 'Мария', 'Иван', 'Дарья', 'Максим', 'Екатерина', 'Артём', 'Анастасия', 'Дмитрий', 'Виктория'];
const comments = 'Всё отлично! В целом всё неплохо. Но не всё. Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально. Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше. Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше. Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'

//генерируем коммпентарии 
const getRandomComments = function (comments) {
  const commentsSplit = comments.split('. ');
  console.log(commentsSplit);
  
  const count = commentsSplit.length;
  const commArray = [];
  for (let i = 0; i <= getRandom(1, count - 1); i++) {
    commArray.push(
      {
        id: getRandom(1, 999),
        avatar: `img/avatar-${getRandom(1, 6)}.svg`,
        message: comments.split('. ')[getRandom(1, comments.split('. ').length - 1)],
        name: names[getRandom(1, names.length - 1)],
      }
    )
  }
  return commArray;
}

for (let i = 1; i <= 25; i++) {
  dataArray.push(
    {
      id: i,
      url: `photos/${i}.jpg`,
      description: 'В целом всё неплохо. Но не всё.',
      likes: getRandom(15, 200),
      comments: getRandomComments(comments)
    }
  )
}
console.log(dataArray)



const templatePic = document.querySelector('#picture');
const picContainer = document.querySelector('.pictures')


const insertImg = function (pics) {
  pics.forEach(pic => {
    const clone = templatePic.content.cloneNode(true)
    clone.querySelector('img').src = pic.url

    picContainer.appendChild(clone)
  })
}

insertImg(dataArray)
// fetch('https://23.javascript.htmlacademy.pro/kekstagram/data')
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     insertImg(data)
//   });


