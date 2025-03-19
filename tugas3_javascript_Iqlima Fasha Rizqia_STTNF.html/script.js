let produkToko = [
    { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },
    { id: 2, nama: "Mouse", harga: 200000, stok: 10 },
    { id: 3, nama: "Keyboard", harga: 350000, stok: 7 }
];

function tampilkanProduk() {
    let tableBody = document.getElementById("produkTable");
    tableBody.innerHTML = "";
    produkToko.forEach(p => {
        let row = `<tr>
            <td>${p.id}</td>
            <td>${p.nama}</td>
            <td>Rp${p.harga.toLocaleString()}</td>
            <td>${p.stok}</td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

function tambahProduk() {
    let nama = document.getElementById("namaProduk").value;
    let harga = parseInt(document.getElementById("hargaProduk").value);
    let stok = parseInt(document.getElementById("stokProduk").value);
    let idBaru = produkToko.length > 0 ? produkToko[produkToko.length - 1].id + 1 : 1;
    
    if (nama && harga && stok) {
        produkToko.push({ id: idBaru, nama, harga, stok });
        tampilkanProduk();
        alert(`Produk ${nama} berhasil ditambahkan!`);
    } else {
        alert("Harap isi semua data produk!");
    }
}

function hapusProduk() {
    let id = parseInt(document.getElementById("hapusId").value);
    let index = produkToko.findIndex(produk => produk.id === id);
    if (index !== -1) {
        produkToko.splice(index, 1);
        tampilkanProduk();
        alert("Produk berhasil dihapus!");
    } else {
        alert("Produk tidak ditemukan!");
    }
}
