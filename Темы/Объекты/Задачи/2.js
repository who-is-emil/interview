let cat = {
    name: 'Tom',
    isHunter: true
};

let mouse = {
    name: 'Jerry',
    isHunter: false
};

cat.isHunter = mouse.isHunter;
mouse.isHunter = undefined;
mouse = cat;

console.log(mouse.isHunter);

// Что выведется в консоль и почему?
