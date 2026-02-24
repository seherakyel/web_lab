import './App.css'

function App() {
  return (
    <div className="container">
      <header className="hero">
        <h1>Web Tasarımı ve Programlama</h1>
        <span className="badge">LAB-1</span>
      </header>

      <main className="card-grid">
        <div className="card info-card">
          <h2>👤 Geliştirici Bilgileri</h2>
          <p><strong>Ad Soyad:</strong> Seher Akyel</p>
          <p><strong>Öğrenci No:</strong> 235541063</p>
          <p><strong>Bölüm:</strong> Yazılım Mühendisliği</p>
        </div>

        <div className="card tech-card">
          <h2>🛠 Kullanılan Teknolojiler</h2>
          <ul>
            <li>⚡ Vite</li>
            <li>⚛️ React 18</li>
            <li>🔷 TypeScript</li>
            <li>🎨 CSS3</li>
          </ul>
        </div>

        <div className="card about-card">
          <h2>📚 Proje Hakkında</h2>
          <p>
            Bu proje, Web Tasarımı ve Programlama dersi LAB-1 kapsamında
            modern geliştirme araçlarını (Vite, React, TypeScript, Git) tanımak
            amacıyla oluşturulmuştur.
          </p>
        </div>

        <div className="card hobbies-card">
          <h2>🎯 Hobiler</h2>
          <ul>
            <li>🎵 Müzik dinlemek</li>
            <li>📖 Kitap okumak</li>
            <li>💻 Kod geliştirmek</li>
            <li>🎮 Oyun oynamak</li>
          </ul>
        </div>
      </main>

      <footer className="footer">
        <p>Web Tasarımı ve Programlama &mdash; LAB-1 &copy; 2026</p>
      </footer>
    </div>
  )
}

export default App
