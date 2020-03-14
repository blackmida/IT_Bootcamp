// MOJ NACIN
/*
function generateImage(src){
    document.body.innerHTML += `<img src='img/${src}'>`;
    // let img = document.createElement('img');
    // img.setAttribute('img',`src='img/${src}`);
    // document.body.appendChild(img);
    // return img;
};

export {generateImage};
*/


let generateImage = src => {
    let img = document.createElement('img');
    img.setAttribute('src', src);
    img.setAttribute('alt', 'Image failed loading');
    return img;
};

// export {generateImage};
export default generateImage;