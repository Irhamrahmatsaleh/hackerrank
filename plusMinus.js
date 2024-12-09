'use strict'

// Mengaktifkan input dari terminal
process.stdin.resume();
process.stdin.setEncoding('utf-8'); // Set input ke format UTF-8

let inputString = ''; // Variabel untuk menyimpan input sebagai string
let currentLine = 0;

// Event listener: Ketika ada data yang masuk
process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin; // Menambahkan data ke inputString
});

// Event listener: Ketika input selesai
process.stdin.on('end', function () {
  inputString = inputString.split('\n'); // Memecah input ke dalam array berdasarkan baris
  main(); // Memanggil fungsi main setelah input selesai
})

// Fungsi untuk membaca satu baris input
function readLine() {
  return inputString[currentLine++];
}

/**
 * Fungsi untuk menghitung rasio angka positif, negatif, dan nol.
 * @param {number[]} arr - Array berisi angka-angka (input)
 */
function plusMinus(arr) {
  // Variable untuk menyimpan jumlah kategori angka
  let pos_count = 0; // Jumlah angka positif
  let neg_count = 0; // Jumlah anka negatif
  let zero_count = 0; // Jumlah nol

  // Loop untuk memeriksa setiap elemen dalam array
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      pos_count++;
    } else if (arr[i] < 0) {
      neg_count++;
    } else {
      zero_count++;
    }
  }

  // Hitung rasio masing-masing kategori
  let pos = (pos_count / arr.length).toFixed(6); // Rasio positif
  let neg = (neg_count / arr.length).toFixed(6); // Rasio negatif
  let zero = (zero_count / arr.length).toFixed(6); // Rasio nol

  // Tampilkan hasil
  console.log(pos + '\n' + neg + '\n' + zero)
}

/**
 * Fungsi utama untuk menjalankan program
 */

function main() {
  const n = parseInt(readLine().trim(), 10); // Membaca jumlah elemen array (baris pertama input)
  const arr = readLine() // Membaca array angka dari bars kedua input
    .replace(/\s+$/g, '')
    .split(' ')
    .map(arrTemp => parseInt(arrTemp, 10));

  plusMinus(arr);
}







// const readline = require('readline');

// // Setup untuk membaca input di terminal
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// // Fungsi untuk menangani perhitungan
// function plusMinus(arr) {
//   let pos_count = 0;
//   let neg_count = 0;
//   let zero_count = 0;

//   // Hitung jumlah positif, negatif, dan nol
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       pos_count++;
//     } else if (arr[i] < 0) {
//       neg_count++;
//     } else {
//       zero_count++;
//     }
//   }

//   // Hitung proporsi
//   let pos = (pos_count / arr.length).toFixed(6);
//   let neg = (neg_count / arr.length).toFixed(6);
//   let zero = (zero_count / arr.length).toFixed(6);

//   // Cetak hasil
//   console.log(pos);
//   console.log(neg);
//   console.log(zero);
// }

// // Meminta input dari pengguna
// rl.question("Masukkan ukuran array (n): ", function (n) {
//   rl.question("Masukkan elemen array (pisahkan dengan spasi): ", function (elements) {
//     // Parsing input
//     const arr = elements.split(' ').map(Number);
//     plusMinus(arr);
//     rl.close();
//   });
// });
