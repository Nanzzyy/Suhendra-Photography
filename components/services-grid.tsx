"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState, type MouseEvent } from "react";
import { createPortal } from "react-dom";
import type { Service } from "@/content/site";
import { ArrowUpRight, CloseIcon } from "@/components/icons";
import { whatsappUrl } from "@/content/site";

type ServicesGridProps = {
  services: readonly Service[];
};

type ServiceCardProps = {
  service: Service;
  onOpen: (event: MouseEvent<HTMLButtonElement>) => void;
};

function ServiceCard({ service, onOpen }: ServiceCardProps) {
  return (
    <button className="service-card" type="button" onClick={onOpen} aria-haspopup="dialog">
      <span className="service-card__image">
        <Image
          src={service.image}
          alt=""
          fill
          sizes="(max-width: 800px) 100vw, (max-width: 1100px) 58vw, 50vw"
          style={{ objectPosition: service.image.includes("reception") ? "center 48%" : "center 42%" }}
        />
        <span className="service-card__image-shade" />
      </span>
      <span className="service-card__body">
        <span className="service-card__topline">
          <span>{service.number}</span>
          <span>{service.tags.join(" / ")}</span>
        </span>
        <span className="service-card__titleline">
          <strong>{service.title}</strong>
          <ArrowUpRight />
        </span>
        <span className="service-card__description">{service.description}</span>
      </span>
    </button>
  );
}

export function ServicesGrid({ services }: ServicesGridProps) {
  const [activeServiceIndex, setActiveServiceIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const activeService = activeServiceIndex === null ? null : services[activeServiceIndex];

  const close = useCallback(() => {
    setActiveServiceIndex(null);
    requestAnimationFrame(() => triggerRef.current?.focus());
  }, []);

  useEffect(() => {
    if (activeServiceIndex === null) return;

    document.body.style.overflow = "hidden";
    const inertElements = document.querySelectorAll<HTMLElement>("header, main, footer");
    inertElements.forEach((element) => {
      element.inert = true;
    });
    requestAnimationFrame(() => closeButtonRef.current?.focus());

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      inertElements.forEach((element) => {
        element.inert = false;
      });
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeServiceIndex, close]);

  return (
    <>
      <div className="services__list">
        {services.map((service, index) => (
          <ServiceCard
            key={service.number}
            service={service}
            onOpen={(event) => {
              triggerRef.current = event.currentTarget;
              setActiveServiceIndex(index);
            }}
          />
        ))}
      </div>

      {activeService && createPortal(
        <div className="service-modal" role="dialog" aria-modal="true" aria-labelledby="service-dialog-title">
          <button className="service-modal__backdrop" type="button" onClick={close} aria-label="Tutup pricelist" />
          <div className="service-modal__panel">
            <div className="service-modal__topline">
              <div>
                <span className="service-modal__kicker">Pricelist</span>
                <span className="service-modal__tags">{activeService.tags.join(" / ")}</span>
              </div>
              <button
                ref={closeButtonRef}
                className="service-modal__close"
                type="button"
                onClick={close}
                aria-label="Tutup pricelist"
              >
                <CloseIcon />
              </button>
            </div>
            <div className="service-modal__body">
              <p className="service-modal__number">{activeService.number}</p>
              <h2 id="service-dialog-title">{activeService.title}</h2>
              <p className="service-modal__description">{activeService.description}</p>
              <div className="service-modal__price-heading">
                <h3>Pricelist</h3>
                <span>Penawaran berdasarkan kebutuhan</span>
              </div>
              <ul className="service-modal__price-list">
                {activeService.priceList.map((item) => (
                  <li key={item.label}>
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </li>
                ))}
              </ul>
              <p className="service-modal__note">{activeService.priceNote}</p>
              <a className="button" href={whatsappUrl} target="_blank" rel="noreferrer">
                Konsultasi <ArrowUpRight />
              </a>
            </div>
          </div>
        </div>,
        document.body,
      )}
    </>
  );
}
