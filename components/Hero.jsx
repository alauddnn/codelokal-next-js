"use client";
export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content" data-aos="fade-up" data-aos-duration="1000">
        <div>
          <h1>Wujudkan Website <span className="gradient-text">Impian</span> Anda</h1>
          <p>Solusi digital terpercaya untuk mengembangkan bisnis Anda dengan teknologi modern dan desain yang memukau.</p>
          <div className="button-group" data-aos="fade-up" data-aos-delay="200">
            <a href="https://wa.me/6281249096736?text=Halo%20CodeLokal!%20Saya%20tertarik%20dengan%20jasa%20pembuatan%20website%20Anda."
               className="cta-secondary" target="_blank" rel="noreferrer">Konsultasi Gratis</a>
            <a href="#portfolio" className="btn-secondary">Lihat Portfolio</a>
          </div>
        </div>       
      </div>
    </section>
  );
}
