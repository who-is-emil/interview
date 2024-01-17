const obj = {
    article: 'a',
    animals: ['cat', 'dog', 'crocodile'],

    logAnimals: function () {
        this.animals.forEach(function (animal) {
            console.log(`${this.article} ${animal}`);
        });
    },

    logAnimalsArrow: function () {
        this.animals.forEach((animal) => {
            console.log(`${this.article} ${animal}`);
        });
    }
};

obj.logAnimals();
obj.logAnimalsArrow();

// Что выведется в консоль?
// Можно ли что-то сделать с кодом logAnimals, чтобы не выводилось undefined?


// yt: https://youtu.be/aFxQvCqrUC0?feature=shared&t=1127
