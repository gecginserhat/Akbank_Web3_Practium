function oddishOrEvenish(value) {
    let number = 0;

    while (value > 0) {
        number += value % 10;
        value = Math.floor(value / 10);
    }

    if (number % 2 === 0) {
        console.log("Evenish");
    } else {
        console.log("Oddish");
    }
}

//Test Numbers
oddishOrEvenish(45);
oddishOrEvenish(4544);
oddishOrEvenish(4433);