const buatRentang = (first, last) => {
    let result = "";
    
    if (last < first) {
        throw new Error("Parameter harus bertipe data nomor dan harus nomor positif !");
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
