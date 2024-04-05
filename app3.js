class Action {
    num;

    constructor (num) {
        this.num = num;
    };
    isOdd () {
            if (this.num % 2 != 0) {
               console.log ("Bu son toq");
            } else if (this.num % 2 == 0) {
                console.log ("Bu son juft");
            };
    };
};

const number = new Action (5);

number.isOdd ();