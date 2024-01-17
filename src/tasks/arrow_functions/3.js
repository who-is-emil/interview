const obj = {
    title: 'Title',
    showTitle() {
        setTimeout(function () {
            console.log(this.title);
        }, 1000);
    }
};

obj.showTitle();

// что выведется в консоль?
// как сделать так, чтобы в консоль выводился Title, а не undefined?
// можно ли сделать это без стрелочной функции? да, можно


// yt: https://youtu.be/aFxQvCqrUC0?feature=shared&t=1380
