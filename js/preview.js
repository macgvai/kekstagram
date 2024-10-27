import { openBigPhpto } from "./bigFoto.js";

const insertImg = function (pics) {
    const templatePic = document.querySelector('#picture').content.querySelector('.picture');;
    const picContainer = document.querySelector('.pictures');

    pics.forEach(pic => {
        const picturesListFragment = document.createDocumentFragment();
        const clone = templatePic.cloneNode(true)
        clone.querySelector('img').src = pic.url
        clone.querySelector('.picture__likes').textContent = pic.likes;
        clone.querySelector('.picture__comments').textContent = pic.comments.length;

        // bigPhoto
        clone.addEventListener('click', (evt) => {
            evt.preventDefault();
            openBigPhpto(pic)
          });



        picturesListFragment.appendChild(clone);

        picContainer.appendChild(picturesListFragment)
    })
}

export {insertImg}
