let users = [
    { nama: "Aldi", umur: 22, alamat: "Jakarta", email: "aldi@email.com" },
    { nama: "Bella", umur: 21, alamat: "Bandung", email: "bella@email.com" },
    { nama: "Chandra", umur: 23, alamat: "Surabaya", email: "chandra@email.com" },
    { nama: "Dewi", umur: 20, alamat: "Yogyakarta", email: "dewi@email.com" },
    { nama: "Eka", umur: 24, alamat: "Bali", email: "eka@email.com" },
    { nama: "Faisal", umur: 25, alamat: "Makassar", email: "faisal@email.com" },
    { nama: "Gita", umur: 22, alamat: "Medan", email: "gita@email.com" },
    { nama: "Hendra", umur: 21, alamat: "Palembang", email: "hendra@email.com" },
    { nama: "Indah", umur: 23, alamat: "Semarang", email: "indah@email.com" },
    { nama: "Joko", umur: 24, alamat: "Malang", email: "joko@email.com" }
];

// Simpan data awal ke localStorage jika belum ada
if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify(users));
}
