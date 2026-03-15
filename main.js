:root {
  --tb-red: #6b7280;
  --tb-red-dark: #374151;
  --tb-red-soft: #f3f4f6;
  --tb-navy: #171a1f;
  --tb-navy-2: #2c3138;
  --tb-blue: #4b5563;
  --tb-blue-soft: #eef0f2;
  --tb-cyan: #9ca3af;
  --tb-text: #1f2933;
  --tb-muted: #6b7280;
  --tb-light: #f5f6f7;
  --tb-white: #ffffff;
  --tb-border: rgba(31, 41, 51, 0.10);
  --tb-shadow: 0 18px 50px rgba(17, 24, 39, 0.10);
  --tb-shadow-lg: 0 24px 64px rgba(17, 24, 39, 0.16);
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: var(--tb-text);
  background:
    radial-gradient(circle at top left, rgba(156, 163, 175, 0.12), transparent 28%),
    radial-gradient(circle at bottom right, rgba(75, 85, 99, 0.10), transparent 26%),
    #ffffff;
  line-height: 1.65;
}

a {
  transition: all 0.25s ease;
}

img {
  max-width: 100%;
}

.section-padding {
  padding: 5.2rem 0;
  position: relative;
}

.topbar {
  background: linear-gradient(90deg, var(--tb-navy), var(--tb-navy-2));
  color: rgba(255, 255, 255, 0.88);
  font-size: 0.9rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.topbar a:hover {
  color: #fff !important;
}

.navbar-brand img {
  height: 42px;
  border-radius: 0.5rem;
}

.navbar {
  background: rgba(255, 255, 255, 0.92) !important;
  backdrop-filter: blur(14px);
  box-shadow: 0 10px 30px rgba(17, 24, 39, 0.06);
  border-bottom: 1px solid rgba(12, 35, 68, 0.06);
}

.navbar .container {
  min-height: 76px;
}

.navbar-toggler {
  border: 1px solid rgba(12, 35, 68, 0.12);
  border-radius: 0.9rem;
  padding: 0.5rem 0.7rem;
}

.navbar-toggler:focus {
  box-shadow: 0 0 0 0.2rem rgba(107, 114, 128, 0.14);
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%287,22,44,0.9%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2.2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}

.nav-link {
  font-weight: 700;
  color: var(--tb-navy);
  padding: 0.7rem 1rem !important;
  border-radius: 999px;
}

.nav-link.active,
.nav-link:hover {
  color: var(--tb-red) !important;
  background: rgba(107, 114, 128, 0.10);
}

.btn {
  font-weight: 700;
  letter-spacing: 0.01em;
}

.btn-brand {
  background: linear-gradient(135deg, var(--tb-red), var(--tb-red-dark));
  border-color: var(--tb-red);
  color: #fff;
  box-shadow: 0 14px 30px rgba(55, 65, 81, 0.18);
}

.btn-brand:hover,
.btn-brand:focus {
  background: linear-gradient(135deg, var(--tb-red-dark), #262b33);
  border-color: var(--tb-red-dark);
  color: #fff;
  transform: translateY(-1px);
  box-shadow: 0 18px 35px rgba(55, 65, 81, 0.22);
}

.btn-outline-brand {
  border: 2px solid rgba(107, 114, 128, 0.28);
  color: var(--tb-red);
  background: #fff;
}

.btn-outline-brand:hover,
.btn-outline-brand:focus {
  background: var(--tb-red);
  border-color: var(--tb-red);
  color: #fff;
}

.hero {
  position: relative;
  overflow: hidden;
  background:
    linear-gradient(115deg, rgba(23, 26, 31, 0.95), rgba(44, 49, 56, 0.88)),
    url('../img/hero-globe.png') center/cover no-repeat;
  color: #fff;
  min-height: 82vh;
  display: flex;
  align-items: center;
}

.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 80% 26%, rgba(156, 163, 175, 0.20), transparent 20%),
    radial-gradient(circle at 74% 68%, rgba(75, 85, 99, 0.18), transparent 18%);
  pointer-events: none;
}

.hero::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 140px;
  background: linear-gradient(180deg, rgba(255,255,255,0), rgba(255,255,255,0.08) 55%, rgba(255,255,255,0.92));
  pointer-events: none;
}

.hero .hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.55rem 0.95rem;
  border: 1px solid rgba(255,255,255,0.18);
  border-radius: 999px;
  background: rgba(255,255,255,0.08);
  font-size: 0.9rem;
  margin-bottom: 1.25rem;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.1);
}

.hero h1 {
  font-size: clamp(2.45rem, 4vw, 4.6rem);
  line-height: 1.06;
  font-weight: 800;
  letter-spacing: -0.02em;
}

.hero p {
  font-size: 1.08rem;
  color: rgba(255,255,255,0.88);
}

.hero-card {
  background: linear-gradient(180deg, rgba(255,255,255,0.14), rgba(255,255,255,0.07));
  border: 1px solid rgba(255,255,255,0.14);
  backdrop-filter: blur(14px);
  border-radius: 1.7rem;
  padding: 1.5rem;
  box-shadow: 0 22px 50px rgba(0,0,0,0.24);
}

.hero-card .rounded-4 {
  box-shadow: 0 8px 24px rgba(7, 22, 44, 0.12);
}

.stat-card,
.info-card,
.service-card,
.product-card,
.project-card,
.office-card,
.feature-card {
  border: 1px solid var(--tb-border);
  border-radius: 1.35rem;
  box-shadow: var(--tb-shadow);
  transition: transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease;
  height: 100%;
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, #ffffff, #f4f5f6);
}

.stat-card::before,
.info-card::before,
.service-card::before,
.product-card::before,
.project-card::before,
.office-card::before,
.feature-card::before,
.contact-panel::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 5px;
  background: linear-gradient(90deg, var(--tb-red), var(--tb-cyan));
}

.stat-card:hover,
.info-card:hover,
.service-card:hover,
.product-card:hover,
.project-card:hover,
.office-card:hover,
.feature-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--tb-shadow-lg);
  border-color: rgba(75, 85, 99, 0.18);
}

.stat-card .display-6 {
  font-weight: 800;
  color: var(--tb-navy);
}

.section-title {
  max-width: 780px;
  margin-bottom: 2.35rem;
}

.section-title .eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-size: 0.82rem;
  font-weight: 800;
  color: var(--tb-red);
  margin-bottom: 0.55rem;
}

.section-title h2 {
  font-weight: 800;
  color: var(--tb-navy);
  letter-spacing: -0.02em;
  position: relative;
}

.section-title h2::after {
  content: "";
  display: block;
  width: 86px;
  height: 4px;
  margin-top: 0.9rem;
  border-radius: 999px;
  background: linear-gradient(90deg, var(--tb-red), var(--tb-cyan));
}

.section-title p,
.text-muted-2,
.text-secondary {
  color: var(--tb-muted) !important;
}

.bg-soft {
  background:
    linear-gradient(180deg, rgba(243, 244, 246, 0.96), rgba(229, 231, 235, 0.96));
}

.bg-navy {
  background:
    linear-gradient(135deg, var(--tb-navy), var(--tb-navy-2));
  color: #fff;
}

.bg-navy h2,
.bg-navy h3,
.bg-navy h4,
.bg-navy p,
.bg-navy li,
.bg-navy .eyebrow,
.bg-navy .display-6 {
  color: #fff !important;
}

.bg-navy .section-title h2::after {
  background: linear-gradient(90deg, #fff, rgba(156, 163, 175, 0.9));
}

.bg-navy .project-card,
.bg-navy .office-card,
.bg-navy .feature-card,
.bg-navy .service-card {
  background: linear-gradient(180deg, rgba(255,255,255,0.98), rgba(243,244,246,0.98));
}

.bg-navy .text-muted-2 {
  color: #69758d !important;
}

.icon-badge {
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 1rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(107, 114, 128, 0.16), rgba(156, 163, 175, 0.16));
  color: var(--tb-red);
  font-size: 1.35rem;
  box-shadow: inset 0 0 0 1px rgba(107, 114, 128, 0.10);
}

.media-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1.35rem;
}

.media-frame {
  border-radius: 1.7rem;
  overflow: hidden;
  box-shadow: 0 28px 55px rgba(15, 23, 42, 0.16);
  position: relative;
}

.media-frame::after {
  content: "";
  position: absolute;
  inset: 0;
  border: 1px solid rgba(255,255,255,0.18);
  border-radius: 1.7rem;
  pointer-events: none;
}

.service-card .icon-badge,
.feature-card .icon-badge {
  margin-bottom: 1rem;
}

.product-card img,
.project-card img,
.office-map,
.reference-map,
.about-image {
  width: 100%;
  border-top-left-radius: 1.35rem;
  border-top-right-radius: 1.35rem;
}

.product-card img {
  object-fit: contain;
  background:
    radial-gradient(circle at top left, rgba(156, 163, 175, 0.10), transparent 36%),
    linear-gradient(180deg, #f9fafb, #eef0f2);
  padding: 1.6rem;
  height: 260px;
}

.project-card img,
.office-map,
.reference-map,
.about-image {
  object-fit: cover;
}

.project-card img {
  height: 230px;
}

.office-map,
.reference-map,
.about-image {
  max-height: 520px;
}

.timeline {
  position: relative;
  padding-left: 1.6rem;
}

.timeline::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0.28rem;
  width: 3px;
  border-radius: 999px;
  background: linear-gradient(180deg, rgba(107, 114, 128, 0.45), rgba(156, 163, 175, 0.45));
}

.timeline-item {
  position: relative;
  padding: 0.15rem 0 0.15rem 1.65rem;
  margin-bottom: 1.65rem;
}

.timeline-item::before {
  content: "";
  position: absolute;
  left: -0.07rem;
  top: 0.45rem;
  width: 0.85rem;
  height: 0.85rem;
  background: linear-gradient(135deg, var(--tb-red-dark), var(--tb-cyan));
  border-radius: 999px;
  box-shadow: 0 0 0 4px rgba(107, 114, 128, 0.14);
}

.kpi-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.kpi-list li {
  display: flex;
  gap: 0.85rem;
  align-items: flex-start;
  margin-bottom: 0.95rem;
}

.kpi-list i {
  color: var(--tb-red);
  margin-top: 0.18rem;
}

.contact-panel {
  border-radius: 1.6rem;
  padding: 2rem;
  background: linear-gradient(180deg, #ffffff, #f3f4f6);
  box-shadow: var(--tb-shadow-lg);
  position: relative;
  overflow: hidden;
  border: 1px solid var(--tb-border);
}

.form-label {
  font-weight: 700;
  color: var(--tb-navy);
  margin-bottom: 0.45rem;
}

.form-control,
.form-select {
  border-radius: 1rem;
  padding: 0.95rem 1rem;
  border-color: rgba(12, 35, 68, 0.12);
  background: #fff;
}

.form-control::placeholder {
  color: #98a2b3;
}

.form-control:focus,
.form-select:focus {
  border-color: rgba(107, 114, 128, 0.35);
  box-shadow: 0 0 0 0.24rem rgba(107, 114, 128, 0.12);
}

.footer {
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #171a1f, #2c3138);
  color: rgba(255,255,255,0.8);
}

.footer::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 12% 20%, rgba(107, 114, 128, 0.18), transparent 20%),
    radial-gradient(circle at 80% 10%, rgba(156, 163, 175, 0.12), transparent 16%);
  pointer-events: none;
}

.footer .container {
  position: relative;
  z-index: 1;
}

.footer a {
  color: rgba(255,255,255,0.9);
  text-decoration: none;
}

.footer a:hover {
  color: #fff;
}

.footer hr {
  opacity: 0.18;
}

.whatsapp-float {
  position: fixed;
  right: 1.2rem;
  bottom: 1.2rem;
  z-index: 1045;
  width: 60px;
  height: 60px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: linear-gradient(135deg, #27d366, #1fb85a);
  color: #fff;
  box-shadow: 0 20px 35px rgba(0,0,0,0.18);
  font-size: 1.7rem;
  text-decoration: none;
}

.whatsapp-float:hover {
  color: #fff;
  transform: translateY(-2px) scale(1.02);
}

.badge-soft {
  background: linear-gradient(135deg, rgba(107, 114, 128, 0.14), rgba(156, 163, 175, 0.16));
  color: var(--tb-red);
  border-radius: 999px;
  font-weight: 800;
  padding: 0.55rem 0.9rem;
  border: 1px solid rgba(107, 114, 128, 0.10);
}

.cta-strip {
  background: linear-gradient(135deg, rgba(107, 114, 128, 0.10), rgba(156, 163, 175, 0.16));
  border-radius: 1.7rem;
  padding: 2rem;
  border: 1px solid rgba(12, 35, 68, 0.06);
  box-shadow: var(--tb-shadow);
}

.page-hero {
  position: relative;
  background: linear-gradient(135deg, rgba(23, 26, 31, 0.96), rgba(44, 49, 56, 0.92));
  color: #fff;
  padding: 7rem 0 4rem;
  overflow: hidden;
}

.page-hero::after {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 80% 22%, rgba(107, 114, 128, 0.22), transparent 22%),
    radial-gradient(circle at 64% 72%, rgba(156, 163, 175, 0.12), transparent 20%),
    url('../img/circuit-bg.png') center/cover no-repeat;
  opacity: 0.24;
}

.page-hero .container {
  position: relative;
  z-index: 2;
}

.small-label {
  font-size: 0.82rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-weight: 800;
}

.alert-soft {
  border: 1px solid rgba(75, 85, 99, 0.12);
  background: linear-gradient(180deg, rgba(107, 114, 128, 0.08), rgba(156, 163, 175, 0.08));
  color: var(--tb-navy);
  border-radius: 1rem;
}

.card-body h3,
.card-body h4,
.card-body h5,
.office-card h4,
.service-card h4,
.feature-card h4 {
  color: var(--tb-navy);
  font-weight: 800;
  letter-spacing: -0.015em;
}

.project-card .btn-outline-brand,
.office-card .btn-outline-brand,
.feature-card .btn-outline-brand {
  background: #fff;
}

.hero-mini-stat {
  border: 1px solid rgba(255,255,255,0.14);
  background: linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.06));
  border-radius: 1.15rem;
  padding: 1rem 1.1rem;
  backdrop-filter: blur(10px);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.08);
}

.hero-mini-stat .h3 {
  font-weight: 800;
}

.project-mini-card {
  background: linear-gradient(180deg, #ffffff, #f3f4f6);
}

.project-year {
  display: inline-flex;
  margin-bottom: 0.9rem;
  font-size: 0.82rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--tb-blue);
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  margin-top: 1rem;
}

.project-tags .badge-soft {
  padding: 0.45rem 0.72rem;
  font-size: 0.82rem;
}

.project-country-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.project-country-grid span {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.6rem 0.95rem;
  border-radius: 999px;
  background: linear-gradient(135deg, rgba(107, 114, 128, 0.10), rgba(156, 163, 175, 0.16));
  color: var(--tb-navy);
  border: 1px solid rgba(12, 35, 68, 0.08);
  font-weight: 700;
}

.project-country-grid-dark span {
  background: rgba(255,255,255,0.10);
  color: #fff;
  border-color: rgba(255,255,255,0.14);
}

@media (max-width: 991.98px) {
  .hero {
    min-height: auto;
    padding: 6.5rem 0 4rem;
  }

  .navbar .container {
    min-height: auto;
  }

  .product-card img {
    height: 230px;
  }
}

@media (max-width: 575.98px) {
  .section-padding {
    padding: 4rem 0;
  }

  .hero h1 {
    font-size: 2.25rem;
  }

  .page-hero {
    padding: 6rem 0 3.2rem;
  }

  .whatsapp-float {
    width: 54px;
    height: 54px;
    right: 1rem;
    bottom: 1rem;
  }
}

.project-page-hero {
  background:
    linear-gradient(135deg, rgba(23, 26, 31, 0.96), rgba(54, 60, 69, 0.92)),
    url('../img/projects-circuit.png') center/cover no-repeat;
}

.hero-mini-panel {
  display: grid;
  gap: 0.9rem;
}

.metric-pill {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  padding: 0.95rem 1rem;
  border-radius: 1rem;
  border: 1px solid rgba(255,255,255,0.14);
  background: linear-gradient(180deg, rgba(255,255,255,0.10), rgba(255,255,255,0.06));
  backdrop-filter: blur(10px);
}

.metric-pill strong {
  min-width: 3rem;
  font-size: 1.5rem;
  line-height: 1;
}

.metric-pill span {
  color: rgba(255,255,255,0.84);
  font-size: 0.95rem;
}

.project-lead-card {
  border-radius: 1.6rem;
  overflow: hidden;
  background: linear-gradient(180deg, #ffffff, #f2f4f6);
  border: 1px solid var(--tb-border);
  box-shadow: var(--tb-shadow);
  height: 100%;
}

.project-photo,
.project-photo-tile img {
  display: block;
  width: 100%;
  height: 280px;
  object-fit: cover;
  background: #edf1f4;
}

.project-photo-grid {
  display: grid;
  grid-template-columns: 1.45fr 1fr 1fr;
  gap: 1.25rem;
}

.project-photo-tile {
  position: relative;
  overflow: hidden;
  border-radius: 1.35rem;
  min-height: 230px;
  box-shadow: var(--tb-shadow);
  background: #fff;
  border: 1px solid var(--tb-border);
}

.project-photo-tile-lg {
  grid-row: span 2;
  min-height: 100%;
}

.project-photo-tile-lg img {
  height: 100%;
  min-height: 480px;
}

.project-photo-tile::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(10,12,16,0.02), rgba(10,12,16,0.55));
}

.project-photo-tile figcaption {
  position: absolute;
  left: 1rem;
  right: 1rem;
  bottom: 0.9rem;
  z-index: 2;
  color: #fff;
  font-weight: 700;
  letter-spacing: 0.01em;
}

.project-card-grid .col-md-6,
.project-card-grid .col-xl-4 {
  display: flex;
}

.case-study-card {
  width: 100%;
  border-radius: 1.35rem;
  border: 1px solid var(--tb-border);
  background: linear-gradient(180deg, #ffffff, #f4f5f7);
  box-shadow: var(--tb-shadow);
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
}

.case-study-card::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 5px;
  background: linear-gradient(90deg, var(--tb-red), var(--tb-cyan));
}

.case-study-card h4 {
  margin-bottom: 0.8rem;
}

@media (max-width: 991.98px) {
  .project-photo-grid {
    grid-template-columns: 1fr 1fr;
  }

  .project-photo-tile-lg {
    grid-column: span 2;
    grid-row: auto;
  }

  .project-photo-tile-lg img {
    min-height: 320px;
  }
}

@media (max-width: 767.98px) {
  .project-photo-grid {
    grid-template-columns: 1fr;
  }

  .project-photo-tile-lg,
  .project-photo-tile-lg img {
    grid-column: auto;
    min-height: 260px;
  }

  .project-photo,
  .project-photo-tile img {
    height: 240px;
  }
}
