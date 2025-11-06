// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="footer-logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#facc15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
            <span>CodeLokal</span>
          </div>
          <p>CodeLokal membantu bisnis Anda memiliki website cepat, elegan, dan hasil nyata.</p>
        </div>

        <div className="footer-links">
          <div>
            <h4>Layanan</h4>
            <ul>
              <li><a href="#services">Landing Page</a></li>
              <li><a href="#services">Company Profile</a></li>
              <li><a href="#services">Custom Website</a></li>
            </ul>
          </div>

          <div>
            <h4>Company</h4>
            <ul>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#contact">Kontak</a></li>
            </ul>
          </div>

          <div>
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Terms</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 CodeLokal. All rights reserved.</p>
      </div>

      <a href="https://wa.me/6281249096736" className="whatsapp-float" target="_blank" rel="noreferrer">💬</a>
    </footer>
  );
}
