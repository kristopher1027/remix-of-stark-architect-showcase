import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

const links = [
  ["About", "#about"],
  ["Projects", "#projects"],
  ["Skills", "#skills"],
  ["Journey", "#journey"],
  ["Contact", "#contact"],
];

const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <nav aria-label="Main navigation" className="nav-shell">
        <a className="brand-mark" href="#home" onClick={() => setOpen(false)} aria-label="Christopher Okoh, home">
          <span className="brand-monogram">CO</span>
          <span>CHRISTOPHER <span className="brand-surname">OKOH</span></span>
        </a>

        <div className="desktop-nav">
          {links.map(([label, href]) => (
            <a key={href} className="nav-link" href={href}>{label}</a>
          ))}
        </div>

        <div className="nav-actions">
          <ThemeToggle />
          <Button asChild className="nav-contact">
            <a href="#contact">Let’s talk <ArrowUpRight aria-hidden="true" size={15} /></a>
          </Button>
          <Button variant="ghost" size="icon" className="mobile-menu-trigger" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </nav>

      {open && (
        <div className="mobile-nav">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}<ArrowUpRight aria-hidden="true" size={16} /></a>
          ))}
          <a className="mobile-contact" href="mailto:etzkristokency2@gmail.com">Send an email</a>
        </div>
      )}
    </header>
  );
};

export default Navigation;