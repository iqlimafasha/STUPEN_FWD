import React from 'react';

function App() {
  return (
    <>
      <div className="container">
        {/* Header */}
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div className="col-md-3 mb-2 mb-md-0">
            <a href="/" className="d-inline-flex align-items-center link-body-emphasis text-decoration-none">
              <i className="fa-solid fa-book fa-2xl" style={{ color: "#74C0FC" }}></i>
              <span className="ms-2 fs-4">bookstore</span>
            </a>
          </div>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#" className="nav-link px-2">Home</a></li>
            <li><a href="#" className="nav-link px-2">Book</a></li>
            <li><a href="#team" className="nav-link px-2">Team</a></li>
            <li><a href="#contact" className="nav-link px-2">Contact</a></li>
          </ul>

          <div className="col-md-3 text-end">
            <button type="button" className="btn btn-outline-primary me-2">Login</button>
            <button type="button" className="btn btn-primary">Register</button>
          </div>
        </header>

        {/* Hero */}
        <div className="container my-5">
          <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
            <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
              <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
                Atomic Habits: Perubahan Kecil yang memberikan hasil luar biasa.
              </h1>
              <p className="lead">
                Cara mudah dan terbukti untuk membentuk kebiasaan baik dan menghilangkan kebiasaan buruk.
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Buy Now</button>
                <button type="button" className="btn btn-outline-secondary btn-lg px-4">Detail</button>
              </div>
            </div>
            <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
              <img className="rounded-lg-3" src="https://cdn.gramedia.com/uploads/items/9786020633176_.Atomic_Habit.jpg" alt="" width="400" />
            </div>
          </div>
        </div>

        {/* Product List */}
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
          img: "https://www.blibli.com/friends-backend/wp-content/uploads/2023/09/B900351-5-Kesimpulan-Buku-Filosofi-Teras-1024x538.jpg"
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


<section id="team" className="py-5 bg-light">
  <div className="container">
    <h2 className="text-center mb-4">Our Team</h2>
    <div className="row text-center">
      <div className="col-md-4">
        <img
          src="https://radarmukomuko.bacakoran.co/upload/25f5ae2a1f9405ccc11377716708f76e.jpg"
          alt="Iqlima Fasha Rizqia"
          className="rounded-circle mb-3"
          style={{ width: "150px", height: "150px", objectFit: "cover" }}
        />
        <h5>Iqlima Fasha Rizqia</h5>
        <p className="text-muted">CEO</p>
      </div>

      <div className="col-md-4">
        <img
          src="https://akcdn.detik.net.id/visual/2021/10/06/meski-masih-berusia-22-tahun-dan-terlihat-imut-imut-zhao-lusi-sudah-berperan-dalam-beberapa-drama-dan-film-lho-jika-kamu-sudah.jpeg?w=300&q=90"
          alt="Erina Nurul"
          className="rounded-circle mb-3"
          style={{ width: "150px", height: "150px", objectFit: "cover" }}
        />
        <h5>Erina Nurul</h5>
        <p className="text-muted">CTO</p>
      </div>

      <div className="col-md-4">
        <img
          src="https://awsimages.detik.net.id/community/media/visual/2024/01/15/artis-china-tercantik-6.jpeg?w=600&q=90"
          alt="Najwa Aina Nazqia"
          className="rounded-circle mb-3"
          style={{ width: "150px", height: "150px", objectFit: "cover" }}
        />
        <h5>Najwa Aina Nazqia</h5>
        <p className="text-muted">Designer</p>
      </div>
    </div>
  </div>
</section>


        {/* Contact Section */}
        <section id="contact" className="py-5">
          <div className="container">
            <h2 className="text-center mb-4">Contact Us</h2>
            <form className="mx-auto" style={{ maxWidth: 600 }}>
              <div className="mb-3">
                <label className="form-label">Your Name</label>
                <input type="text" className="form-control" placeholder="Enter your name" />
              </div>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control" placeholder="name@gmail.com" />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea className="form-control" rows="4" placeholder="Type your message..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <div className="container">
          <footer className="py-3 my-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
              <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
              <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Features</a></li>
              <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Pricing</a></li>
              <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">FAQs</a></li>
              <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">About</a></li>
            </ul>
            <p className="text-center text-body-secondary">&copy; 2025 NF Academy</p>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
