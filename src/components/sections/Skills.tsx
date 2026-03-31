const SKILLS = [
  "HTML5 & CSS3",
  "Tailwind CSS",
  "JavaScript (ES6+)",
  "React & TypeScript",
  "Git & GitHub",
  "Node.js",
] as const;

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-12 px-4 bg-gray-50 dark:bg-gray-950 border-y border-gray-100 dark:border-gray-900"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-5xl mx-auto text-center md:text-left">
        <h2 id="skills-heading" className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Yetenekler
        </h2>
        <ul
          className="flex flex-wrap gap-2 justify-center md:justify-start"
          aria-label="Kullanılan teknolojiler listesi"
        >
          {SKILLS.map((skill) => (
            <li
              key={skill}
              className="bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium shadow-sm"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
