export default function About() {
  return (
    <section id="about" className="py-16 px-4" aria-labelledby="about-heading">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
        <figure className="shrink-0 group">
          <img
            src="https://api.dicebear.com/8.x/personas/svg?seed=SeherAkyel235541063&backgroundColor=b6e3f4"
            alt="Seher Akyel'in profil avatarı"
            className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover shadow-xl border-4 border-white dark:border-gray-800 group-hover:scale-105 transition-transform duration-300"
            width={224}
            height={224}
          />
          <figcaption className="sr-only">Seher Akyel — Frontend Geliştirici</figcaption>
        </figure>

        <div className="flex-1 text-center md:text-left">
          <h2
            id="about-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Hakkımda
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            Merhaba! Ben Seher.{" "}
            <strong className="text-gray-900 dark:text-white">Yazılım Mühendisliği</strong> bölümü öğrencisiyim (No:
            235541063). Kullanıcı deneyimini ön planda tutan, erişilebilir ve sürdürülebilir web uygulamaları
            geliştirmeye odaklanıyorum.
          </p>
        </div>
      </div>
    </section>
  );
}
