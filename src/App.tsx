import './App.css'

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Ana İçeriğe Atla
      </a>

      <header className="header">
        <nav aria-label="Ana navigasyon" className="nav-container">
          <ul className="nav-list">
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content" className="container">
        <header className="hero">
          <h1>Seher Akyel - Kişisel Portföy</h1>
          <span className="badge">Web Geliştirici</span>
        </header>

        <section id="hakkimda" className="section-block">
          <h2>Hakkımda</h2>
          <div className="card-grid">
            <div className="card info-card">
              <figure className="profile-figure">
                <img src="/vite.svg" alt="Seher Akyel'in profil fotoğrafı" className="profile-img" />
                <figcaption className="visually-hidden">Seher Akyel</figcaption>
              </figure>
              <div className="info-content">
                <p><strong>Ad Soyad:</strong> Seher Akyel</p>
                <p><strong>Öğrenci No:</strong> 235541063</p>
                <p><strong>Bölüm:</strong> Yazılım Mühendisliği</p>
                <p>
                  Merhaba! Web Tasarımı ve Programlama dersi LAB-2 kapsamında,
                  semantik HTML5 ve erişilebilirlik (a11y) kurallarına uygun olarak
                  geliştirdiğim modern portföy siteme hoş geldiniz.
                </p>
              </div>
            </div>

            <div className="card tech-card">
              <h3>Kullandığım Teknolojiler</h3>
              <ul className="tech-list" aria-label="Teknoloji listesi">
                <li>🌐 Semantik HTML5</li>
                <li>♿ Erişilebilir CSS3</li>
                <li>⚛️ React 18</li>
                <li>🔷 TypeScript</li>
                <li>⚡ Vite</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projeler" className="section-block">
          <h2>Projelerim</h2>
          <div className="card-grid">
            <article className="card project-card">
              <h3>Web Tasarımı LAB-1</h3>
              <p>Temel ortam kurulumu ve Git iş akışını içeren web projesi başlangıcı.</p>
              <ul className="tech-list-inline" aria-label="Kullanılan teknolojiler">
                <li>React</li>
                <li>Vite</li>
                <li>TypeScript</li>
              </ul>
            </article>
            <article className="card project-card">
              <h3>Web Tasarımı LAB-2</h3>
              <p>Semantik HTML5, erişilebilirlik standartları, klavye ile gezinme ve form doğrulama özelliklerini içeren güncel portföy projesi.</p>
              <ul className="tech-list-inline" aria-label="Kullanılan teknolojiler">
                <li>Semantik HTML</li>
                <li>a11y</li>
                <li>CSS3</li>
              </ul>
            </article>
          </div>
        </section>

        <section id="iletisim" className="section-block">
          <h2>İletişim</h2>
          <div className="card form-card">
            <form action="#" method="POST" noValidate>
              <fieldset>
                <legend className="visually-hidden">İletişim Formu</legend>

                <div className="form-group">
                  <label htmlFor="name">Ad Soyad:</label>
                  <input type="text" id="name" name="name" required minLength={2} aria-describedby="name-error" placeholder="Örn: Seher Akyel" />
                  <small id="name-error" className="error-msg" role="alert"></small>
                </div>

                <div className="form-group">
                  <label htmlFor="email">E-posta:</label>
                  <input type="email" id="email" name="email" required aria-describedby="email-error" placeholder="Örn: e-posta@ornek.com" />
                  <small id="email-error" className="error-msg" role="alert"></small>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Konu:</label>
                  <select id="subject" name="subject" required aria-describedby="subject-error">
                    <option value="">-- Seçiniz --</option>
                    <option value="is">İş Teklifi</option>
                    <option value="soru">Soru</option>
                    <option value="oneri">Öneri</option>
                  </select>
                  <small id="subject-error" className="error-msg" role="alert"></small>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Mesajınız:</label>
                  <textarea id="message" name="message" rows={5} required minLength={10} aria-describedby="message-error" placeholder="Mesajınızı buraya yazınız..."></textarea>
                  <small id="message-error" className="error-msg" role="alert"></small>
                </div>

                <button type="submit" className="submit-btn" aria-label="Mesajı gönder">Gönder</button>
              </fieldset>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Web Tasarımı ve Programlama &mdash; LAB-2 &copy; 2026 Seher Akyel. Tüm hakları saklıdır.</p>
      </footer>
    </>
  )
}

export default App
