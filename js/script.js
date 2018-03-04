function changeBackground(imageURL) {
    document.body.style.backgroundImage = "url('" + imageURL + "')";
}

let dataURL = 'https://api.nasa.gov/planetary/apod?api_key=fAOWIpcDuQh3J8O3UdpRVYUxFT2YgfkW04GpLh4k';

function getPicture() {
    fetch(dataURL)
    .then((resp) => {
        console.log(resp);
    })
    .then((data) => {
            changeBackground(data.hdurl);
        })
}
getPicture();

function getPicture() {
    fetch(dataURL)
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            changeBackground(data.hdurl);
        });
}

let urlMars = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=fAOWIpcDuQh3J8O3UdpRVYUxFT2YgfkW04GpLh4k";

function getMarsPicture() {
    fetch(urlMars)
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
           let pictureList = data.photos;
            createGallery(pictureList);
        });
}

getMarsPicture();

let gallery = document.getElementById('content');

function createGallery(dataList) {
    let randomNumber = Math.floor(Math.random() * 847);
        for(let i=randomNumber; i < randomNumber + 9; i++) {
        let img = document.createElement('img');
        let imgPath = dataList[i].img_src;
        img.src = imgPath;
        gallery.appendChild(img);
    }
}

