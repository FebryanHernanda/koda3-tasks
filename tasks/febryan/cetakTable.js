const cetakTabel = (n) => {
    let result;

    if (typeof n !== "number" || n < 0) {
        throw new Error("Parameter harus bertipe data nomor dan harus nomor positif !");
    }

    for (let i = 1; i <= 10; i++) {
        result = n * i;
        console.log(`${n} x ${i} = ${result}`);
    }
};

module.exports = cetakTabel;
