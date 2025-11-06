// components/CTA.jsx
export default function CTA() {
  return (
    <section id="contact" className="cta-section" data-aos="fade-up">
      <div className="cta-container">
        <h2>Siap gas bareng <span className="highlight">CodeLokal</span>?</h2>
        <p>Drop brief kamu — kami kirim skema & estimasi dalam 24 jam.</p>

        <div className="cta-buttons">
          <a href="https://wa.me/6281249096736?text=Halo%20CodeLokal!%20Saya%20ingin%20konsultasi%20pembuatan%20website." target="_blank" rel="noreferrer" className="cta-primary">
            Chat via WhatsApp
          </a>
          <a href="mailto:codelokal.dev@gmail.com" className="cta-secondary">Email Kami</a>
        </div>

        <div className="cta-subtext">
          <span>Tanpa komitmen</span> · 
          <span>Estimasi gratis</span> · 
          <span>NDA siap</span> · 
          <span className="highlight">DP 25% langsung dikerjakan</span>
        </div>
      </div>
    </section>
  );
}
