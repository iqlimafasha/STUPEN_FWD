class Pelanggan {
    constructor(nama, nomorTelepon, kendaraanDisewa) {
        this.nama = nama;
        this.nomorTelepon = nomorTelepon;
        this.kendaraanDisewa = kendaraanDisewa;
    }
}

class Kendaraan {
    constructor(nama, tahun, gambar) {
        this.nama = nama;
        this.tahun = tahun;
        this.gambar = gambar;
    }

    getInfo() {
        return `${this.nama} (${this.tahun})`;
    }
}

const pelangganList = [
    new Pelanggan("Andi", "08123456789", new Kendaraan("Toyota Avanza", 2022, "https://images.summitmedia-digital.com/topgear/images/2019/05/14/2019-toyota-avanza-main-temp-1557805092.jpg")),
    new Pelanggan("Budi", "08987654321", new Kendaraan("Honda Vario", 2021, "https://automobile-assets.s3.amazonaws.com/automobile/body/toyota-avanza-2019-2021-1602067935.0349233.jpg"))
];

function tampilkanPelanggan() {
    const tbody = document.querySelector("#tabelPelanggan tbody");
    tbody.innerHTML = ""; // Hapus isi sebelumnya

    pelangganList.forEach((pelanggan) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td><img src="${pelanggan.kendaraanDisewa.gambar}" alt="${pelanggan.kendaraanDisewa.getInfo()}"></td>
            <td>${pelanggan.nama}</td>
            <td>${pelanggan.nomorTelepon}</td>
            <td>${pelanggan.kendaraanDisewa.getInfo()}</td>
        `;

        tbody.appendChild(row);
    });
}
