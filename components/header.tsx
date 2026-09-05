"use client";

import { useEffect, useState } from "react";
import { siteContent } from "@/content/site";
import { ArrowUpRight } from "@/components/icons";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const primaryNavigation = siteContent.navigation.filter((item) => item.href !== "#kontak");
  const contactNavigation = siteContent.navigation.find((item) => item.href === "#kontak");

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`site-header ${menuOpen ? "site-header--menu-open" : ""}`}
    >
      <a className="brand" href="#top">
        <span>{siteContent.brand.name}</span>
        <small>{siteContent.brand.descriptor}</small>
      </a>

      <nav className="desktop-nav" aria-label="Navigasi utama">
        {primaryNavigation.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      {contactNavigation && (
        <a className="header-contact" href={contactNavigation.href}>
          {contactNavigation.label} <ArrowUpRight />
        </a>
      )}

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
          {siteContent.navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
