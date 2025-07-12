const triangle = (n) => {
    if (typeof n !== "number" || n < 0) {
        const alert =
      "Parameter harus bertipe data nomor dan harus nomor positif !";
        return console.log(alert);
    }

    for (let i = 1; i <= n; i++) {
        let line = "";
        for (let j = 1; j <= i; j++) {
            line += " " + j;
        }
        console.log(line);
    }
};

module.exports = triangle;
