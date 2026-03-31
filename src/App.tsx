import Button from './components/Button';
import Input from './components/Input';
import Card from './components/Card';
import Alert from './components/Alert';
import { useState, useEffect } from 'react';
import type { Category, Project, SortField, SortOrder } from './types/project';
import { fetchProjects } from './services/projectService';
import { applyFilters } from './utils/projectHelpers';

function categoryButtonLabel(cat: Category | 'all'): string {
  switch (cat) {
    case 'all':
      return 'Tümü';
    case 'frontend':
      return 'Frontend';
    case 'fullstack':
      return 'Full Stack';
    case 'backend':
      return 'Backend';
    default:
      return cat;
  }
}

function App() {
  const [theme, setTheme] = useState('light');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [projects, setProjects] = useState<Project[]>([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<Category | 'all'>('all');
  const [sortField, setSortField] = useState<SortField>('year');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');
  const [projectsLoading, setProjectsLoading] = useState(true);
  const [projectsError, setProjectsError] = useState<string | null>(null);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    async function load() {
      try {
        setProjectsLoading(true);
        setProjectsError(null);
        const data = await fetchProjects();
        setProjects(data);
      } catch (err) {
        console.error('Veri çekme hatası:', err);
        setProjectsError(err instanceof Error ? err.message : 'Bilinmeyen hata');
      } finally {
        setProjectsLoading(false);
      }
    }
    void load();
  }, []);

  const filtered = applyFilters(projects, search, category, sortField, sortOrder);
  const categories: (Category | 'all')[] = ['all', 'frontend', 'fullstack', 'backend'];

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000); // Hide after 5 seconds
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-sans transition-colors">
      {/* ============================================================
          SKIP LINK — klavye kullanıcıları için (Uygulama-3)
      ============================================================ */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-800 text-white p-2 z-50">
        Ana içeriğe atla
      </a>

      {/* ============================================================
          DARK MODE TOGGLE (Uygulama-5)
      ============================================================ */}
      <button
        onClick={toggleTheme}
        className="fixed bottom-4 right-4 md:top-4 md:bottom-auto z-50 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-3 rounded-full shadow-lg hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Tema değiştir"
      >
        <span className="dark:hidden" aria-hidden="true">&#9790;</span>
        <span className="hidden dark:inline" aria-hidden="true">&#9728;</span>
      </button>

      {/* ============================================================
          HEADER + NAV (Uygulama-10)
      ============================================================ */}
      <header className="sticky top-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 transition-colors">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center gap-3">
          <div className="text-xl font-bold text-blue-800 dark:text-blue-400" aria-label="Seher Akyel kişisel portföy sitesi">
            <span className="text-gray-400">&lt;</span>
            Seher<span className="text-blue-600 dark:text-blue-300">Akyel</span>
            <span className="text-gray-400">/&gt;</span>
          </div>

          <nav aria-label="Ana navigasyon">
            <ul className="flex flex-wrap gap-2 justify-center">
              <li>
                <a href="#hakkimda" className="px-3 py-2 rounded-md font-medium text-gray-700 dark:text-gray-300 hover:bg-blue-50 text-blue-800 dark:hover:bg-gray-800 dark:hover:text-blue-300 transition-colors">
                  Hakkımda
                </a>
              </li>
              <li>
                <a href="#projeler" className="px-3 py-2 rounded-md font-medium text-gray-700 dark:text-gray-300 hover:bg-blue-50 text-blue-800 dark:hover:bg-gray-800 dark:hover:text-blue-300 transition-colors">
                  Projeler
                </a>
              </li>
              <li>
                <a href="#iletisim" className="px-3 py-2 rounded-md font-medium text-gray-700 dark:text-gray-300 hover:bg-blue-50 text-blue-800 dark:hover:bg-gray-800 dark:hover:text-blue-300 transition-colors">
                  İletişim
                </a>
              </li>
              <li>
                <a href="/uikit" className="px-3 py-2 rounded-md font-medium text-purple-700 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-gray-800 border border-purple-200 dark:border-purple-800 transition-colors">
                  UI Kit
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* ============================================================
          MAIN
      ============================================================ */}
      <main id="main-content">
        {/* ---- HERO ---- */}
        <section className="py-20 px-4 text-center bg-gray-50 dark:bg-gray-950 border-b border-gray-100 dark:border-gray-900" aria-labelledby="hero-heading">
          <div className="max-w-4xl mx-auto">
            <h1 id="hero-heading" className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
              Seher Akyel
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Yazılım Mühendisliği Öğrencisi &amp; Frontend Geliştirici
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#projeler"><Button variant="primary" size="lg" className="w-full sm:w-auto">Projelerimi Gör</Button></a>
              <a href="#iletisim"><Button variant="secondary" size="lg" className="w-full sm:w-auto">İletişime Geç</Button></a>
            </div>
          </div>
        </section>

        {/* ============================================================
            HAKKIMDA BÖLÜMÜ
        ============================================================ */}
        <section id="hakkimda" className="py-16 px-4" aria-labelledby="hakkimda-baslik">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
            <figure className="shrink-0 group">
              <img
                src="https://api.dicebear.com/8.x/personas/svg?seed=SeherAkyel235541063&backgroundColor=b6e3f4"
                alt="Seher Akyel'in profil avatarı"
                className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover shadow-xl border-4 border-white dark:border-gray-800 group-hover:scale-105 transition-transform duration-300"
                width="224"
                height="224"
              />
              <figcaption className="sr-only">Seher Akyel — Frontend Geliştirici</figcaption>
            </figure>

            <div className="flex-1 text-center md:text-left">
              <h2 id="hakkimda-baslik" className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Hakkımda
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Merhaba! Ben Seher. <strong className="text-gray-900 dark:text-white">Yazılım Mühendisliği</strong> bölümü
                öğrencisiyim (No: 235541063). Kullanıcı deneyimini ön planda tutan, erişilebilir ve sürdürülebilir
                web uygulamaları geliştirmeye odaklanıyorum.
              </p>

              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Kullandığım Teknolojiler</h3>
              <ul className="flex flex-wrap gap-2 justify-center md:justify-start" aria-label="Kullanılan teknolojiler listesi">
                <li className="bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium shadow-sm">HTML5 &amp; CSS3</li>
                <li className="bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium shadow-sm">Tailwind CSS</li>
                <li className="bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium shadow-sm">JavaScript (ES6+)</li>
                <li className="bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium shadow-sm">React &amp; TypeScript</li>
                <li className="bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium shadow-sm">Git &amp; GitHub</li>
                <li className="bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium shadow-sm">Node.js</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ============================================================
            PROJELERİM BÖLÜMÜ
        ============================================================ */}
        <section id="projeler" className="py-20 px-4 bg-gray-50 dark:bg-gray-900 transition-colors" aria-labelledby="projeler-baslik">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 id="projeler-baslik" className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Projelerim
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Veriler <code className="text-sm bg-gray-200 dark:bg-gray-800 px-1 rounded">public/data/projects.json</code> dosyasından fetch edilir; arama, kategori ve sıralama state ile yönetilir.
              </p>
            </div>

            {projectsError && (
              <Alert variant="error" title="Hata" className="mb-8">
                {projectsError}
              </Alert>
            )}

            {!projectsLoading && !projectsError && (
              <div className="flex flex-col sm:flex-row gap-4 mb-8 items-stretch sm:items-center flex-wrap">
                <div className="flex-1 min-w-[200px]">
                  <Input
                    id="search"
                    name="search"
                    placeholder="Proje ara (başlık, açıklama, teknoloji)…"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    aria-label="Proje ara"
                  />
                </div>
                <div className="flex gap-2 flex-wrap" role="group" aria-label="Kategori filtresi">
                  {categories.map((cat) => (
                    <Button
                      key={cat}
                      variant={category === cat ? 'primary' : 'ghost'}
                      size="sm"
                      type="button"
                      onClick={() => setCategory(cat)}
                      aria-pressed={category === cat}
                    >
                      {categoryButtonLabel(cat)}
                    </Button>
                  ))}
                </div>
                <div className="flex gap-2 items-center">
                  <label htmlFor="sort-field" className="sr-only">
                    Sıralama alanı
                  </label>
                  <select
                    id="sort-field"
                    value={sortField}
                    onChange={(e) => {
                      const v = e.target.value;
                      if (v === 'year' || v === 'title') setSortField(v);
                    }}
                    className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm dark:bg-gray-800 dark:text-white"
                  >
                    <option value="year">Yıl</option>
                    <option value="title">Başlık</option>
                  </select>
                  <Button
                    variant="ghost"
                    size="sm"
                    type="button"
                    onClick={() => setSortOrder((o) => (o === 'asc' ? 'desc' : 'asc'))}
                    aria-label={sortOrder === 'asc' ? 'Sıralama: artan, azalan yap' : 'Sıralama: azalan, artan yap'}
                  >
                    {sortOrder === 'asc' ? 'A-Z / eski→yeni' : 'Z-A / yeni→eski'}
                  </Button>
                </div>
              </div>
            )}

            {projectsLoading && (
              <p className="text-center text-gray-500 dark:text-gray-400 py-12" role="status" aria-live="polite">
                Yükleniyor…
              </p>
            )}

            {!projectsLoading && !projectsError && filtered.length === 0 && (
              <p className="text-center text-gray-500 dark:text-gray-400 py-12">Eşleşen proje bulunamadı.</p>
            )}

            {!projectsLoading && !projectsError && filtered.length > 0 && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filtered.map((project) => (
                    <article key={project.id} className="h-full" aria-label={project.title}>
                      <Card
                        variant="elevated"
                        title={
                          project.featured ? (
                            <span className="flex flex-wrap items-center gap-2">
                              <span>{project.title}</span>
                              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 dark:bg-amber-900/40 dark:text-amber-200">
                                Öne çıkan
                              </span>
                            </span>
                          ) : (
                            project.title
                          )
                        }
                        image={project.image}
                        imageAlt={`${project.title} ekran görüntüsü`}
                        className="h-full flex flex-col"
                        footer={
                          <a
                            href="https://github.com/sehermac"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full"
                          >
                            <Button
                              variant="ghost"
                              className="w-full text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold"
                              aria-label={`${project.title} için GitHub bağlantısı`}
                              type="button"
                            >
                              GitHub&apos;da Görüntüle &rarr;
                            </Button>
                          </a>
                        }
                      >
                        <p className="text-gray-600 dark:text-gray-400 mb-4 min-h-[4.5rem]">{project.description}</p>
                        <ul className="flex flex-wrap gap-2 mt-auto" aria-label={`${project.title} teknolojileri`}>
                          {project.tech.map((t) => (
                            <li
                              key={`${project.id}-${t}`}
                              className="text-xs font-semibold px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                            >
                              {t}
                            </li>
                          ))}
                        </ul>
                        <p className="text-xs text-gray-400 mt-3">
                          {project.year}
                          {' · '}
                          {project.category}
                        </p>
                      </Card>
                    </article>
                  ))}
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-6 text-center">
                  {filtered.length} / {projects.length} proje gösteriliyor
                </p>
              </>
            )}
          </div>
        </section>

        {/* ============================================================
            İLETİŞİM BÖLÜMÜ
        ============================================================ */}
        <section id="iletisim" className="py-20 px-4" aria-labelledby="iletisim-baslik">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-10">
              <h2 id="iletisim-baslik" className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                İletişim
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Benimle çalışmak istersen aşağıdaki formu doldurarak mesaj gönderebilirsin.
              </p>
            </div>

            {formSubmitted && (
              <Alert variant="success" title="Başarılı!" dismissible onDismiss={() => setFormSubmitted(false)} className="mb-6 shadow-sm">
                Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağım.
              </Alert>
            )}

            <Card variant="outlined" className="p-2 sm:p-6 !border-gray-200 dark:!border-gray-800 shadow-xl bg-white dark:bg-gray-900">
              <form onSubmit={handleFormSubmit} className="space-y-6" noValidate aria-labelledby="form-legend">
                <legend id="form-legend" className="sr-only">İletişim Formu</legend>

                <Input
                  id="name"
                  name="name"
                  label="Ad Soyad (*)"
                  placeholder="Örnek: Ahmet Yılmaz"
                  required
                />

                <Input
                  id="email"
                  name="email"
                  label="E-posta (*)"
                  type="email"
                  placeholder="Örnek: ad@mail.com"
                  helpText="E-posta adresiniz yalnızca yanıt vermek için kullanılacaktır."
                  required
                />

                <div className="space-y-1">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Konu (*)
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">-- Seçiniz --</option>
                    <option value="is">İş Teklifi</option>
                    <option value="soru">Soru</option>
                    <option value="oneri">Öneri</option>
                    <option value="diger">Diğer</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Mesajınız (*)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Mesajınızı buraya yazın..."
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <Button variant="primary" size="lg" type="submit" className="w-full sm:w-auto shadow-md hover:shadow-lg">
                    Gönder
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </section>
      </main>

      {/* ============================================================
          FOOTER
      ============================================================ */}
      <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 text-center py-10 px-4 text-gray-500 dark:text-gray-400 text-sm mt-auto transition-colors">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Seher Akyel — Yazılım Mühendisliği (235541063).</p>
          <nav aria-label="Sosyal medya bağlantıları">
            <ul className="flex flex-wrap justify-center gap-6">
              <li>
                <a href="https://github.com/sehermac" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-white transition-colors" aria-label="GitHub profilini görüntüle">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-white transition-colors" aria-label="LinkedIn profilini görüntüle">
                  LinkedIn
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
