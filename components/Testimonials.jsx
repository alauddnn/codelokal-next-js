// components/Testimonials.jsx
export default function Testimonials() {
  return (
    <section id="testimoni">
      <div className="section-header" data-aos="fade-up">
        <h2>Testimoni Klien Kami</h2>
        <p>Dengarkan pengalaman dari klien kami</p>
      </div>
      <div className="testimoni-grid">
        <div className="testimoni-card" data-aos="flip-left">
          <img src="https://i.pravatar.cc/100?img=3" alt="Client 1" />
          <div className="stars">★★★★★</div>
          <p>"Website yang dibuat sangat profesional dan cepat."</p>
          <h4>Budi Santoso</h4>
          <span>CEO TechCorp</span>
        </div>

        <div className="testimoni-card" data-aos="flip-left" data-aos-delay="100">
          <img src="https://i.pravatar.cc/100?img=5" alt="Client 2" />
          <div className="stars">★★★★★</div>
          <p>"Desain elegan, performa cepat, dan SEO-nya mantap!"</p>
          <h4>Sarah Wijaya</h4>
          <span>Founder Fashion Store ID</span>
        </div>
      </div>
    </section>
  );
}
