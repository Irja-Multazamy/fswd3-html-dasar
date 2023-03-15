// Conditional if, else if, dan else
let respon3 = prompt("Bagaimana kabarmu? (baik/buruk)");
if (respon3 == "baik"){
    alert("Alhamdulillah kalau begitu");
}else if (respon == "buruk"){
    alert("Semangat yakk !!!")
}else{
    alert("Jawaban tidak dikenali");
}

// Conditional :: Switch
let warna = "blue";
let namaWarna;
switch(warna){
    case "red":
        namaWarna = "Merah";
        break;
    case "blue":
        namaWarna = "Biru";
        break;
    case "green":
        namaWarna = "hijau";
        break;
    default:
        namaWarna = "Tidak diketahui";
}
console.log("Warna " + namaWarna);