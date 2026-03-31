import type { Project } from "../../types/project";
import Button from "../ui/Button";
import Card from "../ui/Card";

export interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const titleNode = project.featured ? (
    <span className="flex flex-wrap items-center gap-2">
      <span>{project.title}</span>
      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 dark:bg-amber-900/40 dark:text-amber-200">
        Öne çıkan
      </span>
    </span>
  ) : (
    project.title
  );

  return (
    <article className="h-full" aria-label={project.title}>
      <Card
        variant="elevated"
        title={titleNode}
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
              type="button"
              className="w-full text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold"
              aria-label={`${project.title} için GitHub bağlantısı`}
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
          {" · "}
          {project.category}
        </p>
      </Card>
    </article>
  );
}
