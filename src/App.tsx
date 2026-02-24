import './App.css';

function App() {
  return (
    <>
      {/* ============================================================
          SKIP LINK — klavye kullanıcıları için (Uygulama-3)
      ============================================================ */}
      <a href="#main-content" className="skip-link">
        Ana içeriğe atla
      </a>

      {/* ============================================================
          HEADER + NAV (Uygulama-1, Uygulama-3)
      ============================================================ */}
      <header className="site-header">
        <div className="header-inner">
          <div className="logo">
            <span className="logo-bracket">&lt;</span>
            SeherAkyel
            <span className="logo-bracket">/&gt;</span>
          </div>

          {/* aria-label ile etiketli navigasyon (Uygulama-3) */}
          <nav aria-label="Ana navigasyon">
            <ul className="nav-list">
              <li><a href="#hakkimda">Hakkımda</a></li>
              <li><a href="#projeler">Projeler</a></li>
              <li><a href="#iletisim">İletişim</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* ============================================================
          MAIN — sayfada yalnızca bir tane (Uygulama-1)
      ============================================================ */}
      <main id="main-content">

        {/* ---- HERO ---- */}
        <section className="hero" aria-labelledby="hero-heading">
          <div className="hero-content">
            {/* h1 — sayfanın tek ana başlığı (Uygulama-2, Bölüm 5.1) */}
            <h1 id="hero-heading">Seher Akyel</h1>
            <p className="hero-subtitle">Frontend Geliştirici &amp; Bilgisayar Mühendisliği Öğrencisi</p>
            <div className="hero-actions">
              <a href="#projeler" className="btn btn-primary">Projelerimi Gör</a>
              <a href="#iletisim" className="btn btn-outline">İletişime Geç</a>
            </div>
          </div>
        </section>

        {/* ============================================================
            HAKKIMDA BÖLÜMÜ (Uygulama-2, Uygulama-5)
        ============================================================ */}
        <section id="hakkimda" className="section" aria-labelledby="hakkimda-baslik">
          <div className="container">
            {/* h2 — bölüm başlığı (Bölüm 5.1) */}
            <h2 id="hakkimda-baslik">Hakkımda</h2>

            <div className="about-grid">
              {/* Profil fotoğrafı: figure + figcaption + anlamlı alt metin (Uygulama-2) */}
              <figure className="profile-figure">
                <img
                  src="https://api.dicebear.com/8.x/personas/svg?seed=SeherAkyel&backgroundColor=b6e3f4"
                  alt="Seher Akyel'in karikatür tarzı profil fotoğrafı"
                  className="profile-img"
                  width="240"
                  height="240"
                />
                <figcaption>Seher Akyel — Frontend Geliştirici</figcaption>
              </figure>

              <div className="about-text">
                <p>
                  Merhaba! Ben Seher. Bilgisayar Mühendisliği bölümü öğrencisiyim.
                  Kullanıcı deneyimini ön planda tutan, erişilebilir ve ölçülebilir
                  web uygulamaları geliştirmeye odaklanıyorum. Açık kaynak projelere
                  katkı vermeyi ve yeni teknolojiler öğrenmeyi seviyorum.
                </p>

                {/* h3 — alt bölüm başlığı (Bölüm 5.1) */}
                <h3>Kullandığım Teknolojiler</h3>
                <ul className="tech-list" aria-label="Kullanılan teknolojiler listesi">
                  <li>HTML5 &amp; Semantik Web</li>
                  <li>CSS3 / Flexbox / Grid</li>
                  <li>JavaScript (ES6+)</li>
                  <li>React &amp; TypeScript</li>
                  <li>Git &amp; GitHub</li>
                  <li>Node.js / Express</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            PROJELERİM BÖLÜMÜ (Uygulama-5)
        ============================================================ */}
        <section id="projeler" className="section section--alt" aria-labelledby="projeler-baslik">
          <div className="container">
            {/* h2 — bölüm başlığı */}
            <h2 id="projeler-baslik">Projelerim</h2>

            <div className="projects-grid">

              {/* Proje 1 — article: bağımsız ve kendi başına anlamlı içerik */}
              <article className="project-card" aria-labelledby="proje1-baslik">
                <figure className="project-figure">
                  <img
                    src="https://placehold.co/600x340/1e3a5f/b6e3f4?text=E-Ticaret+Sitesi"
                    alt="Ürün listesi, sepet ve ödeme adımlarını gösteren e-ticaret uygulaması ekran görüntüsü"
                    className="project-img"
                    width="600"
                    height="340"
                    loading="lazy"
                  />
                  <figcaption>E-Ticaret Uygulaması — Ana sayfa görünümü</figcaption>
                </figure>
                <div className="project-body">
                  {/* h3 — proje başlığı, h2'nin altında (Bölüm 5.1) */}
                  <h3 id="proje1-baslik">E-Ticaret Sitesi</h3>
                  <p>
                    React ve Node.js ile geliştirilen tam işlevsel bir e-ticaret
                    uygulaması. Ürün filtreleme, sepet yönetimi ve güvenli ödeme
                    akışı içermektedir.
                  </p>
                  <h4>Kullanılan Teknolojiler</h4>
                  <ul className="tag-list" aria-label="Proje 1 teknolojileri">
                    <li>React</li>
                    <li>Node.js</li>
                    <li>MongoDB</li>
                    <li>Express.js</li>
                  </ul>
                  <a
                    href="https://github.com/sehermac"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm"
                    aria-label="E-Ticaret Sitesi projesini GitHub'da görüntüle"
                  >
                    GitHub'da Görüntüle
                  </a>
                </div>
              </article>

              {/* Proje 2 */}
              <article className="project-card" aria-labelledby="proje2-baslik">
                <figure className="project-figure">
                  <img
                    src="https://placehold.co/600x340/1a3a2e/86efac?text=Blog+Uygulamasi"
                    alt="Makale listesi ve zengin metin editörünü gösteren blog uygulaması ekran görüntüsü"
                    className="project-img"
                    width="600"
                    height="340"
                    loading="lazy"
                  />
                  <figcaption>Blog Uygulaması — Makale listesi görünümü</figcaption>
                </figure>
                <div className="project-body">
                  <h3 id="proje2-baslik">Blog Uygulaması</h3>
                  <p>
                    TypeScript ve React ile geliştirilmiş, Markdown desteği sunan
                    kişisel blog platformu. Yazar paneli, kategori yönetimi ve
                    yorum sistemi içermektedir.
                  </p>
                  <h4>Kullanılan Teknolojiler</h4>
                  <ul className="tag-list" aria-label="Proje 2 teknolojileri">
                    <li>TypeScript</li>
                    <li>React</li>
                    <li>Vite</li>
                    <li>PostgreSQL</li>
                  </ul>
                  <a
                    href="https://github.com/sehermac"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm"
                    aria-label="Blog Uygulaması projesini GitHub'da görüntüle"
                  >
                    GitHub'da Görüntüle
                  </a>
                </div>
              </article>

              {/* Proje 3 */}
              <article className="project-card" aria-labelledby="proje3-baslik">
                <figure className="project-figure">
                  <img
                    src="https://placehold.co/600x340/2d1a3a/d8b4fe?text=Gorev+Yoneticisi"
                    alt="Kanban tahtası ve görev kartlarını gösteren görev yöneticisi uygulaması ekran görüntüsü"
                    className="project-img"
                    width="600"
                    height="340"
                    loading="lazy"
                  />
                  <figcaption>Görev Yöneticisi — Kanban görünümü</figcaption>
                </figure>
                <div className="project-body">
                  <h3 id="proje3-baslik">Görev Yöneticisi</h3>
                  <p>
                    Drag-and-drop destekli Kanban tabanlı görev yöneticisi. Takımlar
                    için gerçek zamanlı colaborasyon ve raporlama özellikleri sunar.
                  </p>
                  <h4>Kullanılan Teknolojiler</h4>
                  <ul className="tag-list" aria-label="Proje 3 teknolojileri">
                    <li>React</li>
                    <li>Socket.io</li>
                    <li>Redux</li>
                    <li>Express.js</li>
                  </ul>
                  <a
                    href="https://github.com/sehermac"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm"
                    aria-label="Görev Yöneticisi projesini GitHub'da görüntüle"
                  >
                    GitHub'da Görüntüle
                  </a>
                </div>
              </article>

            </div>
          </div>
        </section>

        {/* ============================================================
            İLETİŞİM BÖLÜMÜ — Doğrulamalı Form (Uygulama-4, Uygulama-5)
        ============================================================ */}
        <section id="iletisim" className="section" aria-labelledby="iletisim-baslik">
          <div className="container">
            {/* h2 — bölüm başlığı */}
            <h2 id="iletisim-baslik">İletişim</h2>
            <p className="section-lead">
              Bir projen mi var? Benimle çalışmak ister misin? Aşağıdaki formu
              doldurarak mesaj gönderebilirsin.
            </p>

            {/*
              novalidate: tarayıcı balonlarını devre dışı bırakır,
              özel hata alanları (role="alert") aktif hale gelir.
              (Bölüm 8, Uygulama-4)
            */}
            <form
              action="#"
              method="POST"
              noValidate
              className="contact-form"
              aria-labelledby="form-legend"
            >
              <fieldset>
                <legend id="form-legend">İletişim Formu</legend>

                {/* Ad Soyad */}
                <div className="form-group">
                  {/* for/id eşleşmesi — label ilişkisi (Bölüm 7.1) */}
                  <label htmlFor="name">Ad Soyad: <span aria-hidden="true" className="required-star">*</span></label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    minLength={2}
                    maxLength={80}
                    autoComplete="name"
                    placeholder="Örnek: Ahmet Yılmaz"
                    aria-required="true"
                    aria-describedby="name-error"
                  />
                  {/* role="alert" — içerik eklendiğinde ekran okuyucu sesli okur (Bölüm 8) */}
                  <small id="name-error" className="error-msg" role="alert"></small>
                </div>

                {/* E-posta */}
                <div className="form-group">
                  <label htmlFor="email">E-posta: <span aria-hidden="true" className="required-star">*</span></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    autoComplete="email"
                    placeholder="Örnek: ad@mail.com"
                    aria-required="true"
                    aria-describedby="email-error email-help"
                  />
                  {/* aria-describedby ile ek açıklama bağlantısı (Bölüm 6.1) */}
                  <small id="email-help" className="field-hint">E-posta adresiniz yalnızca yanıt vermek için kullanılacaktır.</small>
                  <small id="email-error" className="error-msg" role="alert"></small>
                </div>

                {/* Konu — select elemanı */}
                <div className="form-group">
                  <label htmlFor="subject">Konu: <span aria-hidden="true" className="required-star">*</span></label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    aria-required="true"
                    aria-describedby="subject-error"
                  >
                    <option value="">-- Seçiniz --</option>
                    <option value="is">İş Teklifi</option>
                    <option value="soru">Soru</option>
                    <option value="oneri">Öneri</option>
                    <option value="diger">Diğer</option>
                  </select>
                  <small id="subject-error" className="error-msg" role="alert"></small>
                </div>

                {/* Mesaj — textarea */}
                <div className="form-group">
                  <label htmlFor="message">Mesajınız: <span aria-hidden="true" className="required-star">*</span></label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    minLength={10}
                    maxLength={1000}
                    placeholder="Mesajınızı buraya yazın (en az 10 karakter)..."
                    aria-required="true"
                    aria-describedby="message-error"
                  ></textarea>
                  <small id="message-error" className="error-msg" role="alert"></small>
                </div>

                <p className="form-note"><span aria-hidden="true" className="required-star">*</span> Zorunlu alan</p>

                {/* button type="submit" — esnek içerik (Bölüm 7) */}
                <button type="submit" className="btn btn-primary btn-submit">
                  Gönder
                </button>
              </fieldset>
            </form>
          </div>
        </section>

      </main>

      {/* ============================================================
          FOOTER (Uygulama-1, Uygulama-5)
      ============================================================ */}
      <footer className="site-footer">
        <div className="container footer-inner">
          <p>&copy; 2025 Seher Akyel. Tüm hakları saklıdır.</p>
          <nav aria-label="Sosyal medya bağlantıları">
            <ul className="social-list">
              <li>
                <a
                  href="https://github.com/sehermac"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profilini görüntüle"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profilini görüntüle"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </>
  );
}

export default App;
