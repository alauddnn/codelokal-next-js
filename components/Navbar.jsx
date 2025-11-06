"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <>
      <nav className="kt-nav">
        <div className="kt-pill">
          <div className="kt-logo">
            <span>CodeLokal</span>
          </div>
          <button className="kt-menu-btn" onClick={() => setMenuOpen(true)}>
            <div className="kt-bar"></div>
            <div className="kt-bar"></div>
            <div className="kt-bar"></div>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="kt-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button className="kt-close-btn" onClick={() => setMenuOpen(false)}>
              ✕
            </button>

            <ul className="kt-menu-list">
              {["Home", "Services", "Portfolio", "Contact"].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <a href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
                    {item.toUpperCase()}
                  </a>
                </motion.li>
              ))}
            </ul>

            <div className="kt-footer-links">
  <a href="#">Instagram</a>
  <a href="#">Facebook</a>
  <a href="#">LinkedIn</a>
  <a href="#">X.com</a>
</div>

{/* Tambahkan credit bawah */}
<div className="kt-footer-extra">
  <p>© 2025 CodeLokal</p>
  <p>Design by CodeLokal Studio</p>
</div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
