import { Target } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      title: "Restaurant Website",
      desc: "Landing & menu site with online ordering and booking",
      tags: ["Food & Beverage", "E-commerce", "Reservation"],
      link: "https://lp-green-fork.ridho.site/",
      img: "/assets/1.png"
    },
    {
      title: "Company Profile",
      desc: "Elegant company profile website for corporate and startups",
      tags: ["Corporate", "Branding", "Landing Page"],
      link: "https://lp-agency.ridho.site/",
      img: "/assets/2.png"
    },
    {
      title: "Travel Website",
      desc: "A stylish website for a travel agency, showcasing destinations, tour packages, and an easy-to-use booking system for travelers.",
      tags: ["Shop", "Travel", "Payment Gateway"],
      link: "https://alauddin25-source.github.io/alauddin25-source/#top",
      img: "/assets/3.png"
    },
    {
      title: "Website E-Commerce",
      desc: "A charming landing page for a local snack brand, built with warm visuals, product highlights, and direct order options through WhatsApp",
      tags: ["Food", "Marketing", "Landing Page"],
      link: "https://alauddnn.github.io/Risol/",
      img: "/assets/4.png"
    },
    {
      title: "Website Portofolio",
      desc: "An elegant personal portfolio website with smooth animations and a clean layout to highlight creativity, projects, and professional experience.",
      tags: ["Portofolio", "Landing Page", "Animation"],
      link: "https://www.alauddnn.my.id/",
      img: "/assets/5.png"
    },
    {
      title: "Billing System Dashboard",
      desc: "An interactive dashboard website for managing PlayStation rentals in real-time, complete with reports, settings, and an automated payment system.",
      tags: ["Dashboard", "Analytics", "System"],
      link: "#",
      img: "/assets/6.png"
    }
  ];

  return (
    <section id="portfolio" className="portfolio-section">
      <h2>Portfolio Kami</h2>
      <p>Karya terbaik yang telah kami hasilkan</p>

      <div className="portfolio-grid">
        {projects.map((item, i) => (
          <div className="portfolio-card" key={i}>
            <img src={item.img} alt={item.title} className="portfolio-img" />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>

            <div className="portfolio-tags">
              {item.tags.map((tag, idx) => (
                <span key={idx} className="tag">{tag}</span>
              ))}
            </div>

            <a href={item.link} className="portfolio-btn">
              Lihat Demo →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
