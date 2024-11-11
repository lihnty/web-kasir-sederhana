    alert("🎉 Selamat datang di Sistem Kasir! 🎉");
function tambahBarang(barangList) {
    let namaBarang = prompt("Masukkan nama barang:");
    let hargaBarang = parseFloat(prompt("💰 Masukkan harga barang:"));
    let jumlahBarang = parseInt(prompt("🛒 Masukkan jumlah barang:"));
    

    barangList.push({
        nama: namaBarang,
        harga: hargaBarang,
        jumlah: jumlahBarang
    });
    alert(namaBarang + " 🎉 berhasil ditambahkan. 🎉");
}


function hitungTotal(barangList) {
    let total = 0;
    for (let i = 0; i < barangList.length; i++) {
        total += barangList[i].harga * barangList[i].jumlah;
    }
    return total;
}


function main() {
    let barangList = []; 
    let keluar = false;    

    while (!keluar) {
     
        let pilihan = prompt("Menu Pilihan:\n1. Tambahkan barang\n2. Hitung total\n3. Keluar\n\nPilih menu (1/2/3):");

        if (pilihan === '1') {
          
            tambahBarang(barangList);
        } else if (pilihan === '2') {
          
            let total = hitungTotal(barangList);
            alert("📋 Total harga barang: " + total);
        } else if (pilihan === '3') {
       
            alert("🙏 Terima kasih! Program selesai.");
            keluar = true;
        } else {
          
            alert("⚠️ Pilihan tidak valid. Silakan coba lagi.");
        }
    }
}


main();