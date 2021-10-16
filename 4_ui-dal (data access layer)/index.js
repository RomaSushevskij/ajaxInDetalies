const clickMe = document.querySelector('#click_me');
const pageNumber = document.querySelector(".pageNumber")

clickMe.addEventListener("click",() => {
    const promise = getImages(pageNumber.value);
    promise.then(onDataReceived);
});

function onDataReceived(data) {
    data.forEach((el) => {
        const img = document.createElement('img');
        img.src = el.thumbnail;
        document.querySelector('.result').append(img)
    })
}



