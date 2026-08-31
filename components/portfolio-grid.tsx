"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { PortfolioItem } from "@/content/site";
import { ArrowLeft, ArrowRight, CloseIcon } from "@/components/icons";

type PortfolioGridProps = {
  items: readonly PortfolioItem[];
};

const collectionFilters = [
  { label: "Semua", value: "Semua" },
  { label: "Pernikahan", value: "Wedding" },
  { label: "Pre-wedding", value: "Pre-wedding" },
  { label: "Acara", value: "Event" },
] as const;

export function PortfolioGrid({ items }: PortfolioGridProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeCollection, setActiveCollection] = useState<"Semua" | PortfolioItem["collection"]>("Semua");
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const visibleItems = activeCollection === "Semua"
    ? items
    : items.filter((item) => item.collection === activeCollection);

  const close = useCallback(() => {
    setActiveIndex(null);
    requestAnimationFrame(() => triggerRef.current?.focus());
  }, []);
  const previous = useCallback(
    () =>
      setActiveIndex((index) =>
        index === null ? null : (index - 1 + visibleItems.length) % visibleItems.length,
      ),
    [visibleItems.length],
  );
  const next = useCallback(
    () =>
      setActiveIndex((index) =>
        index === null ? null : (index + 1) % visibleItems.length,
      ),
    [visibleItems.length],
  );

  useEffect(() => {
    if (activeIndex === null) return;

    document.body.style.overflow = "hidden";
    const inertElements = document.querySelectorAll<HTMLElement>("header, main, footer");
    inertElements.forEach((element) => {
      element.inert = true;
    });
    requestAnimationFrame(() => closeButtonRef.current?.focus());
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") previous();
      if (event.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      inertElements.forEach((element) => {
        element.inert = false;
      });
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, close, next, previous]);

  return (
    <>
      <div className="portfolio-toolbar" role="group" aria-label="Filter koleksi karya">
        {collectionFilters.map((filter) => (
          <button
            key={filter.value}
            type="button"
            className={activeCollection === filter.value ? "portfolio-filter portfolio-filter--active" : "portfolio-filter"}
            aria-pressed={activeCollection === filter.value}
            onClick={() => {
              setActiveCollection(filter.value);
              setActiveIndex(null);
            }}
          >
            {filter.label}
            <span>{filter.value === "Semua" ? items.length : items.filter((item) => item.collection === filter.value).length}</span>
          </button>
        ))}
      </div>
      <div className="portfolio-grid">
        {visibleItems.map((item, index) => (
          <button
            className={`portfolio-card portfolio-card--${item.orientation}`}
            type="button"
            key={item.id}
            onClick={(event) => {
              triggerRef.current = event.currentTarget;
              setActiveIndex(index);
            }}
          >
            <Image
              src={item.src}
              alt=""
              fill
              sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 40vw"
              style={{ objectPosition: item.position }}
            />
            <span className="sr-only">Buka foto. {item.alt}.</span>
            <span className="portfolio-card__veil" />
            <span className="portfolio-card__meta">
              <small>{item.category}</small>
              <strong>{item.title}</strong>
            </span>
            <span className="portfolio-card__index">{String(index + 1).padStart(2, "0")}</span>
          </button>
        ))}
        {visibleItems.length === 0 && (
          <p className="portfolio-empty">Koleksi ini akan segera kami tambahkan.</p>
        )}
      </div>

      {activeIndex !== null && createPortal(
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Galeri foto">
          <button className="lightbox__backdrop" type="button" onClick={close} aria-label="Tutup galeri" />
          <div className="lightbox__content">
            <Image
              src={visibleItems[activeIndex].src}
              alt={visibleItems[activeIndex].alt}
              fill
              sizes="100vw"
            />
          </div>
          <div className="lightbox__meta">
            <span>{visibleItems[activeIndex].category}</span>
            <strong>{visibleItems[activeIndex].title}</strong>
          </div>
          <button
            ref={closeButtonRef}
            className="lightbox__close"
            type="button"
            onClick={close}
            aria-label="Tutup galeri"
          >
            <CloseIcon />
          </button>
          <button className="lightbox__arrow lightbox__arrow--left" type="button" onClick={previous} aria-label="Foto sebelumnya">
            <ArrowLeft />
          </button>
          <button className="lightbox__arrow lightbox__arrow--right" type="button" onClick={next} aria-label="Foto berikutnya">
            <ArrowRight />
          </button>
        </div>,
        document.body,
      )}
    </>
  );
}
