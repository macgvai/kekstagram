import { dataArray } from "./data.js";
import { insertImg } from "./preview.js";

insertImg(dataArray)

const pictures  = document.querySelector('.pictures')
pictures.addEventListener('click', (...evt) => {
    // evt[].preventDefault();
    console.log(evt)
    // openBigPhpto(pic)
  });