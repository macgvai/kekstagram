import { getRandom } from "./util.js";

// создаём данные
let dataArray = [];
const names = ['Александр', 'Мария', 'Иван', 'Дарья', 'Максим', 'Екатерина', 'Артём', 'Анастасия', 'Дмитрий', 'Виктория'];
const comments = 'Всё отлично! В целом всё неплохо. Но не всё. Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально. Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше. Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше. Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'

//генерируем комментарии
const getRandomComments = function (comments) {
  const commentsSplit = comments.split('. ');
  const count = commentsSplit.length;
  const commArray = [];
  for (let i = 0; i <= getRandom(1, count - 1); i++) {
    commArray.push(
      {
        id: getRandom(1, 999),
        avatar: `img/avatar-${getRandom(1, 6)}.svg`,
        message: comments.split('. ')[getRandom(1, comments.split('. ').length - 1)],
        name: names[getRandom(1, names.length - 1)],
      },
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
      comments: getRandomComments(comments),
    },
  )
}



// fetch('https://23.javascript.htmlacademy.pro/kekstagram/data')
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     insertImg(data)
//   });

export {dataArray}