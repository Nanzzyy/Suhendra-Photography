import Image from "next/image";
import { ArrowUpRight } from "@/components/icons";
import { Header } from "@/components/header";
import { PortfolioGrid } from "@/components/portfolio-grid";
import { Reveal } from "@/components/reveal";
import { siteContent, whatsappUrl } from "@/content/site";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Suhendra Photography",
  description:
    "Layanan dokumentasi wedding, pre-wedding, film, dan perayaan dengan pendekatan natural dan elegan.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  image: "/images/hero-wedding.jpg",
  areaServed: "Indonesia",
  serviceType: ["Photography", "Videography", "Event Documentation"],
};

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Lewati ke konten
      </a>
      <Header />
      <main id="main-content">
        <section className="hero" id="top" aria-labelledby="hero-heading">
          <div className="hero__media" aria-hidden="true">
            <Image
              src="/images/hero-wedding.jpg"
              alt=""
              fill
              preload
              sizes="(min-width: 801px) 100vw, 1px"
              quality={90}
              className="hero__image--desktop"
              style={{ objectPosition: "center 43%" }}
            />
            <Image
              src="/images/portfolio-ceremony.jpg"
              alt=""
              fill
              sizes="(max-width: 800px) 100vw, 1px"
              className="hero__image--mobile"
              loading="eager"
              style={{ objectPosition: "center 44%" }}
            />
            <span className="hero__overlay" />
          </div>
          <div className="hero__content shell">
            <p className="hero__eyebrow">{siteContent.hero.eyebrow}</p>
            <h1 id="hero-heading">
              <span>{siteContent.hero.title}</span>
              <em>{siteContent.hero.titleAccent}</em>
            </h1>
            <div className="hero__bottom">
              <p>{siteContent.hero.description}</p>
              <a className="circle-link" href="#karya" aria-label="Lihat karya pilihan">
                <span>Lihat karya</span>
                <ArrowUpRight />
              </a>
            </div>
          </div>
          <p className="hero__side-note">Est. with care · Indonesia</p>
          <a className="hero__scroll" href="#tentang">
            <span />
            Scroll to discover
          </a>
        </section>

        <section className="intro section shell" id="tentang" aria-labelledby="about-heading">
          <div className="section-label">
            <span>01</span>
            <p>{siteContent.about.eyebrow}</p>
          </div>
          <div className="intro__content">
            <Reveal>
              <h2 id="about-heading">{siteContent.about.title}</h2>
            </Reveal>
            <div className="intro__body">
              <div className="intro__image-wrap">
                <Reveal>
                  <div className="intro__image">
                    <Image
                      src="/images/portfolio-prewedding.jpg"
                      alt="Pasangan dalam sesi pre-wedding dengan suasana natural"
                      fill
                      sizes="(max-width: 720px) 85vw, 34vw"
                    />
                  </div>
                </Reveal>
              </div>
              <Reveal className="intro__copy" delay={120}>
                {siteContent.about.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <a className="text-link" href="#proses">
                  Cara kami bekerja <ArrowUpRight />
                </a>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="services section section--dark" id="layanan" aria-labelledby="services-heading">
          <div className="shell">
            <div className="services__header">
              <div className="section-label section-label--light">
                <span>02</span>
                <p>Layanan terkurasi</p>
              </div>
              <Reveal>
                <h2 id="services-heading">
                  Satu cerita, dirangkai
                  <br />
                  <em>secara utuh.</em>
                </h2>
              </Reveal>
            </div>
            <div className="services__list">
              {siteContent.services.map((service, index) => (
                <Reveal key={service.number} delay={index * 45}>
                  <article className="service-row">
                    <span className="service-row__number">{service.number}</span>
                    <div>
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                    </div>
                    <span className="service-row__detail">{service.detail}</span>
                    <ArrowUpRight className="service-row__icon" />
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="work section shell" id="karya" aria-labelledby="work-heading">
          <div className="work__header">
            <div className="section-label">
              <span>03</span>
              <p>Karya pilihan</p>
            </div>
            <Reveal>
              <h2 id="work-heading">Momen yang terasa, apa adanya.</h2>
            </Reveal>
            <p>Fragmen kecil dari cerita di Bali yang kami dokumentasikan dengan penuh perhatian.</p>
          </div>
          <PortfolioGrid items={siteContent.portfolio} />
        </section>

        <section className="quote-section" aria-label="Prinsip Suhendra Photography">
          <div className="quote-section__media" aria-hidden="true">
            <Image src="/images/portfolio-reception.jpg" alt="" fill sizes="100vw" />
            <span />
          </div>
          <Reveal className="quote-section__content shell">
            <span className="quote-mark">“</span>
            <blockquote>
              Foto terbaik bukan tentang pose yang sempurna. Ia tentang rasa yang kembali,
              bahkan setelah bertahun-tahun.
            </blockquote>
            <p>— Our point of view</p>
          </Reveal>
        </section>

        <section className="process section shell" id="proses" aria-labelledby="process-heading">
          <div className="process__header">
            <div className="section-label">
              <span>04</span>
              <p>Pengalaman yang tenang</p>
            </div>
            <Reveal>
              <h2 id="process-heading">Hadir sepenuhnya. Biarkan kami menjaga sisanya.</h2>
            </Reveal>
          </div>
          <div className="process__steps">
            {siteContent.process.map((step, index) => (
              <Reveal key={step.number} delay={index * 100}>
                <article className="process-card">
                  <span>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="contact section--dark" id="kontak" aria-labelledby="contact-heading">
          <div className="contact__image" aria-hidden="true">
            <Image src="/images/portfolio-ceremony.jpg" alt="" fill sizes="(max-width: 800px) 100vw, 50vw" />
          </div>
          <div className="contact__content">
            <div className="section-label section-label--light">
              <span>05</span>
              <p>{siteContent.contact.eyebrow}</p>
            </div>
            <Reveal>
              <h2 id="contact-heading">{siteContent.contact.title}</h2>
              <p>{siteContent.contact.description}</p>
              <a className="button button--light" href={whatsappUrl} target="_blank" rel="noreferrer">
                Bicara dengan kami <ArrowUpRight />
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="footer section--dark">
        <div className="shell footer__top">
          <a className="brand brand--footer" href="#top">
            <span>{siteContent.brand.name}</span>
            <small>{siteContent.brand.descriptor}</small>
          </a>
          <p>Mendokumentasikan perayaan di Bali dan cerita-cerita yang layak dikenang.</p>
          <div className="footer__links">
            <a href={siteContent.contact.instagramUrl} target="_blank" rel="noreferrer">
              Instagram <ArrowUpRight />
            </a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              WhatsApp <ArrowUpRight />
            </a>
          </div>
        </div>
        <div className="shell footer__bottom">
          <span>© {new Date().getFullYear()} Suhendra Photography</span>
          <span>Crafted with intention</span>
          <a href="#top">Kembali ke atas ↑</a>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
