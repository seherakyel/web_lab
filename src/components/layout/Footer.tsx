export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 text-center py-10 px-4 text-gray-500 dark:text-gray-400 text-sm mt-auto transition-colors">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} Seher Akyel — Yazılım Mühendisliği (235541063).</p>
        <nav aria-label="Sosyal medya bağlantıları">
          <ul className="flex flex-wrap justify-center gap-6">
            <li>
              <a
                href="https://github.com/sehermac"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900 dark:hover:text-white transition-colors"
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
                className="hover:text-gray-900 dark:hover:text-white transition-colors"
                aria-label="LinkedIn profilini görüntüle"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
