const processNumbers = (n) => {
    let result = 1;
    let isGanjil = false;

    for (let i = 0; i < n.length; i++) {
        if (n[i] % 2 !== 0) {
            result *= n[i];
            isGanjil = true;
        }
    }
    console.log(isGanjil ? result : 1);
};

module.exports = processNumbers;
