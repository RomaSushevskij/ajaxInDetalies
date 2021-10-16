let a = 5;

$.ajax('https://repetitora.net/api/JS/Images', {
    success: function(data) {
        data.forEach((el) => {
            const img = document.createElement('img');
            img.src = el.thumbnail;
            $('body').append(img)
        })
    }
});

a = 8;

console.log(a);