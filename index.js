/**
 * Task Irul
 */

const irul = require("./tasks/irul");

function tasksIrul(){
    // Program: Sum Number
    // Success
    const resultSum = irul.sumNumber(10,50);
    console.log(resultSum);

    // Failed
    try{
        const result = irul.sumNumber("10",30);
        console.log(result);
    }catch(error){
        console.log(error.message);
    }
    // Program: Multiply Number
    // Success
    const resultMultiply = irul.multiplyNumbers(10,50);
    console.log(resultMultiply);

    // Failed
    try{
        const result = irul.multiplyNumbers("10",30);
        console.log(result);
    }catch(error){
        console.log(error.message);
    }
    // Program: Convert Celcius to Fahrenheit
    // Success
    const temperatureResult = irul.celciusToFahrenheit(10);
    console.log(`the temperature ${temperatureResult.celcius}°C is ${temperatureResult.fahrenheit}°F`);

    // Failed
    try{
        const result = irul.celciusToFahrenheit("10",30);
        console.log(result);
    }catch(error){
        console.log(error.message);
    }
}
tasksIrul();

/**
 * Task Febryan
 */

// import your tasks here

const febryan = require("./tasks/febryan");

function taskFebryan() {

    /* Soal 1 - triangle */
    console.log("--------Triangle Ver. 1--------");
    try {
        febryan.task1(5);
    } catch (error) {
        console.log(error.message);
    }
    
    /* Soal 2 - count array */
    console.log("----------Count Array----------");
    febryan.task2([1, 2, 3, 4, 5]);
    
    /* Soal 3 - reverse triangle */
    console.log("--------Triangle Ver. 2--------");
    try {
        febryan.task3(5);
    } catch (error) {
        console.log(error.message);
    }
    
    /* Soal 4 - process numbers*/
    console.log("--------Process Numbers--------");
    febryan.task4([2, 4, 6, 8,]);
    
    /* Soal 5 - cetak table */
    console.log("----------Cetak Tabel----------");
    try {
        febryan.task5(3);
    } catch (error) {
        console.log(error.message);
    }
    
    /* Soal 6 - buat rentang */
    console.log("----------Cetak Rentang----------");
    try {
        febryan.task6(5,10);
    } catch (error) {
        console.log(error.message);
    }
    /* Soal 7 - identifikasi error */
    console.log("-------Identifikasi Error--------");
    febryan.task7();
}

taskFebryan();
