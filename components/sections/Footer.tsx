import { LINKS } from "@/lib/data";

const footerLinks = [
  { label: "Servicios",    href: "#servicios" },
  { label: "Diagnóstico",  href: "#diagnostico" },
  { label: "Metodología",  href: "#metodologia" },
  { label: "Sobre mí",     href: "#sobre-mi" },
  { label: "FAQ",          href: "#faq" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-white/10 text-white">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <p className="font-display text-xl font-semibold mb-3">
              Fernando Rico<span className="text-brand-gold">.</span>
            </p>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Consultor estratégico en innovación, transformación digital e implementación de IA para empresas en Colombia y LATAM.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs tracking-widest uppercase text-white/30 mb-4">Navegación</p>
            <ul className="space-y-2">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-white/60 hover:text-brand-gold text-sm transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs tracking-widest uppercase text-white/30 mb-4">Contacto</p>
            <ul className="space-y-3">
              <li>
                <a
                  href={LINKS.email}
                  className="text-white/60 hover:text-brand-gold text-sm transition-colors duration-200"
                >
                  fernando.rico@grupodiforma.com
                </a>
              </li>
              <li>
                <a
                  href={LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-brand-gold text-sm transition-colors duration-200"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-brand-gold text-sm transition-colors duration-200"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={LINKS.calendly}
                  className="inline-flex items-center gap-2 border border-brand-gold/40 text-brand-gold text-sm px-4 py-2 rounded-sm hover:bg-brand-gold hover:text-brand-dark transition-all duration-200 mt-2"
                >
                  Agenda tu diagnóstico →
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Fernando Rico Medina. Todos los derechos reservados.
          </p>
          <p className="text-white/20 text-xs">
            fernandoricomedina.com — Colombia & LATAM
          </p>
        </div>
      </div>
    </footer>
  );
}
