// app/layout.jsx
import "../styles/globals.css";

export const metadata = {
  title: "CodeLokal - Jasa Pembuatan Website Profesional",
  description: "Solusi digital terpercaya untuk mengembangkan bisnis Anda"
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        {children}
      </body>
    </html>
  );
}
