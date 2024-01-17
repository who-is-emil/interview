const obj = {
    getThisFunction: function () {
        console.log(this);
    },
    getThisArrowFunction: () => {
        console.log(this);
    }
};

obj.getThisFunction();
obj.getThisArrowFunction();

// Какой будет результат вызова функций getThisFunction и getThisArrowFunction и почему?


// пример на yt: https://youtu.be/aFxQvCqrUC0?feature=shared&t=972
