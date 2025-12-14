const input = require('prompt-sync')({ sigint: true });

const nama = input("Siapa namamu: ");
const umur = Number(input("Berapa umurmu: "));

if (umur < 21 ) {
    console.log(`Maaf ${nama}, umur kamu kurang ${21 - umur} tahun lagi`)
} else { 
    console.log(`Selamat datang ${nama}`)
}
