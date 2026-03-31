import type { Category, SortField, SortOrder } from "../../types/project";
import { categoryButtonLabel } from "../../utils/projectHelpers";
import Button from "../ui/Button";
import Input from "../ui/Input";

export interface ProjectFilterProps {
  search: string;
  onSearchChange: (value: string) => void;
  category: Category | "all";
  onCategoryChange: (value: Category | "all") => void;
  sortField: SortField;
  onSortFieldChange: (value: SortField) => void;
  sortOrder: SortOrder;
  onSortOrderChange: (value: SortOrder) => void;
  resultCount: number;
  totalCount: number;
}

const CATEGORIES: (Category | "all")[] = ["all", "frontend", "fullstack", "backend"];

export default function ProjectFilter({
  search,
  onSearchChange,
  category,
  onCategoryChange,
  sortField,
  onSortFieldChange,
  sortOrder,
  onSortOrderChange,
  resultCount,
  totalCount,
}: ProjectFilterProps) {
  return (
    <div className="space-y-4 mb-8">
      <div className="flex-1 min-w-[200px] max-w-full">
        <Input
          id="search"
          name="search"
          placeholder="Proje ara (başlık, açıklama, teknoloji)…"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          aria-label="Proje ara"
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between flex-wrap">
        <div className="flex gap-2 flex-wrap" role="group" aria-label="Kategori filtresi">
          {CATEGORIES.map((cat) => (
            <Button
              key={cat}
              type="button"
              variant={category === cat ? "primary" : "ghost"}
              size="sm"
              onClick={() => onCategoryChange(cat)}
              aria-pressed={category === cat}
            >
              {categoryButtonLabel(cat)}
            </Button>
          ))}
        </div>

        <div className="flex gap-2 items-center flex-wrap">
          <label htmlFor="sort-field" className="sr-only">
            Sıralama alanı
          </label>
          <select
            id="sort-field"
            value={sortField}
            onChange={(e) => {
              const v = e.target.value;
              if (v === "year" || v === "title") onSortFieldChange(v);
            }}
            className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm dark:bg-gray-800 dark:text-white"
            aria-label="Sıralama alanı"
          >
            <option value="year">Yıl</option>
            <option value="title">Başlık</option>
          </select>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => onSortOrderChange(sortOrder === "asc" ? "desc" : "asc")}
            aria-label={
              sortOrder === "asc"
                ? "Sıralama: artan, azalan yap"
                : "Sıralama: azalan, artan yap"
            }
          >
            {sortOrder === "asc" ? "↑ Artan" : "↓ Azalan"}
          </Button>
        </div>
      </div>

      <p className="text-sm text-gray-500 dark:text-gray-400">
        {resultCount} / {totalCount} proje gösteriliyor
      </p>
    </div>
  );
}
