const buatRentang = (first, last) => {
    let result = "";
    if (last < first) {
        return console.log(
            "Parameter kedua harus lebih besar dari parameter pertama!"
        );
    }
    for (let i = first; i <= last; i++) {
        result += " " + i;
        if (i !== last) {
            result += ",";
        }
    }
    console.log(result);
};

module.exports = buatRentang;
