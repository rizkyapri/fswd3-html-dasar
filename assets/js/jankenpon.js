/* landing alert */
alert("Selamat Datang di Jankenpon!");
let konfir = confirm("Apakah anda ingin bermain?")
let nama = prompt(`Masukkan Nama Anda!`);
/* masuk ke perulangan while dimana jika user klik oke akan masuk ke permainan jika tidak akan keluar */
while (konfir == true) {
    let user = prompt("Pilih batu, gunting, atau kertas");
    alert(`Player : ${nama} \nMemilih : ${user}`);
    console.log(`Player : ${nama} \nMemilih : ${user}`);
    
    const jankenpon = ["batu", "kertas", "gunting"];
    let random = Math.random()*jankenpon.length;
    let computer = jankenpon[~~random];

    alert("Komputer memilih: " + computer);
    console.log("Komputer memilih : " + computer);

    if(user=="batu" && computer=="gunting"){
        hasil = "Anda Menang!";
    }
    else if(user=="gunting" && computer=="kertas"){
        hasil = "Anda Menang!";
    }
    else if(user=="kertas" && computer=="batu"){
        hasil = "Anda Menang!";
    }
    else if(computer=="batu" && user=="gunting"){
        hasil = "Komputer Menang!";
    }
    else if(computer=="gunting" && user=="kertas"){
        hasil = "Komputer Menang!";
    }
    else if(computer=="kertas" && user=="batu"){
        hasil = "Komputer Menang!";
    }
    else if(user=="batu" && computer=="batu"){
        hasil = "Seri!";
    }
    else if(user=="gunting" && computer=="gunting"){
        hasil = "Seri!";
    }
    else if(user=="kertas" && computer=="kertas"){
        hasil = "Seri!";
    }
    else{
        hasil = "Masukkan yang benar!";
    }

    alert("Player = " + user + "\nComputer = " + computer + "\nHasilnya " + hasil);
    console.log("Player = " + user + "\nComputer = " + computer + "\nHasilnya " + hasil);
    konfir = confirm("Ingin Main lagi?");
} 
