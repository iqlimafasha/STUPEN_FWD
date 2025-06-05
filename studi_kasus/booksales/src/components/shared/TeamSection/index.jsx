export default function TeamSection(){
    return(
        <>
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
        </>
    );
}