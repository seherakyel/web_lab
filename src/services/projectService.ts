import type { Category, Project } from "../types/project";

const API_URL = "/data/projects.json";

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isCategory(value: unknown): value is Category {
  return value === "frontend" || value === "fullstack" || value === "backend";
}

function parseProject(raw: unknown, index: number): Project {
  if (!isRecord(raw)) {
    throw new Error(`Proje ${index + 1}: geçersiz nesne.`);
  }

  const id = raw.id;
  const title = raw.title;
  const description = raw.description;
  const tech = raw.tech;
  const year = raw.year;
  const category = raw.category;
  const featured = raw.featured;
  const image = raw.image;

  if (typeof id !== "number" || !Number.isInteger(id)) {
    throw new Error(`Proje ${index + 1}: id sayı olmalı.`);
  }
  if (typeof title !== "string") {
    throw new Error(`Proje ${index + 1}: title metin olmalı.`);
  }
  if (typeof description !== "string") {
    throw new Error(`Proje ${index + 1}: description metin olmalı.`);
  }
  if (!Array.isArray(tech) || !tech.every((t): t is string => typeof t === "string")) {
    throw new Error(`Proje ${index + 1}: tech string dizisi olmalı.`);
  }
  if (typeof year !== "number" || !Number.isInteger(year)) {
    throw new Error(`Proje ${index + 1}: year tam sayı olmalı.`);
  }
  if (!isCategory(category)) {
    throw new Error(`Proje ${index + 1}: category geçersiz.`);
  }
  if (typeof featured !== "boolean") {
    throw new Error(`Proje ${index + 1}: featured boolean olmalı.`);
  }
  if (typeof image !== "string") {
    throw new Error(`Proje ${index + 1}: image metin olmalı.`);
  }

  const demoUrl = raw.demoUrl;
  const sourceUrl = raw.sourceUrl;
  if (demoUrl !== undefined && typeof demoUrl !== "string") {
    throw new Error(`Proje ${index + 1}: demoUrl metin olmalı.`);
  }
  if (sourceUrl !== undefined && typeof sourceUrl !== "string") {
    throw new Error(`Proje ${index + 1}: sourceUrl metin olmalı.`);
  }

  return {
    id,
    title,
    description,
    tech,
    year,
    category,
    featured,
    image,
    ...(demoUrl !== undefined ? { demoUrl } : {}),
    ...(sourceUrl !== undefined ? { sourceUrl } : {}),
  };
}

function parseProjectsPayload(data: unknown): Project[] {
  if (!Array.isArray(data)) {
    throw new Error("JSON bir dizi olmalı.");
  }
  return data.map((item, index) => parseProject(item, index));
}

export async function fetchProjects(): Promise<Project[]> {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error(`Projeler yüklenemedi: ${response.status}`);
  }

  let data: unknown;
  try {
    data = await response.json();
  } catch {
    throw new Error("JSON ayrıştırılamadı.");
  }

  return parseProjectsPayload(data);
}
