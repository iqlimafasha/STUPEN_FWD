// Ambil data dari localStorage
function getUsers() {
    return JSON.parse(localStorage.getItem("users")) || [];
}

// Simpan data ke localStorage
function saveUsers(users) {
    localStorage.setItem("users", JSON.stringify(users));
}

// Tampilkan data di tabel
function tampilkanData() {
    const userTable = document.getElementById("userTable");
    userTable.innerHTML = ""; // Reset isi tabel
    let users = getUsers();

    users.map((user, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${user.nama}</td>
            <td>${user.umur} tahun</td>
            <td>${user.alamat}</td>
            <td>${user.email}</td>
            <td><button onclick="hapusData(${index})">Hapus</button></td>
        `;
        userTable.appendChild(row);
    });
}

// Tambah data baru
function tambahData() {
    const nama = document.getElementById("nama").value;
    const umur = document.getElementById("umur").value;
    const alamat = document.getElementById("alamat").value;
    const email = document.getElementById("email").value;

    if (nama && umur && alamat && email) {
        let users = getUsers();
        users.push({ nama, umur: parseInt(umur), alamat, email });
        saveUsers(users);
        tampilkanData();
        document.getElementById("formUser").reset();
    } else {
        alert("Semua kolom harus diisi!");
    }
}

// Hapus data berdasarkan index
function hapusData(index) {
    let users = getUsers();
    users.splice(index, 1);
    saveUsers(users);
    tampilkanData();
}

// Pastikan data ditampilkan saat halaman dimuat
document.addEventListener("DOMContentLoaded", tampilkanData);
