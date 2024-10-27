const getComments = function (comments) {
    
}

const openBigPhpto = function(pic) {
    const photo = document.querySelector('.big-picture')
    const photoClose = document.querySelector('.big-picture__cancel')


    photo.querySelector('img').src = pic.url;
    photo.querySelector('.social__comment-count').textContent = pic.url;
    photo.querySelector('.likes-count').textContent = pic.likes;
    photo.querySelector('img').src = pic.url;


    photo.classList.remove('hidden')
    photoClose.addEventListener('click', (e) => {
        photo.classList.add('hidden')
    })


    console.log(pic);




}
export {openBigPhpto}