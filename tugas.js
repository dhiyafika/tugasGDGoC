const input = require('prompt-sync')({ sigint: true });

const nama = input("Siapa namamu: ");
const umur = Number(input("Berapa umurmu: "));

if (umur < 21 ) {
    console.log(`Maaf ${nama}, umur kamu kurang ${21 - umur} tahun lagi`); 
} else {
    const uang = Number(input("Berapa uangmu (contoh 200000): "))
    
    if (uang < 500000) {
    console.log(`Maaf ${nama}, uang kamu cuma ${uang / 1000} ribu, datang lagi lain kali`);
    } else {
    console.log(`Selamat datang ${nama}`);
    }
}
