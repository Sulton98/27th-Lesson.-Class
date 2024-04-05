class Users {
username;
#password;
age;
gender;
from;

constructor (username, password, age, gender, from) {
    this.username = username;
    this.#password = password;
    this.age = age;
    this.gender = gender;
    this.from = from
    };
};

const user1 = new Users ("Sultonboy", "S.160398Ba", 26, "male", "Khorezm");
const user2 = new Users ("Moha123", "Muha.3428", 20, "female", "Tashkent");
const user3 = new Users ("Saloh@7", "12345678", 34, "male", "Fergana");
const user4 = new Users ("Shavkatchik", "S.h1qwerty", 49, "male", "Surkhandarya");

console.log (user1);
console.log (user2);
console.log (user3);
console.log (user4);