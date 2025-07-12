const errorIdentification = () => {
    console.log(`
    Soal Nomor 7
    a. Jawaban A
      Error tersebut menjelaskan bahwa user tidak terdefinisi, kesalahan terdeteksi di fungsi
      getUserData, processUser, main pada file app.js.
      - Kesalahan getUserData terjadi di line 15 dan karakter 10.
      - Kesalahan processUser terjadi di line 30 dan karakter 5.
      - Kesalahan getUserData terjadi di line 50 dan karakter 2.
    b. Jawaban b
      Error terjadi program tidak bisa membaca nilai length karena bernilai null, sehingga program terjadi error. 
      Kesalahan terjadi pada fungsi processData di data.js, handleRequest server.js, dan 
      main pada file app.js.
      - Kesalahan getUserData terjadi di line 8 dan karakter 15.
      - Kesalahan processData terjadi di line 20 dan karakter 5.
      - Kesalahan main terjadi di line 35 dan karakter 2.
    C. Jawaban C
      Error terjadi karena terdapat karakter di area yang tidak seharusnya dan membuat ambigu.
    D. Jawaban D
      Error terjadi karena properti status bernilai undefined. hal ini terjadi di fungsi updateOrder pada order.js,
      processOrder pada order.js, dan checkout pada cart.js
      - Kesalahan updateOrder terjadi di line 18 dan karakter 12.
      - Kesalahan processData terjadi di line 35 dan karakter 5.
      - Kesalahan main terjadi di line 50 dan karakter 2.
    E. Jawaban e
      Error terjadi karena fungsi recursive selalu memanggil dirinya secara berulang tanpa ada kondisi untuk berhenti,
      sehingga membuat program kehabisan ruang untuk mengelola fungsi ini.
      Error terjadi pada file app.js line 10 dan karakter 3
      
      `);
};

module.exports = errorIdentification;
