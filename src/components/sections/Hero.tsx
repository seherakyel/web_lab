import Button from "../ui/Button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="py-20 px-4 text-center bg-gray-50 dark:bg-gray-950 border-b border-gray-100 dark:border-gray-900"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-4xl mx-auto">
        <h1
          id="hero-heading"
          className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight"
        >
          Seher Akyel
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Yazılım Mühendisliği Öğrencisi &amp; Frontend Geliştirici
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#projects">
            <Button variant="primary" size="lg" className="w-full sm:w-auto">
              Projelerimi Gör
            </Button>
          </a>
          <a href="#contact">
            <Button variant="secondary" size="lg" className="w-full sm:w-auto">
              İletişime Geç
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
