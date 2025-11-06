// components/Services.jsx
export default function Services() {
  return (
    <section id="services">
      <div className="section-header" data-aos="fade-up">
        <h2>Layanan Kami</h2>
        <p>Solusi digital lengkap untuk bisnis Anda</p>
      </div>
      <div className="services-grid">
        <div className="service-card" data-aos="zoom-in">
          <h3>Website Development</h3>
          <p>Website profesional yang responsif dan SEO-friendly untuk bisnis Anda</p>
        </div>
        <div className="service-card" data-aos="zoom-in" data-aos-delay="100">
          <h3>Mobile App Development</h3>
          <p>Aplikasi mobile Android & iOS yang modern dan user-friendly</p>
        </div>
        <div className="service-card" data-aos="zoom-in" data-aos-delay="200">
          <h3>UI/UX Design</h3>
          <p>Desain antarmuka yang menarik dan pengalaman pengguna yang optimal</p>
        </div>
        <div className="service-card" data-aos="zoom-in" data-aos-delay="300">
          <h3>Digital Marketing</h3>
          <p>Strategi digital marketing untuk meningkatkan jangkauan bisnis Anda</p>
        </div>
      </div>
    </section>
  );
}
