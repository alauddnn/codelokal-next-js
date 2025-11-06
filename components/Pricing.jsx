// components/Pricing.jsx
export default function Pricing() {
  return (
    <section id="pricing">
      <div className="section-header" data-aos="fade-up">
        <h2>Paket Website CodeLokal</h2>
        <p>Investasi terbaik untuk mengembangkan bisnis Anda</p>
      </div>
      <div className="pricing-grid">
        <div className="pricing-card" data-aos="fade-up" data-aos-delay="100">
          <h3>Landing Page</h3>
          <p className="price">Rp 999K <span>one-time</span></p>
          <ul>
            <li>✅ Desain Modern & Responsif</li>
            <li>✅ Optimasi SEO On-Page</li>
            <li>✅ Form Contact & WhatsApp</li>
            <li>✅ Integrasi Google Analytics</li>
            <li>✅ SSL Security (HTTPS)</li>
            <li>✅ Free Domain .com</li>
            <li>✅ Free Hosting 1 Tahun</li>
            <li>✅ 3x Revisi</li>
          </ul>
          <a href="https://wa.me/6281249096746?text=Halo%20CodeLokal!%20Saya%20tertarik%20paket%20Landing%20Page"
             className="pricing-btn" target="_blank" rel="noreferrer">Pilih Landing Page</a>
        </div>

        <div className="pricing-card popular" data-aos="fade-up" data-aos-delay="200">
          <div className="badge">Most Popular</div>
          <h3>Company Profile</h3>
          <p className="price">Rp 1.999K <span>one-time</span></p>
          <ul>
            <li>✅ Desain Premium & Responsif</li>
            <li>✅ Full SEO Optimization</li>
            <li>✅ CMS Admin Panel</li>
            <li>✅ Blog / News System</li>
            <li>✅ Integrasi WhatsApp & Google Maps</li>
            <li>✅ SSL Security (HTTPS)</li>
            <li>✅ Free Domain .com</li>
            <li>✅ Free Hosting 1 Tahun</li>
            <li>✅ Free Email Bisnis</li>
            <li>✅ 5x Revisi</li>
          </ul>
          <a href="https://wa.me/6281249096736?text=Halo%20CodeLokal!%20Saya%20tertarik%20paket%20Company%20Profile"
             className="pricing-btn highlight" target="_blank" rel="noreferrer">Pilih Company Profile</a>
        </div>

        <div className="pricing-card" data-aos="fade-up" data-aos-delay="300">
          <h3>Custom Website</h3>
          <p className="price">Rp 2.999K <span>starts from</span></p>
          <ul>
            <li>✅ Analisis Kebutuhan Bisnis</li>
            <li>✅ Custom Design Premium</li>
            <li>✅ Database Design</li>
            <li>✅ API Integration</li>
            <li>✅ Payment Gateway</li>
            <li>✅ Advanced Security</li>
            <li>✅ Free Domain & Hosting</li>
            <li>✅ Unlimited Revisi</li>
          </ul>
          <a href="https://wa.me/6281249096736?text=Halo%20CodeLokal!%20Saya%20tertarik%20paket%20Custom%20Website"
             className="pricing-btn" target="_blank" rel="noreferrer">Konsultasi Gratis</a>
        </div>
      </div>
    </section>
  );
}
