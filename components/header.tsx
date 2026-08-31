"use client";

import { useEffect, useState } from "react";
import { siteContent, whatsappUrl } from "@/content/site";
import { ArrowUpRight } from "@/components/icons";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`site-header ${scrolled ? "site-header--scrolled" : ""} ${
        menuOpen ? "site-header--menu-open" : ""
      }`}
    >
      <a className="brand" href="#top">
        <span>{siteContent.brand.name}</span>
        <small>{siteContent.brand.descriptor}</small>
      </a>

      <nav className="desktop-nav" aria-label="Navigasi utama">
        {siteContent.navigation.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="header-contact" href={whatsappUrl} target="_blank" rel="noreferrer">
        Konsultasi
        <ArrowUpRight />
      </a>

      <button
        className={`menu-button ${menuOpen ? "menu-button--open" : ""}`}
        type="button"
        aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
      </button>

      <div
        id="mobile-menu"
        className={`mobile-menu ${menuOpen ? "mobile-menu--open" : ""}`}
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <nav aria-label="Navigasi mobile">
          {siteContent.navigation.map((item, index) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              <span>0{index + 1}</span>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="mobile-contact" href={whatsappUrl} target="_blank" rel="noreferrer">
          Mulai konsultasi <ArrowUpRight />
        </a>
      </div>
    </header>
  );
}
