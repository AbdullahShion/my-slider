const image = [
    'image/img1.jpg',
    'image/img2.jpg',
    'image/img3.jpg',
    'image/img4.jpg',
    'image/img5.jpg',
    'image/img6.jpg',
    'image/img7.jpg'
];
let imgIndex = 0;
const imgElement = document.getElementById('slider-img');

setInterval(() => {
    if (imgIndex >= image.length) {
        imgIndex = 0;
    }
    const imgUrl = image[imgIndex];
    imgElement.setAttribute('src', imgUrl);
    

    imgIndex++;
}, 3000)