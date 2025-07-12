const countArray = (n) => {
    const result = n.reduce((acc, val) => {
        return acc * val;
    });
    console.log(result);
};

module.exports = countArray;
