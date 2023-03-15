// membuat array pilihan yang tersedia
var choices = ["kertas", "gunting", "batu"];

// menambahkan event listener untuk tombol play
document.getElementById("play").addEventListener("click", function() {
	// menampilkan popup box untuk memilih pilihan
	var userChoice = prompt("Pilih antara kertas, gunting, atau batu");
	
	// validasi input dari user
	if(choices.indexOf(userChoice) == -1) {
		alert("Pilihan tidak valid!");
		return;
	}
	
	// memilih pilihan komputer secara acak
	var computerChoice = choices[Math.floor(Math.random() * choices.length)];
	
	// menampilkan pilihan yang dipilih oleh user dan komputer
	alert("Anda memilih " + userChoice + " dan komputer memilih " + computerChoice);
	
	// menentukan pemenang
	if(userChoice == computerChoice) {
		alert("Hasilnya seri!");
	} else if((userChoice == "kertas" && computerChoice == "batu") || 
			  (userChoice == "gunting" && computerChoice == "kertas") ||
			  (userChoice == "batu" && computerChoice == "gunting")) {
		alert("Anda menang!");
	} else {
		alert("Komputer menang!");
	}
});