export default function ProductList() {
  return (
    <>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Best Seller</h1>
            <p className="lead text-body-secondary">
              Temukan koleksi buku terlaris pilihan pembaca—dengan cerita memikat dan kualitas yang tak diragukan, karya para penulis terbaik.
            </p>
            <p>
              <a href="#" className="btn btn-primary my-2 m-2">Views</a>
              <a href="#" className="btn btn-secondary my-2">Other Book</a>
            </p>
          </div>
        </div>
      </section>

      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {[
              {
                title: "Filosofi Teras",
                description: "Panduan membentuk kebiasaan baik yang terbukti berhasil.",
                img: "https://klasika.kompas.id/wp-content/uploads/2022/09/Filosofi-Teras.jpg"
              },
              {
                title: "The Psychology of Money",
                description: "Pelajaran penting tentang keuangan dan perilaku manusia.",
                img: "https://uniathenaprods3.uniathena.com/s3fs-public/2024-03/ThePsychologyofMoney_0.jpg"
              },
              {
                title: "Deep Work",
                description: "Strategi untuk fokus dan produktivitas tinggi di era digital.",
                img: "https://i0.wp.com/itsmoreofacomment.com/wp-content/uploads/2021/01/CalNewportDeepWork.jpg?fit=2000%2C1200&ssl=1"
              },
              {
                title: "Sapiens",
                description: "Sejarah singkat umat manusia dari masa purba hingga kini.",
                img: "https://cdn-web.ruangguru.com/landing-pages/assets/hs/Dunia%20Kata%20-%20Resensi%20Buku%20Sapiens%20di%20Ujung%20Tanduk%20Karya%20Iqbal%20Aji%20Daryono-03.jpg"
              },
              {
                title: "Seni Bersikap Bodoamat",
                description: "Seni bersikap bodo amat yang elegan dan logis.",
                img: "https://blog-static.mamikos.com/wp-content/uploads/2022/01/1.-Sebuah-Seni-Untuk-Bersikap-Bodo-Amat.jpg"
              },
              {
                title: "Ikigai",
                description: "Rahasia panjang umur dan hidup bahagia dari Jepang.",
                img: "https://asset.kompas.com/crops/lgxPG1Y2Cw3uqGYKwTsDBBVu73g=/0x0:0x0/780x390/data/photo/buku/619740672a9a6.png"
              },
              {
                title: "Start With Why",
                description: "Cara menginspirasi orang lain lewat alasan yang kuat.",
                img: "https://bookiestalk.com/wp-content/uploads/2022/07/Start-With-Why-Summary.jpg"
              },
              {
                title: "Bicara Itu Ada Seninya",
                description: "Membuka rahasia seni berbicara yang baik",
                img: "https://asset.kompas.com/crops/RpYAWWL9SWokxcm0gLzIhETt-SA=/0x0:0x0/750x500/data/photo/buku/62a1aa4725925.jpg"
              },
              {
                title: "Thinking, Fast and Slow",
                description: "Membedah cara kerja dua sistem berpikir manusia.",
                img: "https://www.americkecentrum.cz/wp-content/uploads/2024/10/Thinking-fast-and-slow.jpg"
              }
            ].map((book, i) => (
              <div className="col" key={i}>
                <div className="card shadow-sm h-100">
                  <img
                    src={book.img}
                    alt={book.title}
                    className="card-img-top"
                    style={{ height: "225px", objectFit: "cover" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <p className="card-text">{book.description}</p>
                    <div className="d-flex justify-content-between align-items-center mt-auto">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
