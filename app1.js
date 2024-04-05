class Cars {
brand;
maker;
color;
price;

constructor (brand, maker, color, price) {
    this.brand = brand;
    this.maker = maker;
    this.color = color;
    this.price = price
    };
};

const car1 = new Cars ("Mercedes-Benz L911", "Germany", "silver", "546,000.00 $");
const car2 = new Cars ("BMW X6", "Germany", "black", "234,000.00 $");
const car3 = new Cars ("Porsche 918 Spyder", "USA", "green", "189,000.00 $");
const car4 = new Cars ("Ferrari 458", "Italy", "red", "366,000.00 $");

console.log (car1);
console.log (car2);
console.log (car3);
console.log (car4);